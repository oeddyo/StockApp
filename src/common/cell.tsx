import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

interface Props {
  marketCap: string
}
interface State {
}

class Cell extends Component<Props, State> {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.cell}>
        <Text style={styles.text}>
          {this.props.marketCap}
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