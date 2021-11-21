import React from 'react'
import { AffairType } from './HW2'
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            <span className={style.affair_name}>{props.affair.name}</span> 
            <span className={style.affair_priority}>{props.affair.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
