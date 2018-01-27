import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Root from './src/Root';
import store from './src/Store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
