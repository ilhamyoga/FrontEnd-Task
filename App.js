import React, { Component } from "react";
import StackNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux';
import store from './src/publics/store';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    );
  }
}