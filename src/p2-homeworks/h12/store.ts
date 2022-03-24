import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import {  themeReducer } from "./bll/themeReducer";


const rootReducer = combineReducers({
    themes: themeReducer
})
export type ThemeStateType = ReturnType<typeof rootReducer>
export const useThemeSelector: TypedUseSelectorHook<ThemeStateType> = useSelector
export const store = createStore(rootReducer, applyMiddleware())
