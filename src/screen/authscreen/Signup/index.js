import React, { useState } from 'react'
import { mdiAccountCircleOutline, mdiEmailOutline, mdiLockOutline } from '@mdi/js';
import { BiAbacus, BiBarChartAlt, BiBellOff } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../Sidebar/Sidebar';
import HcOffcanvasNav from 'hc-offcanvas-nav';
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
   <>
    <div className="sign-in p-4">
    <Sidebar/>
    <div className="d-flex align-items-start justify-content-between mb-4">
      <div>
        <span className="mdi mdi-account-plus-outline display-1 text-primary"></span>
        <h2 className="my-3 fw-bold">Getting Started</h2>
        <p className="text-muted mb-0">Create an account to continue!</p>
      </div>
      <a className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5 hc-nav-trigger hc-nav-1" href="#">
          <BiAbacus size={24} className="d-flex" />
        </a>
    </div>
    <form>
      <div className="mb-3">
        <label htmlFor="exampleFormControlEmail" className="form-label mb-1">Email</label>
        <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlEmail">
          <span className="input-group-text bg-transparent rounded-0 border-0" id="mail">
            <span className="mdi mdi-email-outline mdi-18px text-muted"></span>
          </span>
          <input 
            type="email" 
            className="form-control bg-transparent rounded-0 border-0 px-0" 
            placeholder="Type your email or phone" 
            aria-label="Type your email or phone" 
            aria-describedby="mail" 
            value={email} 
            onChange={handleEmailChange} 
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlName" className="form-label mb-1">Name</label>
        <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlName">
          <span className="input-group-text bg-transparent rounded-0 border-0" id="name">
            <span className="mdi mdi-account-circle-outline mdi-18px text-muted"></span>
          </span>
          <input 
            type="text" 
            className="form-control bg-transparent rounded-0 border-0 px-0" 
            placeholder="Type your name" 
            aria-label="Type your name" 
            aria-describedby="name" 
            value={name} 
            onChange={handleNameChange} 
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlPassword" className="form-label mb-1">Password</label>
        <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlPassword">
          <span className="input-group-text bg-transparent rounded-0 border-0" id="password">
            <span className="mdi mdi-lock-outline mdi-18px text-muted"></span>
          </span>
          <input 
            type="password" 
            className="form-control bg-transparent rounded-0 border-0 px-0" 
            placeholder="Type your password" 
            aria-label="Type your password" 
            aria-describedby="password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
        </div>
      </div>
      <div className="form-check form-switch mb-3">
        <input 
          className="form-check-input" 
          type="checkbox" 
          role="switch" 
          id="flexSwitchCheckDefault" 
          checked={rememberMe} 
          onChange={handleRememberMeChange} 
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Remember Me</label>
      </div>
      <div>
        <Link  to={"/otp"} className="btn btn-info btn-lg w-100 rounded-4 mb-3">
        <div  onClick={() => navigate("/otp")}>

          Create Account
        </div>
        </Link>
        <p 
        className="text-muted text-center small">
          Already have an account? <a className="text-primary" href="sign-in.html">Sign In</a>
        </p>
        
      </div>
    </form>
   
  </div>
   <div className="footer fixed-bottom m-4">
   <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
     <hr className="col" />
     <span>Or Continue With</span>
     <hr className="col" />
   </div>
   <div className="d-flex gap-2">
     <a href="sign-in-email.html" className="btn btn-white btn-lg bg-white col d-flex align-items-center justify-content-center shadow-sm border">
       <i className="bi bi-google h4 mb-0 me-3"></i>Google
     </a>
     <a href="sign-in-email.html" className="btn btn-white btn-lg bg-white col d-flex align-items-center justify-content-center shadow-sm border">
       <i className="bi bi-apple h4 mb-0 me-3"></i>Apple
     </a>
   </div>
 </div>
 </>
  
  )
}

export default SignUp
