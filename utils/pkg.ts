import $ from 'dax'

export function pkgInstall(dependencies: string[]) {
  return $`pkg install ${dependencies.join(' ')} -o Dpkg::Options::="--force-confold"`
}

export function pkgUpgrade() {
  return $`pkg upgrade -y -o Dpkg::Options::="--force-confold"`
}
