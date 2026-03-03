import { outdent } from 'outdent'
import path from 'node:path'
import fs from 'node:fs'
import { getTermuxPrefix } from '../utils/termux.ts'
// @ts-ignore
import updateSection from 'update-section';

export async function addBashrcAliases({ username }: { username: string }) {
  const bashrcFilepath = path.join(getTermuxPrefix(), 'etc', 'bash.bashrc');
  const bashrcContent = await fs.promises.readFile(bashrcFilepath, 'utf8');
  const newBashrcContent = updateSection(
    bashrcContent,
    outdent`
      alias debian='proot-distro login debian --user ${username} --shared-tmp
    `,
    (line: string) => line === '# termux-xfce START',
    (line: string) => line === '# termux-xfce END'
  )
  await fs.promises.writeFile(bashrcFilepath, newBashrcContent);
}