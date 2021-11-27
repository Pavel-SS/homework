import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
 
type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (userName:string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
    // need to fix
    }
    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            addUser()
        }
    }
    const addUser = () => {
        addUserCallback(name)
        let trimName = name.trim();
        if(trimName){
            setError('')
            setName('')
            alert(`Hello ${trimName}!`) // need to fix
        }else{
            setError('error')
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            keyPressHandler ={keyPressHandler}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
