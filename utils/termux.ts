import path from 'node:path'
import os from 'node:os'
import fs from 'node:fs'
import $ from 'dax'

export function getTermuxPrefix() {
  const prefix = process.env.PREFIX
  if (!prefix) {
    throw new Error('PREFIX environment variable is not set')
  }

  return prefix;
}

export async function ensureTermuxSetupStorage() {
  const storageDirpath = path.join(os.homedir(), 'storage');
  if (!fs.existsSync(storageDirpath)) {
    console.error("Can't access storage directory, running termux-setup-storage...");
    await $`termux-setup-storage`
  }
}