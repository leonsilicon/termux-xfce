import $ from 'dax';
import which from 'which';

export async function hasAllDependencies(dependencies: string[]) {
  for (const dependency of dependencies) {
    if (!await which(dependency)) {
      return false
    }
  }

  return true
}

export function pkgInstallCommand(dependencies: string[]) {
  return $`pkg install ${dependencies} -y -o Dpkg::Options::="--force-confold"`
}

export function pkgUpgradeCommand() {
  return $`pkg upgrade -y -o Dpkg::Options::="--force-confold"`
}
