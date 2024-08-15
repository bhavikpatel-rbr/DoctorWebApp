import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { mdiAccountCircleOutline, mdiEmailOutline, mdiLockOutline } from '@mdi/js';
import { BiAbacus, BiBarChartAlt, BiBellOff } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
const SignUp = () => {
    return (
        <div className="bg-light p-4">
      <div className="d-flex align-items-start justify-content-between mb-4">
        <div>
          <MdAccountCircle size={60} className="text-primary" />
          <h2 className="my-3 fw-bold">Let's Sign in</h2>
          <p className="text-muted mb-0">Welcome Back, You've<br />been missed!</p>
        </div>
        <a className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5" href="#">
          <BiAbacus size={24} className="d-flex" />
        </a>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlEmail" className="form-label mb-1">Email</label>
          <div className="input-group border bg-white rounded-3 py-1">
            <span className="input-group-text bg-transparent rounded-0 border-0" id="mail">
              <svg width="24" height="24">
                <path d={mdiEmailOutline} />
              </svg>
            </span>
            <input
              type="email"
              className="form-control bg-transparent rounded-0 border-0 px-0"
              placeholder="Type your email or phone"
              aria-label="Type your email or phone"
              aria-describedby="mail"
              value="singh@email.com"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlPassword" className="form-label mb-1">Password</label>
          <div className="input-group border bg-white rounded-3 py-1">
            <span className="input-group-text bg-transparent rounded-0 border-0" id="password">
              <svg width="24" height="24">
                <path d={mdiLockOutline} />
              </svg>
            </span>
            <input
              type="password"
              className="form-control bg-transparent rounded-0 border-0 px-0"
              placeholder="Type your password"
              aria-label="Type your password"
              aria-describedby="password"
              value="123456789"
            />
          </div>
        </div>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Remember Me</label>
        </div>
        <div>
          <a href="home.html" className="btn btn-info btn-lg w-100 rounded-4 mb-2">Login</a>
          <div className="d-flex justify-content-between mt-2">
            <a href="forget-password.html" className="d-flex justify-content-end small text-primary">Forget Password?</a>
            <p className="text-muted text-end small">Don't have an account? <a className="text-primary" href="sign-up.html">Sign up</a></p>
          </div>
        </div>
      </form>

      <div className="footer fixed-bottom m-4">
        <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
          <hr className="col" />
          <span>Or Continue With</span>
          <hr className="col" />
        </div>
        <div className="d-flex gap-3">
          <a href="sign-in-email.html" className="btn btn-white btn-lg bg-white col d-flex align-items-center justify-content-center shadow-sm border">
            <BiAbacus className="h4 mb-0 me-3" />Google
          </a>
          <a href="sign-in-email.html" className="btn btn-white btn-lg bg-white col d-flex align-items-center justify-content-center shadow-sm border">
            <BiAbacus className="h4 mb-0 me-3" />Apple
          </a>
        </div>
      </div>
    </div>
    )
}

export default SignUp
