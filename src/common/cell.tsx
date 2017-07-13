import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"


class Cell extends Component {
  render() {
    return (
      <View style={styles.cell}>
        <Text style={styles.text}>
          13.8
        </Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  cell: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 5,
    margin: 5,
    width: 100
  },
  text: {
    fontSize: 26,
    color: "white"
  }
})

export default Cell