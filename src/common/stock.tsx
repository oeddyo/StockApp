import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import Cell from "./cell"

interface Props {
  ticker: string,
  price: number,
  marketCap: string
}
interface State { }

class Stock extends Component<Props, State> {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.leftText}>{this.props.ticker}</Text>
        <Text style={styles.rightText}>{this.props.price}</Text>
        <Cell marketCap={this.props.marketCap}></Cell>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  leftText: {
    margin: 5,
    fontSize: 26, color: "white"
  },
  rightText: {
    margin: 5,
    fontSize: 26, color: "white"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "white",
    borderBottomWidth: 0.3
  }
})



export default Stock