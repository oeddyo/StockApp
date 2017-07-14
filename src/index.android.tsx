import { AppRegistry, View, StyleSheet } from 'react-native';

import React from 'react';
//import Stock from "./common/stock"
import Chart from "./pages/chart"
import Stocks from "./pages/stocks"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"

export interface Props { }
export interface State { }

export default class MyFinanceApp extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.layout}>
          <View style={styles.stocks}>
            <Stocks />
          </View>
          <View style={styles.chart}>
            <Chart />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "black",
    flex: 1
  },
  stocks: {
    flex: 10
  },
  chart: {
    flex: 5
  }
})

AppRegistry.registerComponent('MyFinanceApp', () => MyFinanceApp);