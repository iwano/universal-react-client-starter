# Universal React Client Starter

## Monorepo starter for fully functioning Web, Electron and React Native clients with code reuse

Heavily nspired by [this tutorial](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej) and [react-native-web-monorepo](https://github.com/brunolemos/react-native-web-monorepo) and [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

### Dependencies

- react
- create-react-app
- react-native
- react-native-web
- electron
- electron-builder
- typescript

### Installation

```
git clone
cd universal-react-client-starter
rm .git
git init
```

### Run web app

```
yarn web
```

### Run electron app

```
yarn desktop
```

### Run mobile apps

```
yarn android
yarn ios
```

### Code Reuse
All apps will share the same code unless you create platform-specific files using the appropriate extension (.web, .android, .ios, .native).

There is no extension for **desktop** (web and desktop share the same code), if you want to add desktop specific code you can use the **isDesktop** helper or the **__IS_ELECTRON__** global constant.

Any conditional block that uses the constant will be removed from the web app build after minification.

### Building from scratch

- Create monorepo `yarn init -w`
- Create packages web|mobile|desktop
- Generate react-native app `npx react-native init mobile --template react-native-template-typescript`
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
- Create web app `npx create-react-app web --template typescript`
- Add react-app-rewired to allow importing outside src folder
- Create electron app (main only)
- Create script to run web app + electron main
