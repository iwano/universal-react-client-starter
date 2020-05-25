/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { App } from 'core/src/components/App'
import { name as appName } from './app.json'

__IS_ELECTRON__ = false

AppRegistry.registerComponent(appName, () => App)
