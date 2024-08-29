import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import login from './img/login-02.png';
import loginicon01 from './img/icons/login-icon-01.svg';
import loginicon02 from './img/icons/login-icon-02.svg';
import loginicon03 from './img/icons/login-icon-03.svg';
import './../../../assest/commoncss.css'
import { useLocation } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate()
  const Location = useLocation();
  const [email, setEmail] = useState('singh@email.com');
  const [name, setName] = useState('Singh');
  const [password, setPassword] = useState('123456789');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe);
  return (
    <div className="main-wrapper login-body">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-6 login-wrap">
            <div className="login-sec">
              <div className="log-img">
                <img className="img-fluid" src={login} alt="Logo" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 login-wrap-bg">
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="login-right">
                  <div className="login-right-wrap">
                    {/* <div className="account-logo">
                      <Link to="/"><img src={doctorImage} alt="Logo" /></Link>
                    </div> */}
                    <h2>Getting Started</h2>

                    <form action="https://preclinic.dreamstechnologies.com/html/template/login.html">
                      <div className="input-block">
                        <label htmlFor="fullName">Full Name <span className="login-danger">*</span></label>
                        <input id="fullName" className="form-control" type="text" />
                      </div>
                      <div className="input-block">
                        <label htmlFor="email">Email <span className="login-danger">*</span></label>
                        <input id="email" className="form-control" type="text" />
                      </div>
                      <div className="input-block">
                        <label htmlFor="password">Password <span className="login-danger">*</span></label>
                        <input id="password" className="form-control pass-input" type="password" />
                        <span className="profile-views feather-eye-off toggle-password"></span>
                      </div>
                      <div className="input-block">
                        <label htmlFor="confirmPassword">Confirm Password <span className="login-danger">*</span></label>
                        <input id="confirmPassword" className="form-control pass-input-confirm" type="password" />
                        <span className="profile-views feather-eye-off confirm-password"></span>
                      </div>
                      <div className="forgotpass">
                        <div className="remember-me">
                          <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                            I agree to the &nbsp;terms of service&nbsp;and
                            &nbsp;privacy policy&nbsp;
                            <input type="checkbox" name="radio" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                      <div className="input-block login-btn">
                        <button className="btn btn-primary btn-block" type="submit">Sign up</button>
                      </div>
                    </form>

                    <div className="next-sign">
                      <p className="account-subtitle">Already have an account? <Link to="/login">Login</Link></p>
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

export default SignUp
