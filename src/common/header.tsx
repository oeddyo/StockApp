import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native"

interface Props {
  renderRightButton: () => JSX.Element,
  renderLeftButton: () => JSX.Element,
  style: any
}
interface State {
}

class Header extends Component<Props, State> {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={this.props.style}>
        <Image source={{ uri: "http://www.moneychoice.org/wp-content/uploads/2015/05/coins_on_chart.jpg" }} style={styles.container}>
          <View>
            <TouchableHighlight>
              {this.props.renderLeftButton()}
            </TouchableHighlight>
          </View>
          <Text>Title</Text>
          <TouchableHighlight>
            {this.props.renderRightButton()}
          </TouchableHighlight>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default Header