import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../screen/authscreen/login';
import SignUp from '../screen/authscreen/Signup';
import Otp from '../screen/authscreen/Otp';
import ForgetPassword from '../screen/authscreen/ForgetPassword';
import ResetPassword from '../screen/authscreen/ResetPassword';

const AuthNavigation = () => {
    return (
        <Routes>
            <Route>
                <Route element={<Login />} path='/' />
                <Route element={<SignUp />} path='/signup' />
                <Route element={<Otp />} path='/otp' />
                <Route element={<ForgetPassword />} path='/forgetpassword' />
                <Route element={<ResetPassword />} path='/resetpassword' />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default AuthNavigation
