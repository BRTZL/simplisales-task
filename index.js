import { AppRegistry } from 'react-native'
import 'react-native-reanimated'
import { name as appName } from './app.json'
import App from './src/index'

AppRegistry.registerComponent(appName, () => App)
