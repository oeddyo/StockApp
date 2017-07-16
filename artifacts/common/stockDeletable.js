import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";
class StockDeletable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: { flex: 1, flexDirection: "row" } },
            React.createElement(TouchableHighlight, { onPress: () => this.props.onClickDelete(this.props.idx) },
                React.createElement(Image, { style: styles.image, source: { uri: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-delete-icon.png" } })),
            React.createElement(View, { style: styles.leftView },
                React.createElement(Text, { style: styles.leftText }, this.props.ticker))));
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
    image: {
        width: 60,
        height: 60
    }
});
export default StockDeletable;
//# sourceMappingURL=stockDeletable.js.map