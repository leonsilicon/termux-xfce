import os from 'node:os'
import path from 'node:path'

export const HOME = os.homedir();

export const DEFAULT_DIRECTORIES = [
  path.join(HOME, 'Desktop'),
  path.join(HOME, 'Downloads'),
  path.join(HOME, '.fonts'),
  path.join(HOME, '.config'),
  path.join(HOME, '.config/xfce4/xfconf/xfce-perchannel-xml/'),
  path.join(HOME, '.config/autostart/'),
  path.join(HOME, '.config/gtk-3.0/'),
  path.join(HOME, '.config/xfce4/terminal/'),
  path.join(HOME, '.config/xfce4/panel/'),
  path.join(HOME, '.config/xfce4/panel/launcher-7'),
  path.join(HOME, '.config/xfce4/panel/launcher-10'),
  path.join(HOME, '.config/xfce4/panel/launcher-11'),
]