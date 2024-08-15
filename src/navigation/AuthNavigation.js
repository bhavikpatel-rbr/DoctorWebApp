import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../screen/authscreen/login';
import SignUp from '../screen/authscreen/Signup';

const AuthNavigation = () => {
    return (
        <Routes>
            <Route>
                <Route element={<Login />} path='/' />
                <Route element={<SignUp />} path='/signup' />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default AuthNavigation
