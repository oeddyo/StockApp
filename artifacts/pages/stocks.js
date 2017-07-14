import React, { Component } from "react";
import { View } from "react-native";
import Stock from "../common/stock";
import { connect } from "react-redux";
class Stocks extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, null, this.props.stocks ? this.props.stocks.map((stock) => {
            return React.createElement(Stock, { ticker: stock.ticker, price: stock.price, marketCap: stock.marketCap });
        }) : null));
    }
}
const mapStateToProps = (state) => {
    return {
        stocks: state.myFinanceApp.stocks
    };
};
export default connect(mapStateToProps)(Stocks);
//# sourceMappingURL=stocks.js.map