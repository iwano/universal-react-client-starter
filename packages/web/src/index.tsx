import { AppRegistry } from 'react-native'
import { App } from 'core/src/components/App'
import './index.css'

AppRegistry.registerComponent('web', () => App)
AppRegistry.runApplication('web', {
  rootTag: document.getElementById('root'),
})
