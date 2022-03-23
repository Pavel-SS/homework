import { applyMiddleware, combineReducers, createStore } from "redux";
import { themeReducer } from "./bll/themeReducer";

const rootReducer = combineReducers({
    themes: themeReducer
})

export const store = createStore(rootReducer)