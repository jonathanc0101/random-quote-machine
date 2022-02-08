import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { quotesData } from "./quotes";
import { quotesReducer } from "./reducers/quotesReducers";

const initialState = {
  quotes: quotesData.quotes,
  randomQuote:
    quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)],
};

const store = createStore(quotesReducer, initialState, applyMiddleware(thunk));

export default store;
