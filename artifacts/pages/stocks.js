import React, { Component } from "react";
import { ListView, View } from "react-native";
import Stock from "../common/stock";
import { connect } from "react-redux";
import { selectStock } from "../actions";
class Stocks extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => { return true; }
        });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.stocks)
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log("nextProps change => ", JSON.stringify(nextProps));
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.stocks)
        });
    }
    render() {
        console.log("now selectedId = ", this.props.selectedId);
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(ListView, { dataSource: this.state.dataSource, renderRow: (rowData, _, rowId) => {
                    console.log("so => ", this.props.selectedId === rowId.toString());
                    return React.createElement(Stock, { ticker: rowData.ticker, price: rowData.price, marketCap: rowData.marketCap, selected: this.props.selectedId === rowId.toString(), idx: rowId.toString(), onTouch: this.props.selectStock });
                } })));
    }
}
const mapStateToProps = (state) => {
    console.log("new store ", JSON.stringify(state));
    return {
        stocks: state.myFinanceApp.stocks,
        selectedId: state.myFinanceApp.selectedStockId
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        selectStock: stockId => {
            console.log("clicked ", stockId);
            dispatch(selectStock(stockId));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
//# sourceMappingURL=stocks.js.map