import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'
import './Header.scss';

function Header() {
    return (
        <div className={s.header}>

            <NavLink to={'/pre-junior'} 
                className={({isActive})=> isActive ? 'active'+' '+ s.link : s.link}>
                pre-junior
            </NavLink>
            <NavLink to={'./junior'} 
                className={({isActive})=> isActive ? 'active'+' '+ s.link : s.link}>
                junior
            </NavLink>
            <NavLink to={'/junior_plus'} 
                className={({isActive})=> isActive ? 'active'+' '+ s.link : s.link}>
                junior+
            </NavLink>
            <div className={s.block}>&#10144;</div>
        </div>
    )
}

export default Header
