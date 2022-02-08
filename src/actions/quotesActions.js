import { NEW_RANDOM_QUOTE } from "../constants/quotesConstants";

export function generateRandomQuote() {
  return {
    type: NEW_RANDOM_QUOTE,
  };
}
