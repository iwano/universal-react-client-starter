# Universal JS Client Starter

## Monorepo starter for fully functioning Web, Electron and React Native clients with code reuse

Inspired by [this tutorial](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej) and [react-native-web-monorepo](https://github.com/brunolemos/react-native-web-monorepo) and [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

### Building from scratch

- Create monorepo `yarn init -w`
- Add typescript and react-native to workspace
- Create packages web|mobile|electron
- Generate react-native app inside packages `npx react-native init mobile --template react-native-template-typescript`
- Modify all imports throughout the mobile folder
    - android/app/src/debug/MainApplication.java
    - android/build.gradle
    - android/app/build.gradle
    - android/settings.gradle
    - ios/Podfile
    - ios/mobile.xcodeproj/project.pbxproj
    - ios/mobile/AppDelegate.m
- Add entryFile and root to android/app/build.gradle
- Add projectRoot to metro.config.js
- Create web app (create-react-app) in ./packages/web
