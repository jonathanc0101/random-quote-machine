import { NEW_RANDOM_QUOTE } from "../constants/quotesConstants";

export const quotesReducer = (state, action) => {
  switch (action.type) {
    case NEW_RANDOM_QUOTE:
      const length = state.quotes.length;

      return {
        quotes: state.quotes,
        randomQuote: state.quotes[Math.floor(Math.random() * length)],
      };
    default:
      return state;
  }
};
