import React from "react";
import {  useDispatch } from "react-redux";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeThemeAC, ThemeStyleType } from "./bll/themeReducer";
import s from "./HW12.module.css";
import {useThemeSelector} from "../h10/bll/store"


const themes = ['dark', 'red', 'some'];

function HW12() {
    // const theme = 'some'; // useSelector
    const theme = useThemeSelector<ThemeStyleType>(state=>state.theme.themeBlock)
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()
    const onChangeCallback = (theme: ThemeStyleType) => {
            if(theme === 'dark') 
            {
                dispatch(changeThemeAC(theme))
            }
            if (theme === 'red') {
                dispatch(changeThemeAC(theme))
            }
            if (theme === 'some'){
                dispatch(changeThemeAC(theme))
            }
    }
    return ( 
        <div className={s[theme]}>
            <hr />
            <span className={s[theme + '-text' ]}>
                homeworks 12
            </span>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <br />
            <SuperRadio  value={theme} options={themes} onChangeOption={onChangeCallback} />
            <hr />
        </div>
    );
}

export default HW12;
