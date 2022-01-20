import { UserType } from "../../h8/HW8"

type ActionUserType = ( 
    {type: 'sort', payload: 'down' | 'up'} | 
    {type: 'check', payload: number}
)


export const homeWorkReducer = (state: UserType[], action: ActionUserType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a,b)=> a.name.localeCompare(b.name))
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            const newState = [...state].filter(a => a.age >= action.payload); 
            return newState
        }
        default: return state
    }
}