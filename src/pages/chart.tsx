import React, { Component } from "react"
import { View, TouchableHighlight, StyleSheet, Text, Image } from "react-native"

// https://www.google.com/finance/getchart?q=.INX&p=3Y&i=86400
// change it to google's finance data


const dateOptions = ["1M", "3M", "6M", "1Y", "2Y", "5Y"]
interface Props { }
interface State {
  timeSelected: string

}

class Chart extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      timeSelected: null
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dateOptionsRow}>
          {
            dateOptions.map(
              (dateOption) => {
                return <TouchableHighlight style={styles.dateOption}
                  onPress={() => { this.setState({ timeSelected: dateOption }) }}
                  key={dateOption}
                >
                  < Text style={{ fontSize: 15, color: "white" }}>{dateOption}</Text>
                </TouchableHighlight >
              }
            )
          }
        </View >
        {/* chart here */}
        <View style={styles.chart}>
          {
            console.log("here we are getting image")
          }
          <Image
            source={{ uri: "http://img3.qianzhan123.com/news/201506/24/20150624-07e5b86cffa1cb36_600x5000.jpg" }}
            style={styles.image}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dateOptionsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#202020",
  },
  dateOption: {
    alignItems: 'center',
  },
  chart: {
    flex: 8
  },
  image: {
    flex: 1
  }
})

export default Chart