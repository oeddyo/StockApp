import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Cell from "./cell";
class Stock extends Component {
    render() {
        return (React.createElement(View, { style: styles.row },
            React.createElement(Text, { style: styles.leftText }, "NIKE"),
            React.createElement(Text, { style: styles.rightText }, "34.559"),
            React.createElement(Cell, null)));
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