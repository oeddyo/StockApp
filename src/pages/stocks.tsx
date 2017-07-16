import React, { Component } from "react"
import { ListView, ListViewDataSource, View, Image, TouchableHighlight, Text } from "react-native"
import Stock from "../common/stock"
import Header from "../common/header"
import { connect } from "react-redux"
import { selectStock } from "../actions"
import Chart from "./chart"
import {
  Actions
} from 'react-native-router-flux';

interface Props {
  stocks: Array<{
    marketCap: string,
    price: number,
    ticker: string,
    selected: boolean
  }>,
  selectStock: (number) => void
}
interface State {
  dataSource: ListViewDataSource
}

const renderRightButton = () => {
  return <TouchableHighlight onPress={Actions.addStocks}>
    <Image
      source={{ uri: "https://cdn3.iconfinder.com/data/icons/ui-elements-heavy/100/UI_Heavy_map_pin_add-512.png" }}
      style={{ width: 35, height: 35 }}
    />
  </TouchableHighlight>
}
const renderLeftButton = () => {
  return <Text>Haha</Text>
}

class Stocks extends Component<Props, State>{
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dataSource: ds.cloneWithRows(this.props.stocks)
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.stocks)
    })
  }

  render() {
    return (
      <View style={styles.layout}>
        <Header style={styles.header} renderRightButton={renderRightButton} renderLeftButton={renderLeftButton} />
        <View style={styles.stocks} >
          <ListView dataSource={this.state.dataSource} renderRow={(rowData, _, rowId) => {
            return <Stock
              ticker={rowData.ticker}
              price={rowData.price}
              marketCap={rowData.marketCap}
              selected={rowData.selected}
              idx={parseInt(rowId.toString(), 10)}
              onTouch={this.props.selectStock}
            />
          }}>
          </ListView>
        </View>
        <View style={styles.chart}>
          <Chart />
        </View>
      </View>
    )
  }
}

const styles = {
  header: {
    flex: 1
  },
  stocks: {
    flex: 10
  },
  chart: {
    flex: 5
  },
  layout: {
    backgroundColor: "black",
    flex: 1
  }
}
const mapStateToProps = (state) => {
  return {
    stocks: state.myFinanceApp.stocks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectStock: stockId => {
      dispatch(selectStock(stockId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Stocks)