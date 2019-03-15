/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import LoginFacebook from './src/login_social/LoginFacebook'
import App from './src/App'

AppRegistry.registerComponent(appName, () => App);
