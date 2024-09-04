import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import doctorImage from '../../../img/logo.svg';
import './../../../assest/commoncss.css'
const LandingScreen = () => {
    return (
        <div className="vh-100 d-flex align-items-center justify-content-center splashscreen-main">
            <div className="text-center p-3">
                <div className="mb-5 pb-5">
                    <Link to="landing.html" className="gap-2 text-white text-center">
                        <div className="rounded-pill bg-white p-3 d-inline-block mb-4">
                            <img src={doctorImage} alt="Logo" className="img-fluid logo main-logo" />
                        </div>
                        <h1 className="mb-0 splach-title">Totality - The Ultimate Health Solution</h1>

                    </Link>
                </div>
            </div>

            <div className="footer fixed-bottom p-3 footer-custom ">
                <Link to={"/onbordingscreen"} className="btn splash-btn btn-lg w-100">
                    Click Here
                </Link>
            </div>

        </div>
    );
};

export default LandingScreen;
