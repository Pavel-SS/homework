import React from 'react'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import {NavLink, Routes, Route } from 'react-router-dom'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function RoutesFunc() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <NavLink to={'/pre-junior'}>pre-junior</NavLink>
            <Routes>
            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

            <Route path={'/pre-junior'} element={<PreJunior/>}/>
            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route element={() => <Error404/>}/>

            </Routes>
        </div>
    )
}

export default RoutesFunc
