import { AppRegistry } from 'react-native';
import React from 'react';
//import Stock from "./common/stock"
//import Stocks from "./pages/stocks"
//import StocksEdit from "./pages/stocksEdit"
import RouterComponent from "./scenes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
export default class MyFinanceApp extends React.Component {
    render() {
        return (React.createElement(Provider, { store: createStore(reducers) },
            React.createElement(RouterComponent, null)));
    }
}
AppRegistry.registerComponent('MyFinanceApp', () => MyFinanceApp);
//# sourceMappingURL=index.android.js.map