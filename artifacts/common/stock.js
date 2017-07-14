import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Cell from "./cell";
class Stock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const selectedStyle = (this.props.selected) ? styles.rowSelected : styles.row;
        console.log("this props of a single stock = ", this.props);
        return (React.createElement(TouchableHighlight, { onPress: () => this.props.onTouch(this.props.idx) },
            React.createElement(View, { style: selectedStyle },
                React.createElement(Text, { style: styles.leftText }, this.props.ticker),
                React.createElement(Text, { style: styles.rightText }, this.props.price),
                React.createElement(Cell, { marketCap: this.props.marketCap }))));
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
    },
    rowSelected: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "white",
        borderBottomWidth: 0.3,
        backgroundColor: "red"
    }
});
export default Stock;
//# sourceMappingURL=stock.js.map