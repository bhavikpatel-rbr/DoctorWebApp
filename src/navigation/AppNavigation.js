import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../screen/appscreen/home';

const AppNavigation = () => {
    return (
        <Routes>
            <Route>
                <Route element={<Home />} path='/' />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default AppNavigation
