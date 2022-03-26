import { combineReducers, createStore } from 'redux'
import { themeReducer } from '../../h12/bll/themeReducer'
import {loadingReducer} from './loadingReducer'
import { TypedUseSelectorHook, useSelector } from "react-redux";
const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer 
})

export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>
export const useThemeSelector: TypedUseSelectorHook<AppStoreType> = useSelector
// @ts-ignore
window.store = store 
