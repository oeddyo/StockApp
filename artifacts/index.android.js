import { AppRegistry, View, StyleSheet } from 'react-native';
import React from 'react';
//import Stock from "./common/stock"
import Chart from "./pages/chart";
import Stocks from "./pages/stocks";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
export default class MyFinanceApp extends React.Component {
    render() {
        return (React.createElement(Provider, { store: createStore(reducers) },
            React.createElement(View, { style: styles.layout },
                React.createElement(View, { style: styles.stocks },
                    React.createElement(Stocks, null)),
                React.createElement(View, { style: styles.chart },
                    React.createElement(Chart, null)))));
    }
}
const styles = StyleSheet.create({
    layout: {
        backgroundColor: "black",
        flex: 1
    },
    stocks: {
        flex: 10
    },
    chart: {
        flex: 5
    }
});
AppRegistry.registerComponent('MyFinanceApp', () => MyFinanceApp);
//# sourceMappingURL=index.android.js.map