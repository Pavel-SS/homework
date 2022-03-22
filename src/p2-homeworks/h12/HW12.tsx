import React from "react";
import { useSelector } from "react-redux";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { ThemeReducerStateType,  ThemeStyleType } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = 'some'; // useSelector
    // const theme = useSelector<ThemeReducerStateType,ThemeStyleType>(state=>state.themeBlock)
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperRadio name={'radio'}/>
            </div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
