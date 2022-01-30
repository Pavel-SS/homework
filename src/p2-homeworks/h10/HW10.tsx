import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';

import s from './Preloader.module.scss'
function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loadingPage)

    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(()=>{
            dispatch(loadingAC(false))
        }, 1500)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.preloader}>
                        <div className={s.preloader__image}></div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                    // <div className={s.preloader}>
                    //     <div className={s.preloader__image}></div>
                    // </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
