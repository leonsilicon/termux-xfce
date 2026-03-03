import chalk from 'chalk'
import figures from 'figures'
import $ from "dax";

function printStatus(status: 'ok' | 'warn' | 'error', message: string) {
  if (status === 'ok') {
    console.log(`${chalk.green(figures.tick)} ${message}`);
  } else if (status === 'warn') {
    console.log(`${chalk.yellow(figures.warning)} ${message}`);
  } else {
    console.log(`${chalk.red(figures.cross)} ${message}`);
  }
}

async function checkPlatform() {
  const platform = (await $`uname -o`).stdout.toString().trim();

  if (platform === 'Android') {
    return {
      status: 'ok',
      message: 'Running on Android',
    }
  } else {
    return {
      status: 'error',
      message: 'Not running on Android',
    }
  }
}

async function checkArch() {
  const arch = (await $`uname -m`).stdout.toString().trim();
  if (arch === 'aarch64') {
    return {
      status: 'ok',
      message: 'Running on aarch64',
    }
  }

  return {
    status: 'error',
    message: 'Not running on aarch64',
  }
}

function checkPrefix() {
  if (process.env.PREFIX) {
    return {
      status: 'ok',
      message: 'PREFIX environment variable is set',
    }
  }

  return {
    status: 'error',
    message: 'PREFIX environment variable is not set',
  }
}

async function checkStorage() {
  const freeSpace = (await $`df -h $HOME | awk 'NR==2 {print $4}'`).stdout.toString().trim();
  if (Number(freeSpace) > 4194304) {
    return {
      status: 'ok',
      message: 'Free space is greater than 4GB',
    }
  }

  return {
    status: 'warn',
    message: `Low storage space: ${freeSpace} (4GB recommended)`,
  }
}

async function checkRam() {
  const totalRam = (await $`free -m | awk 'NR==2 {print $2}'`).stdout.toString().trim();
  if (Number(totalRam) > 2048) {
    return {
      status: 'ok',
      message: 'RAM is greater than 2GB',
    }
  }

  return {
    status: 'warn',
    message: `Low RAM: ${totalRam}MB (2GB recommended)`,
  }
}

export async function getSystemCheckResults() {
  return Promise.all([
    checkPlatform(),
    checkArch(),
    checkPrefix(),
    checkStorage(),
    checkRam(),
  ]);
}