import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'native-base';
import Header from './components/header';
import AlbumList from './components/AlbumList';
import List from './components/List';

const styles = StyleSheet.create({
  tabIcon: {
    width: 16,
    height: 16,
  },
});

const App = () => {
  return (
  <View style={{ flex: 1 }}>
    <Header headerText={'PETANI'} />
    <List />
    <AlbumList />
  </View>
);
};
/* eslint-disable global-require */
  App.navigationOptions = {
    drawer: {
        icon: () => (
          <Image
            source={require('./imgs/home.png')}
            style={[styles.tabIcon, { tintColor: 'black' }]}
          />
    ) }
};
export default App;
