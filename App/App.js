


import React, { Component } from 'react';
import Routes from './src/route/route'

import { Provider } from 'react-redux'
import store from './src/store/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}