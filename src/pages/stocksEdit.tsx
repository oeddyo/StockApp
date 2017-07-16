import React, { Component } from "react"
import { ListView, ListViewDataSource, View, Text, TouchableHighlight } from "react-native"
import StockDeletable from "../common/stockDeletable"
import Header from "../common/header"
import { connect } from "react-redux"
import { deleteStock } from "../actions"
import { Actions } from "react-native-router-flux"


interface Props {
  stocks: Array<{
    marketCap: string,
    price: number,
    ticker: string,
    selected: boolean
  }>,
  deleteStock: (number) => void
}
interface State {
  dataSource: ListViewDataSource
}

const renderLeftButton = () => {
  return (
    <TouchableHighlight onPress={Actions.pop}>
      <View>
        <Text>Back</Text>
      </View>
    </TouchableHighlight>
  )
}
const renderRightButton = () => {
  return <Text>Add</Text>
}
const style = {
  header: {
    flex: 1
  }
}

class StocksEdit extends Component<Props, State>{
  constructor(props) {
    super(props)
    console.log("here ", JSON.stringify(this.props.stocks))
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
      <View style={{ flex: 1 }}>
        <Header style={style.header} renderLeftButton={renderLeftButton} renderRightButton={renderRightButton} />
        <View style={{ flex: 15 }}>
          <ListView dataSource={this.state.dataSource} renderRow={(rowData, _, rowId) => {
            return <StockDeletable
              ticker={rowData.ticker}
              selected={rowData.selected}
              idx={parseInt(rowId.toString(), 10)}
              onClickDelete={this.props.deleteStock}
            />
          }}>
          </ListView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stocks: state.myFinanceApp.stocks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStock: stockId => {
      dispatch(deleteStock(stockId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StocksEdit)