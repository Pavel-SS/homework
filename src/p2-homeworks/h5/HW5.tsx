import React from 'react'
import Header from './Header'
import RoutesFunc from './Routes'
import {HashRouter} from 'react-router-dom'

function HW5() {
    return (
        <div>
            <hr />
            <hr />
            <hr />
            homeworks 5
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>
            <hr />
            <hr />
            <RoutesFunc/>

            </HashRouter>
        </div>
    )
}

export default HW5
