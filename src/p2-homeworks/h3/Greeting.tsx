import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: any // need to fix any
    onKeyPressHandler: any
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressHandler,addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.correct // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler} className={inputClass}/>
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            <span className={s.error_message}>{error}</span>
        </div>
    )
}

export default Greeting
