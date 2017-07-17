import React, { Component } from "react"
import { View, TextInput, StyleSheet, Text, TouchableWithoutFeedback, TouchableHighlight } from "react-native"
import { connect } from "react-redux"
import { addStock } from "../actions"
import { Actions } from "react-native-router-flux"
import Header from "../common/header"
interface Props {
  addStock: (string) => void
}
interface State {
  text: string
}
const renderLeftButton = () => {
  return <TouchableHighlight onPress={Actions.pop}>
    <Text>Back</Text>
  </TouchableHighlight>
}

const renderRightButton = () => {
  return <TouchableHighlight >
    <View>
      <Text>DoNothing</Text>
    </View>
  </TouchableHighlight>
}

class AddStocks extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = { text: "" }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header renderLeftButton={renderLeftButton} renderRightButton={renderRightButton} style={styles.header} />
        <View style={styles.main}>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ text })}
            />
            <TouchableWithoutFeedback style={styles.okButton} onPress={() => this.props.addStock(this.state.text)}>
              <View>
                <Text>OK</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1
  },
  main: {
    flex: 15
  },
  input: {
    flexDirection: "row"
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    flex: 10
  },
  okButton: {
    flex: 1,
    backgroundColor: "red"
  }
})

const mapStateToProps = (state) => {
  return { stocks: state.myFinanceApp.stocks }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStock: ticker => {
      dispatch(addStock(ticker))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStocks)