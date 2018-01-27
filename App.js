import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Header from './src/components/main/header/Header';
import Root from './src/Root';
import store from './src/Store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header type={0} />
          <Root />
        </View>
      </Provider>
    );
  }
}
