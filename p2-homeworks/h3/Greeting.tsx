import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (e:KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressHandler,addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.correct // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler} className={inputClass}/>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            <span className={s.error_message}>{error}</span>
        </div>
    )
}

export default Greeting
