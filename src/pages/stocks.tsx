import React, { Component } from "react"
import { View } from "react-native"
import Stock from "../common/stock"
import { connect } from "react-redux"

interface Props {
  stocks: Array<{
    marketCap: string,
    price: number,
    ticker: string
  }>
}
interface State { }

class Stocks extends Component<Props, State>{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        {
          this.props.stocks ? this.props.stocks.map((stock) => {
            return <Stock ticker={stock.ticker} price={stock.price} marketCap={stock.marketCap} />
          }) : null
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stocks: state.myFinanceApp.stocks
  }
}

export default connect(mapStateToProps)(Stocks)