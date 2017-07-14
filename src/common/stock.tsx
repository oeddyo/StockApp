import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableHighlight } from "react-native"
import Cell from "./cell"

interface Props {
  ticker: string,
  price: number,
  marketCap: string,
  selected: boolean,
  idx: string,
  onTouch: (string) => void
}
interface State { }

class Stock extends Component<Props, State> {
  constructor(props) {
    super(props)
  }
  render() {
    const selectedStyle = (this.props.selected) ? styles.rowSelected : styles.row
    console.log("this props of a single stock = ", this.props)
    return (
      <TouchableHighlight onPress={() => this.props.onTouch(this.props.idx)}>
        <View style={selectedStyle}>
          <Text style={styles.leftText}>{this.props.ticker}</Text>
          <Text style={styles.rightText}>{this.props.price}</Text>
          <Cell marketCap={this.props.marketCap}></Cell>
        </View >
      </TouchableHighlight >
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
  },
  rowSelected: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "white",
    borderBottomWidth: 0.3,
    backgroundColor: "red"
  }
})



export default Stock