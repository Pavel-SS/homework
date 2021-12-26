import React from 'react'

import PreJunior from './pages/PreJunior'
import { JuniorDev } from './pages/JuniorDev'
import { JuniorPlus } from './pages/JuniorPlus'
import Error404 from './pages/Error404'
import { Routes, Route } from 'react-router-dom'



function RoutesFunc() {
    return (
        <div> 
            
            <Routes>
                <Route path={'/pre-junior'} element={<PreJunior/>}/>
                <Route path={'/junior'} element={<JuniorDev/>}/>
                <Route path={'/junior_plus'} element={<JuniorPlus/>}/>
                <Route element={() => <Error404/>}/>
            </Routes>
        </div>
    )
}

export default RoutesFunc
