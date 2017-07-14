import { combineReducers } from "redux";
import { SELECT_STOCK } from "../actions";
const initState = {
    selectedStockId: "",
    stocks: [
        {
            price: 123.00,
            ticker: "NIKE",
            marketCap: "99B"
        },
        {
            price: 18.00,
            ticker: "TWTR",
            marketCap: "15B"
        },
        {
            price: 145.00,
            ticker: "FB",
            marketCap: "320B"
        },
        {
            price: 18.00,
            ticker: "TWTR",
            marketCap: "15B"
        },
        {
            price: 145.00,
            ticker: "FB",
            marketCap: "320B"
        }, {
            price: 18.00,
            ticker: "TWTR",
            marketCap: "15B"
        },
        {
            price: 145.00,
            ticker: "FB",
            marketCap: "320B"
        }, {
            price: 18.00,
            ticker: "TWTR",
            marketCap: "15B"
        },
        {
            price: 145.00,
            ticker: "FB",
            marketCap: "320B"
        },
        {
            price: 18.00,
            ticker: "TWTR",
            marketCap: "15B"
        },
        {
            price: 145.00,
            ticker: "FB",
            marketCap: "320B"
        }, {
            price: 18.00,
            ticker: "TWTR",
            marketCap: "15B"
        },
        {
            price: 145.00,
            ticker: "FB",
            marketCap: "320B"
        }
    ]
};
const myFinanceApp = (state = initState, action) => {
    switch (action.type) {
        case SELECT_STOCK: {
            return Object.assign({}, state, { selectedStockId: action.payload });
        }
        default:
            return state;
    }
};
export default combineReducers({
    myFinanceApp
});
//# sourceMappingURL=index.js.map