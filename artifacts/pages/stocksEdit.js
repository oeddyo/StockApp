import React, { Component } from "react";
import { ListView, View, Text, TouchableHighlight } from "react-native";
import StockDeletable from "../common/stockDeletable";
import Header from "../common/header";
import { connect } from "react-redux";
import { deleteStock } from "../actions";
import { Actions } from "react-native-router-flux";
const renderLeftButton = () => {
    return (React.createElement(TouchableHighlight, { onPress: Actions.pop },
        React.createElement(View, null,
            React.createElement(Text, null, "Back"))));
};
const renderRightButton = () => {
    return React.createElement(Text, null, "Add");
};
const style = {
    header: {
        flex: 1
    }
};
class StocksEdit extends Component {
    constructor(props) {
        super(props);
        console.log("here ", JSON.stringify(this.props.stocks));
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.stocks)
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.stocks)
        });
    }
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(Header, { style: style.header, renderLeftButton: renderLeftButton, renderRightButton: renderRightButton }),
            React.createElement(View, { style: { flex: 15 } },
                React.createElement(ListView, { dataSource: this.state.dataSource, renderRow: (rowData, _, rowId) => {
                        return React.createElement(StockDeletable, { ticker: rowData.ticker, selected: rowData.selected, idx: parseInt(rowId.toString(), 10), onClickDelete: this.props.deleteStock });
                    } }))));
    }
}
const mapStateToProps = (state) => {
    return {
        stocks: state.myFinanceApp.stocks,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteStock: stockId => {
            dispatch(deleteStock(stockId));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(StocksEdit);
//# sourceMappingURL=stocksEdit.js.map