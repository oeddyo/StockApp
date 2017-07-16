import { AppRegistry } from 'react-native';

import React from 'react';
//import Stock from "./common/stock"
//import Stocks from "./pages/stocks"
//import StocksEdit from "./pages/stocksEdit"
import RouterComponent from "./scenes"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"

export interface Props { }
export interface State { }

export default class MyFinanceApp extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <RouterComponent />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MyFinanceApp', () => MyFinanceApp);