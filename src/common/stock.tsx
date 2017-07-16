import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableHighlight } from "react-native"
import Cell from "./cell"

interface Props {
  ticker: string,
  price: number,
  marketCap: string,
  selected: boolean,
  idx: number,
  onTouch: (number) => void
}
interface State { }

class Stock extends Component<Props, State> {
  constructor(props) {
    super(props)
  }
  render() {
    const selectedStyle = (this.props.selected) ? styles.rowSelected : styles.row
    return (
      <TouchableHighlight onPress={() => this.props.onTouch(this.props.idx)} underlayColor="white">
        <View style={selectedStyle}>
          <View style={styles.leftView}>
            <Text style={styles.leftText}>{this.props.ticker}</Text>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.rightText}>{this.props.price}</Text>
          </View>
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
  leftView: {
    justifyContent: "flex-start",
    width: 100,
  },
  rightView: {
    justifyContent: "flex-start",
    width: 100,
  },
  rightText: {
    margin: 5,
    fontSize: 26, color: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "white",
    borderBottomWidth: 0.3,
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