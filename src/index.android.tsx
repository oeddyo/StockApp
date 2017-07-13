import { AppRegistry, View, StyleSheet } from 'react-native';

import React from 'react';
import Stock from "./common/stock"

export interface Props { }
export interface State { }

/*
const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
*/

export default class MyFinanceApp extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.layout}>
        <Stock />
        <Stock />
        <Stock />
        <Stock />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "black",
    flex: 1
  }
})
AppRegistry.registerComponent('MyFinanceApp', () => MyFinanceApp);