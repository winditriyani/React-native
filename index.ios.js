import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import App from './src/App';
import login from './src/components/login';

class twitter extends Component {

  render() {
    const { navigation } = this.props;

    return (
      <App />
    );
  }
}
const SimpleApp = DrawerNavigator({
  Home: { screen: App },
  login: { screen: login }
});

AppRegistry.registerComponent('twitter', () => SimpleApp);
