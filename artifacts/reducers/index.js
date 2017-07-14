import { combineReducers } from "redux";
import { SELECT_STOCK } from "../actions";
const initState = {
    selectedStockId: null,
    stocks: [
        {
            price: 123.00,
            ticker: "NIKE",
            marketCap: "99B"
        }
    ]
};
const myFinanceApp = (state = initState, action) => {
    switch (action.type) {
        case SELECT_STOCK: {
            return Object.assign({}, state, { selectedStock: action.ticker });
        }
        default:
            return state;
    }
};
export default combineReducers({
    myFinanceApp
});
//# sourceMappingURL=index.js.map