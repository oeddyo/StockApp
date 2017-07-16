import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Cell from "./cell";
class Stock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const selectedStyle = (this.props.selected) ? styles.rowSelected : styles.row;
        return (React.createElement(TouchableHighlight, { onPress: () => this.props.onTouch(this.props.idx), underlayColor: "white" },
            React.createElement(View, { style: selectedStyle },
                React.createElement(View, { style: styles.leftView },
                    React.createElement(Text, { style: styles.leftText }, this.props.ticker)),
                React.createElement(View, { style: styles.rightView },
                    React.createElement(Text, { style: styles.rightText }, this.props.price)),
                React.createElement(Cell, { marketCap: this.props.marketCap }))));
    }
}
const styles = StyleSheet.create({
    leftText: {
        margin: 5,
        fontSize: 26, color: "white"
    },
    leftView: {
        justifyContent: "flex-start",
        width: 100,
    },
    rightView: {
        justifyContent: "flex-start",
        width: 100,
    },
    rightText: {
        margin: 5,
        fontSize: 26, color: "white",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "white",
        borderBottomWidth: 0.3,
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