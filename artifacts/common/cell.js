import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
class Cell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: styles.cell },
            React.createElement(Text, { style: styles.text }, this.props.marketCap)));
    }
}
const styles = StyleSheet.create({
    cell: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "green",
        borderRadius: 5,
        margin: 5,
        width: 100
    },
    text: {
        fontSize: 26,
        color: "white"
    }
});
export default Cell;
//# sourceMappingURL=cell.js.map