export type ThemeStyleType = 'dark' | 'red' | 'some'

const initState = {
     themeBlock: 'some' as ThemeStyleType
};
 
type ActionType = {
    type: 'CHANGE-THEME'
    theme: ThemeStyleType
}
export const themeReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return state;
        }
        default: return state;
    }
};

export const changeThemeAC = (theme: ThemeStyleType): ActionType => ({type:'CHANGE-THEME', theme}); // fix any


export type ThemeReducerStateType = ReturnType<typeof themeReducer>