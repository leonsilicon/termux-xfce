#!/usr/bin/env node
import { getSystemCheckResults } from '../utils/checks.ts'
import fs from 'node:fs'
import { hasAllDependencies, pkgInstallCommand, pkgUpgradeCommand } from '../utils/pkg.ts'
import boxen from 'boxen'
import { ensureTermuxSetupStorage } from '../utils/termux.ts'
import { addBashrcAliases } from '../utils/bashrc.ts'
import { CORE_DEPENDENCIES, XFCE_PACKAGES } from '../constants/dependencies.ts'
import { DEFAULT_DIRECTORIES } from '../constants/directories.ts'
import readline from 'node:readline/promises'
import packageJson from '../package.json'
import { consola } from 'consola'

console.log(`Version ${packageJson.version}`)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// clear();
console.log(boxen('XFCE Desktop Installation', { borderStyle: 'double' }))

consola.info('System Compatibility Check')
const systemCheckResults = await getSystemCheckResults();

const username = await rl.question("Please enter username for proot installation: ")

consola.start("Ensuring Termux storage access is granted...");
await ensureTermuxSetupStorage();

consola.start("Upgrading packages...");
if ((await pkgUpgradeCommand()).code !== 0) {
  console.error("Failed to upgrade packages, exiting...");
  process.exit(1);
}

if (await hasAllDependencies(CORE_DEPENDENCIES)) {
  consola.success("All core dependencies are already installed!");
} else {
  consola.start("Installing core dependencies...");
  await pkgInstallCommand(CORE_DEPENDENCIES);
}

consola.start("Creating default directories...");
for (const directory of DEFAULT_DIRECTORIES) {
  fs.mkdirSync(directory, { recursive: true });
}

consola.start("Installing XFCE dependencies...");
if (await hasAllDependencies(XFCE_PACKAGES)) {
  consola.success("All XFCE dependencies are already installed!");
} else {
  await pkgInstallCommand(XFCE_PACKAGES);
}

consola.start("Adding aliases to .bashrc...");
await addBashrcAliases({ username });
