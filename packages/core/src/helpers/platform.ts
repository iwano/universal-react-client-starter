import { Platform } from 'react-native'

export enum PlatformType {
	WEB='web',
	DESKTOP='desktop',
	ANDROID='android',
	IOS='ios'
}

const getPlatform = (): string => {
  const os = Platform.OS
  if (os !== 'web') {
    return os
  }

  return __IS_ELECTRON__ ? 'desktop' : os
}

const isWeb = (): boolean => {
  return Platform.OS === PlatformType.WEB
}

const isDesktop = (): boolean => {
  return getPlatform() === PlatformType.DESKTOP
}

const isAndroid = (): boolean => {
  return Platform.OS === PlatformType.ANDROID
}

const isIOS = (): boolean => {
  return Platform.OS === PlatformType.IOS
}

export { getPlatform, isWeb, isDesktop, isAndroid, isIOS }
