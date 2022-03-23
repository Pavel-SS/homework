import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeThemeAC, initState, ThemeReducerStateType,  ThemeStyleType } from "./bll/themeReducer";
import s from "./HW12.module.css";
import {store} from "./store"
const themes = ['dark', 'red', 'some'];

function HW12() {
    const [x, setX] = useState(initState.themeBlock)
    const theme = 'some'; // useSelector
    // const theme = useSelector<ThemeReducerStateType,ThemeStyleType>(state=>state.themeBlock)
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()
    return (
            <div className={s[x]}>
                <hr />
                <span className={s[x + '-text' ]}>
                    homeworks 12
                </span>
                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}
                <br/>
                <Provider store={store} >
                     <SuperRadio name={'radio'} value={x} options={themes} onChangeOption={()=>dispatch(changeThemeAC(theme))} />
                </Provider>
                <hr />
            </div>

    );
}

export default HW12;
