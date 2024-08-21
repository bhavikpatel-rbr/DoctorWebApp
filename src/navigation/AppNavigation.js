import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../screen/appscreen/home';
import SignUp from '../screen/authscreen/Signup';
const AppNavigation = () => {
    return (
        <Routes>
            <Route>
                <Route element={<Home />} path='/' />
                <Route element={<SignUp />} path='/signup' />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default AppNavigation
