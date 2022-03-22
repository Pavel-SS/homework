import { combineReducers, createStore } from 'redux'
import { themeReducer } from '../../h12/bll/themeReducer'
import {loadingReducer} from './loadingReducer'

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer 
})

export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store 
