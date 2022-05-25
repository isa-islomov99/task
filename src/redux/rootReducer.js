import { combineReducers } from "redux";

import {cardData} from "./item/itemReducer";

const rootReducer = combineReducers({
  cardItems: cardData,
});

export default rootReducer;
