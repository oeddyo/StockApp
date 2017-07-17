import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text, TouchableWithoutFeedback, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { addStock } from "../actions";
import { Actions } from "react-native-router-flux";
import Header from "../common/header";
const renderLeftButton = () => {
    return React.createElement(TouchableHighlight, { onPress: Actions.pop },
        React.createElement(Text, null, "Back"));
};
const renderRightButton = () => {
    return React.createElement(TouchableHighlight, null,
        React.createElement(View, null,
            React.createElement(Text, null, "DoNothing")));
};
class AddStocks extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Header, { renderLeftButton: renderLeftButton, renderRightButton: renderRightButton, style: styles.header }),
            React.createElement(View, { style: styles.main },
                React.createElement(View, { style: styles.input },
                    React.createElement(TextInput, { style: styles.textInput, onChangeText: (text) => this.setState({ text }) }),
                    React.createElement(TouchableWithoutFeedback, { style: styles.okButton, onPress: () => this.props.addStock(this.state.text) },
                        React.createElement(View, null,
                            React.createElement(Text, null, "OK")))))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1
    },
    main: {
        flex: 15
    },
    input: {
        flexDirection: "row"
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        flex: 10
    },
    okButton: {
        flex: 1,
        backgroundColor: "red"
    }
});
const mapStateToProps = (state) => {
    return { stocks: state.myFinanceApp.stocks };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addStock: ticker => {
            dispatch(addStock(ticker));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddStocks);
//# sourceMappingURL=addStocks.js.map