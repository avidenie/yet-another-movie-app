import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './src/core/components/App';

AppRegistry.registerComponent(appName, () => App);
