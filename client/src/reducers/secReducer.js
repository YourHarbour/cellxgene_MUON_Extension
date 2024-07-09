import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cascadeReducers from "./cascade";
import undoable from "./undoable";
import annoMatrixAlter from "./annoMatrixAlter";
import obsCrossfilterAlter from "./obsCrossfilterAlter";
import layoutChoiceAlter from "./layoutChoiceAlter";
import undoableConfig from "./undoableConfig";

const alterReducer = undoable(
  cascadeReducers([
    ["annoMatrixAlter", annoMatrixAlter],
    ["obsCrossfilterAlter", obsCrossfilterAlter],
    ["layoutChoiceAlter", layoutChoiceAlter],
  ]),
  [
    "annoMatrixAlter",
    "obsCrossfilterAlter",
    "layoutChoiceAlter",
  ],
  undoableConfig
);

const storeAlter = createStore(alterReducer, applyMiddleware(thunk));
export default storeAlter;