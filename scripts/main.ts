#!/usr/bin/env bun
import chalk from 'chalk'
import clear from 'console-clear'
import { outdent } from 'outdent'
import { getSystemCheckResults } from '../utils/checks.ts'

clear();

console.log(outdent`
  ${chalk.blue('╔════════════════════════════════════╗')}
  ${chalk.blue('║    XFCE Desktop Installation       ║')}
  ${chalk.blue('╚════════════════════════════════════╝')}
`)

console.log(outdent`
  ${chalk.blue('╔════════════════════════════════════╗')}
  ${chalk.blue('║      System Compatibility Check    ║')}
  ${chalk.blue('╚════════════════════════════════════╝')}
`)

const systemCheckResults = await getSystemCheckResults();
console.log(systemCheckResults);