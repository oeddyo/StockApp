import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: this.props.style },
            React.createElement(Image, { source: { uri: "http://www.moneychoice.org/wp-content/uploads/2015/05/coins_on_chart.jpg" }, style: styles.container },
                React.createElement(View, null,
                    React.createElement(TouchableHighlight, null, this.props.renderLeftButton())),
                React.createElement(Text, null, "Title"),
                React.createElement(TouchableHighlight, null, this.props.renderRightButton()))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
export default Header;
//# sourceMappingURL=header.js.map