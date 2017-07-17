import { combineReducers } from "redux";
import { SELECT_STOCK, DELETE_STOCK, ADD_STOCK } from "../actions";
const initState = {
    stocks: [
        {
            price: 123.00,
            ticker: "NIKE",
            marketCap: "99B",
            selected: false
        },
        {
            price: 18.00,
            ticker: "TWTR",
            marketCap: "15B",
            selected: false
        },
        {
            price: 145.00,
            ticker: "JD",
            marketCap: "320B",
            selected: false
        },
        {
            price: 18.00,
            ticker: "WEIBO",
            marketCap: "15B",
            selected: false
        },
        {
            price: 145.00,
            ticker: "GOOG",
            marketCap: "320B",
            selected: false
        }, {
            price: 18.00,
            ticker: "AMAZ",
            marketCap: "15B",
            selected: false
        },
        {
            price: 145.00,
            ticker: "WO",
            marketCap: "320B",
            selected: false
        }, {
            price: 18.00,
            ticker: "QIHOO",
            marketCap: "15B",
            selected: false
        },
        {
            price: 145.00,
            ticker: "SOHU",
            marketCap: "320B",
            selected: false
        },
        {
            price: 18.00,
            ticker: "HAHA",
            marketCap: "15B",
            selected: false
        },
        {
            price: 145.00,
            ticker: "QQ",
            marketCap: "320B",
            selected: false
        }, {
            price: 18.00,
            ticker: "TENC",
            marketCap: "15B",
            selected: false
        },
        {
            price: 145.00,
            ticker: "BABA",
            marketCap: "320B",
            selected: false
        }
    ]
};
const myFinanceApp = (state = initState, action) => {
    switch (action.type) {
        case SELECT_STOCK: {
            const after = {
                stocks: [
                    ...(state.stocks.slice(0, action.payload).map(x => { return Object.assign({}, x, { selected: false }); })),
                    Object.assign({}, state.stocks[action.payload], { selected: true }),
                    ...state.stocks.slice(action.payload + 1).map(x => { return Object.assign({}, x, { selected: false }); })
                ]
            };
            return after;
        }
        case DELETE_STOCK: {
            const after = {
                stocks: [
                    ...state.stocks.slice(0, action.payload),
                    ...state.stocks.slice(action.payload + 1)
                ]
            };
            return after;
        }
        case ADD_STOCK: {
            console.log("calling add stock");
            const after = {
                stocks: [...state.stocks, {
                        ticker: action.payload,
                        price: 99,
                        marketCap: "13B",
                        selected: false
                    }]
            };
            console.log("after => ", after);
            return after;
        }
        default:
            return state;
    }
};
export default combineReducers({
    myFinanceApp
});
//# sourceMappingURL=index.js.map