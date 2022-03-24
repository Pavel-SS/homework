import React from "react";
import { Provider, useDispatch } from "react-redux";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeThemeAC, ThemeStyleType } from "./bll/themeReducer";
import s from "./HW12.module.css";
import {store, useThemeSelector} from "./store"


const themes = ['dark', 'red', 'some'];

function HW12() {
    // const theme = 'some'; // useSelector
    const theme = useThemeSelector<ThemeStyleType>(state=>state.themes.themeBlock)
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()
    const onChangeCallback = () => {
        dispatch(changeThemeAC(theme))
    }
    return ( 
    <Provider store={store}>
        <div className={s[theme]}>
            <hr />
            <span className={s[theme + '-text' ]}>
                homeworks 12
            </span>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <br />
            <SuperRadio name={'radio'} value={theme} options={themes} onChangeOption={()=>onChangeCallback()} />
            <hr />
        </div>
    </Provider>
    );
}

export default HW12;
