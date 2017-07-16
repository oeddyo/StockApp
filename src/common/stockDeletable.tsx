import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native"

interface Props {
  ticker: string,
  selected: boolean,
  idx: number,
  onClickDelete: (number) => void
}
interface State { }

class StockDeletable extends Component<Props, State> {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableHighlight onPress={() => this.props.onClickDelete(this.props.idx)}>
          <Image
            style={styles.image}
            source={{ uri: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-delete-icon.png" }}
          />
        </TouchableHighlight >
        <View style={styles.leftView}>
          <Text style={styles.leftText}>{this.props.ticker}</Text>
        </View>
      </View >
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
  image: {
    width: 60,
    height: 60
  }
})



export default StockDeletable