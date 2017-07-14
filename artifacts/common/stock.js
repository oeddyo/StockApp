import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Cell from "./cell";
class Stock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: styles.row },
            React.createElement(Text, { style: styles.leftText }, this.props.ticker),
            React.createElement(Text, { style: styles.rightText }, this.props.price),
            React.createElement(Cell, { marketCap: this.props.marketCap })));
    }
}
const styles = StyleSheet.create({
    leftText: {
        margin: 5,
        fontSize: 26, color: "white"
    },
    rightText: {
        margin: 5,
        fontSize: 26, color: "white"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "white",
        borderBottomWidth: 0.3
    }
});
export default Stock;
//# sourceMappingURL=stock.js.map