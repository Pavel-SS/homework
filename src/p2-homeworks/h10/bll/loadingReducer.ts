const initState = {
    loadingPage: false
}
type ActionType = {
    type: 'LOADING'
    loading: boolean
}
export const loadingReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, loadingPage: action.loading}
        }
        default: return state
    }
}

export const loadingAC = (loading: boolean): ActionType => ({type: 'LOADING', loading}) // fix any