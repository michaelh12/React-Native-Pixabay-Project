/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import AppNavigatorRoot from './app/AppNavigator';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigatorRoot);
