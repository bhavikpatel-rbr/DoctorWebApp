import React, { useState } from 'react'
import { mdiAccountCircleOutline, mdiEmailOutline, mdiLockOutline } from '@mdi/js';
import { BiAbacus, BiBarChartAlt, BiBellOff } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../Sidebar/Sidebar';
import HcOffcanvasNav from 'hc-offcanvas-nav';
import calendaricon from './img/icons/calendar-icon.svg';
import login from './img/login-02.png';
import doctorImage from './img/login-logo.png';
import loginicon01 from './img/icons/login-icon-01.svg';
import loginicon02 from './img/icons/login-icon-02.svg';
import loginicon03 from './img/icons/login-icon-03.svg';
import './../../../assest/commoncss.css'
import { useLocation } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="main-wrapper login-body">
    <div className="container-fluid px-0">
      <div className="row">

        <div className="col-lg-6 login-wrap">
          <div className="login-sec">
            <div className="log-img">
              <img className="img-fluid" src={login} alt="Doctor" />
            </div>
          </div>
        </div>

        <div className="col-lg-6 login-wrap-bg">
          <div className="login-wrapper">
            <div className="loginbox">
              <div className="login-right">
                <div className="login-right-wrap">
                  <div className="account-logo">
                    <Link to="/"><img src={doctorImage} alt="Logo" /></Link>
                  </div>
                  <h2>Login</h2>

                  <form action="https://preclinic.dreamstechnologies.com/html/template/index.html">
                    <div className="input-block">
                      <label htmlFor="email">Email <span className="login-danger">*</span></label>
                      <input id="email" className="form-control" type="text" />
                    </div>
                    <div className="input-block">
                      <label htmlFor="password">Password <span className="login-danger">*</span></label>
                      <input id="password" className="form-control pass-input" type="password" />
                      <span className="profile-views feather-eye-off toggle-password"></span>
                    </div>
                    <div className="forgotpass">
                      <div className="remember-me">
                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> 
                          Remember me
                          <input type="checkbox" name="radio" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <Link to="/resetpassword">Forgot Password?</Link>
                    </div>
                    <div className="input-block login-btn">
                      <button className="btn btn-primary btn-block" type="submit">Login</button>
                    </div>
                  </form>

                  <div className="next-sign">
                    <p className="account-subtitle">Need an account? <Link to="/register">Sign Up</Link></p>

                    <div className="social-login">
                    <a href="javascript:;"><img src={loginicon01} alt="Icon 1" /></a>
                        <a href="javascript:;"><img src={loginicon02}  alt="Icon 2" /></a>
                        <a href="javascript:;"><img src={loginicon03}  alt="Icon 3" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Login
