export type ThemeStyleType = 'dark' | 'red' | 'some' 

export const initState = {
     themeBlock: 'some' as ThemeStyleType
};
 
type ActionType = {
    type: 'CHANGE-THEME'
    theme: ThemeStyleType
}
export const themeReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, themeBlock: action.theme}
        }
        default: return state;
    }
};

export const changeThemeAC = (theme: ThemeStyleType): ActionType => ({type:'CHANGE-THEME', theme}); // fix any


export type ThemeReducerStateType = ReturnType<typeof themeReducer>