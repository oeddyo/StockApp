import React, { Component } from "react";
import { View } from "react-native";
import Stock from "../common/stock";
class Stocks extends Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(Stock, null),
            React.createElement(Stock, null),
            React.createElement(Stock, null),
            React.createElement(Stock, null)));
    }
}
//const styles = StyleSheet.create({
//})
export default Stocks;
//# sourceMappingURL=stocks.js.map