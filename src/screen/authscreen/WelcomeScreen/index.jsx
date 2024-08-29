import React, {  } from 'react'
import { Link,  } from 'react-router-dom';
import doctorImage from '../../../img/logo.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../../../assest/commoncss.css'
const WelcomeScreen = () => {
    
    return (
        <div className="welcome d-flex align-items-center justify-content-center vh-100">
            <div className="text-center pb-5 mb-5">
                <div className="mb-5">
                    <img src={doctorImage} alt="Logo" className="img-fluid blue-logo mb-3" />
                    <h1 className="text-primary mb-1">Dactorapp</h1>
                    <p className="text-muted">Welcome to Dactorapp</p>
                </div>
                <div className='fixed-bottom'>
            <div className="footer  p-3 footer-custom">
                <Link to={"/signup"} className="btn btn-primary btn-lg w-100">
                Sign Up
                </Link>
            </div>
            <div className="footer  p-3 footer-custom">
                <Link to={"/login"} className="btn btn-outline-primary btn-lg w-100">
                Sign In
                </Link>
            </div>
            </div>
            </div>
            
            {/* <div className="footer footer-custom fixed-bottom d-grid gap-3 m-4">
                <Link to="/sign-up" className="btn btn-primary btn-lg">Sign Up</Link>
                <Link to="/sign-in" className="btn btn-outline-primary btn-lg">Sign In</Link>
            </div> */}
            
        </div>
    );
};

export default WelcomeScreen;
