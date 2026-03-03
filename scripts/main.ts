#!/usr/bin/env node
import chalk from 'chalk'
import { getSystemCheckResults } from '../utils/checks.ts'
import fs from 'node:fs'
import { pkgInstall, pkgUpgrade } from '../utils/pkg.ts'
import boxen from 'boxen'
import { ensureTermuxSetupStorage } from '../utils/termux.ts'
import { addBashrcAliases } from '../utils/bashrc.ts'
import { CORE_DEPENDENCIES, XFCE_PACKAGES } from '../constants/dependencies.ts'
import { DEFAULT_DIRECTORIES } from '../constants/directories.ts'
import readline from 'node:readline/promises'
import packageJson from '../package.json'

console.log(`Version ${packageJson.version}`)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// clear();
console.log(boxen('XFCE Desktop Installation', { borderStyle: 'double' }))

console.log(chalk.underline('System Compatibility Check'))
const systemCheckResults = await getSystemCheckResults();

const username = await rl.question("Please enter username for proot installation: ")

console.log("Ensuring Termux storage access is granted...");
await ensureTermuxSetupStorage();

console.log("Upgrading packages...");
if ((await pkgUpgrade()).code !== 0) {
  console.error("Failed to upgrade packages, exiting...");
  process.exit(1);
}

console.log("Installing core dependencies...");
await pkgInstall(CORE_DEPENDENCIES);

console.log("Creating default directories...");
for (const directory of DEFAULT_DIRECTORIES) {
  fs.mkdirSync(directory, { recursive: true });
}

console.log("Installing XFCE dependencies...");
await pkgInstall(XFCE_PACKAGES);

console.log('Adding aliases to .bashrc...');
await addBashrcAliases({ username });
