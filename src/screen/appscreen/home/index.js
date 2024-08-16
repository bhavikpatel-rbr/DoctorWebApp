import React from 'react'
import { mdiAccountCircleOutline, mdiEmailOutline, mdiLockOutline } from '@mdi/js';
import { BiAbacus, BiBarChartAlt, BiBellOff } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../Sidebar/Sidebar';
import HcOffcanvasNav from 'hc-offcanvas-nav';
import doctorImage from '../../../img/home/top-doctor-1.jpg';
import doctorImage1 from '../../../img/home/available-doctor-1.png';
const Home = () => {
    return (
        <div  class="bg-light">
          <div className="home d-flex flex-column vh-100">
          <Sidebar/>
      <div className="bg-white shadow-sm">
        <div className="d-flex align-items-center justify-content-between mb-auto p-3 osahan-header">
          <div className="d-flex align-items-center gap-2 me-auto">
           
              <img src={doctorImage} alt="" className="img-fluid rounded-circle icon" />
           
            <div className="ps-1">
              <p className="text-orange m-0 small">Welcome</p>
              <p className="fw-bold mb-0 text-primary fw-bold">Hey, Samantha!</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="bg-white shadow rounded-circle icon">
              <span className="mdi mdi-cards-heart-outline mdi-18px text-primary"></span>
            </div>
            <div className="bg-white shadow rounded-circle icon">
              <span className="mdi mdi-bell-outline mdi-18px text-primary"></span>
            </div>
            <a className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5 hc-nav-trigger hc-nav-1" href="#">
          <BiAbacus size={24} className="d-flex" />
        </a>
          </div>
        </div>
        <div className="px-3 pb-3">
          <form>
            <div className="input-group rounded-4 shadow py-1 px-3 bg-light">
              <span className="input-group-text bg-transparent text-muted border-0 p-0" id="search">
                <span className="mdi mdi-magnify mdi-24px text-primary"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent text-muted rounded-0 border-0 px-3"
                placeholder="Find your suitable doctor!"
                aria-label="Search"
                aria-describedby="search"
              />
              <a href="#" className="input-group-text bg-transparent text-muted border-0 border-start pe-0" id="search">
                <span className="mdi mdi-filter-outline mdi-18px"></span>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="vh-100 my-auto overflow-auto body-fix-osahan-footer">
        <div className="mb-0 pt-3">
          <div className="available-doctor ps-2 ms-1">
            <div className="available-doctor-item">
              <div className="bg-primary text-white rounded-4 p-3 doctor-book-back">
                <h1 className="mb-1 doctor-book-back-title">
                  Book Your Next
                  <span className="h4 text-warning overflow-hidden rounded-4 m-0 bg-white">
                    <b className="bg-light-subtle text-primary px-1 rounded">Appointment</b>
                    <b className="bg-info fw-normal text-white px-1 rounded">Online!</b>
                  </span>
                </h1>
                <p className="mb-2 text-white-50 small">Book Now and Get 30% OFF</p>
                <div to="request-appointment.html" className="btn btn-sm btn-book btn-secondary">
                  BOOK NOW <i className="bi bi-arrow-right"></i>
                </div>
                <div className="doctor-book-img">
                  <img src={doctorImage} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="available-doctor-item">
              <div className="btn-info text-white rounded-4 p-3 doctor-book-back">
                <h1 className="mb-1 doctor-book-back-title">
                  <span className="h4 overflow-hidden m-0">
                    <b className="text-primary">Find Your Dental</b>
                  </span>
                  Specialist Doctor
                </h1>
                <p className="mb-2 small">
                  Dr. Samaro{' '}
                  <span className="bg-white rounded-pill px-1 small text-orange">
                    <i className="mdi mdi-star"></i> 4.9
                  </span>
                </p>
                <div className="btn btn-sm btn-primary btn-book">
                  BOOK NOW <i className="bi bi-arrow-right"></i>
                </div>
                <div className="doctor-book-img">
                  <img src={doctorImage} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="available-doctor-item">
              <div className="btn-secondary text-white rounded-4 p-3 doctor-book-back">
                <h1 className="mb-1 doctor-book-back-title">
                  Find the Right <br />
                  <span className="h4 text-warning overflow-hidden rounded-4 m-0">
                    <b className="bg-warning text-black px-1 rounded">Doctor for Your</b>
                    <b className="text-black">Needs!</b>
                  </span>
                </h1>
                <p className="mb-2 text-white small">Book Now and Get 30% OFF</p>
                <div to="#" className="btn btn-sm btn-dark btn-book">
                  BOOK NOW <i className="bi bi-arrow-right"></i>
                </div>
                <div className="doctor-book-img">
                  <img src={doctorImage} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 mb-2">
          <div className="row row-cols-4 g-2">
            <div className="col">
              <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                <div  className="link-dark">
                  <img src={doctorImage} alt="" className="img-fluid px-2" />
                  <p className="text-truncate small pt-2 m-0">Doctor</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                <div to="request-appointment.html" className="link-dark">
                  <img src={doctorImage} alt="" className="img-fluid px-2" />
                  <p className="text-truncate small pt-2 m-0">Appointment</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                <div to="search.html" className="link-dark">
                  <img src={doctorImage} alt="" className="img-fluid px-2" />
                  <p className="text-truncate small pt-2 m-0">Prescription</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                <div to="search.html" className="link-dark">
                  <img src={doctorImage} alt="" className="img-fluid px-2" />
                  <p className="text-truncate small pt-2 m-0">Medicine</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h6 className="mb-2 pb-1 fw-bold px-3 text-black">Top Doctor</h6>
          <div className="top-doctors ps-2 ms-1">
            <div className="top-doctor-item">
              <div  className="link-dark">
                <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                  <img src={doctorImage} className="card-img-top top-doctor-img" alt="..." />
                  <div className="card-body small p-3 osahan-card-body">
                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Taylor Samaro</p>
                    <p className="card-text text-muted small m-0">Dental Sargon</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-doctor-item">
              <div className="link-dark">
                <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                  <img src={doctorImage} className="card-img-top top-doctor-img" alt="..." />
                  <div className="card-body small p-3 osahan-card-body">
                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Michael Thomas</p>
                    <p className="card-text text-muted small m-0">Cardiologist</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-doctor-item">
              <div to="book-appointment.html" className="link-dark">
                <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                  <img src={doctorImage} className="card-img-top top-doctor-img" alt="..." />
                  <div className="card-body small p-3 osahan-card-body">
                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Jennifer Arnold</p>
                    <p className="card-text text-muted small m-0">Pediatrician</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-nav d-flex justify-content-around bg-white shadow p-3">
  <Link to="/home.html" className="text-center">
    <p className="h5 m-0"><span className="mdi mdi-home-variant-outline"></span></p>
    Home
  </Link>
  <Link to="/search.html" className="text-center">
    <p className="h5 m-0"><span className="mdi mdi-magnify"></span></p>
    Search
  </Link>
  <Link to="/video.html" className="text-center">
    <p className="h5 m-0"><span className="mdi mdi-video-outline"></span></p>
    Video
  </Link>
  <Link to="/chat.html" className="text-center">
    <p className="h5 m-0"><span className="mdi mdi-chat-outline"></span></p>
    Chat
  </Link>
  <Link to="/my-profile.html" className="text-center">
    <p className="h5 m-0"><span className="mdi mdi-account-circle-outline"></span></p>
    Profile
  </Link>
</div>
    </div>
   
        </div>
        
    )
}

export default Home
