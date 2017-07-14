import React, { Component } from "react"
import { View } from "react-native"
import Stock from "../common/stock"


class Stocks extends Component {
  render() {
    return (
      <View>
        <Stock />
        <Stock />
        <Stock />
        <Stock />
      </View>
    )

  }
}

//const styles = StyleSheet.create({
//})

export default Stocks