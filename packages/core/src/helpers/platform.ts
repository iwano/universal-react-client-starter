import { Platform } from 'react-native'

declare var __IS_ELECTRON__: boolean

const getPlatform = (): string => {
  const os = Platform.OS
  if (os !== 'web') {
    return os
  }

  return __IS_ELECTRON__ ? 'electron' : os
}

export { getPlatform }
