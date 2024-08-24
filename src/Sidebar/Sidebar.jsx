import React, { useState } from 'react';
import { Link } from "react-router-dom";

import menuicon01 from "../img/icons/menu-icon-01.svg";
import menuicon02 from "../img/icons/menu-icon-02.svg";
import menuicon03 from "../img/icons/menu-icon-03.svg";
import menuicon04 from "../img/icons/menu-icon-04.svg";
import menuicon05 from "../img/icons/menu-icon-05.svg";
import menuicon06 from "../img/icons/menu-icon-06.svg";
import menuicon07 from "../img/icons/menu-icon-07.svg";
import menuicon08 from "../img/icons/menu-icon-08.svg";
import menuicon09 from "../img/icons/menu-icon-09.svg";
import menuicon10 from "../img/icons/menu-icon-10.svg";
import menuicon11 from "../img/icons/menu-icon-11.svg";
import menuicon12 from "../img/icons/menu-icon-12.svg";
import menuicon13 from "../img/icons/menu-icon-13.svg";
import menuicon14 from "../img/icons/menu-icon-14.svg";
import menuicon15 from "../img/icons/menu-icon-15.svg";
import menuicon16 from "../img/icons/menu-icon-16.svg";
import logout from "../img/icons/logout.svg";

const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (menu) => {
      setOpenMenus(prevState => ({
        ...prevState,
        [menu]: !prevState[menu]   // Toggle specific menu
      }));
    };
  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  }; 
// Toggle function to open/close the menu
  // const toggleMenu = () => {
  //   console.log("bhavik");
    
  //     setIsMenuOpen(prevState => !prevState);
  //   };

  return (
      <div className="sidebar" id="sidebar"
       onMouseLeave={expandMenu}  
       onMouseOver={expandMenuOpen}>
       
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">Main</li>
              <li className="submenu">
                <Link  to="/dashboard"href="#"onClick={() => toggleMenu('dashboard')}>
                  <span className="menu-side">
                    <img src={menuicon01} alt="" />
                  </span>
                  <span> Dashboard </span> <span className="menu-arrow"></span>
                </Link>
                <ul className={openMenus.dashboard ? "" : "d-none"}>
                  <li>
                    <Link className="active" href="index.html">
                      Admin Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="doctor-dashboard.html">Doctor Dashboard</Link>
                  </li>
                  <li>
                    <Link href="patient-dashboard.html">Patient Dashboard</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link>
                  <span className="menu-side">
                    <img src={menuicon02} alt="" />
                  </span>
                  <span> Doctors </span>
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link className="">Doctor List</Link>
                  </li>
                  <li>
                    <Link>Add Doctor</Link>
                  </li>
                  <li>
                    <Link href="edit-doctor.html">Edit Doctor</Link>
                  </li>
                  <li>
                    <Link href="doctor-profile.html">Doctor Profile</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon03} alt="" />
                  </span>
                  <span>Patients </span>
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="patients.html">Patients List</Link>
                  </li>
                  <li>
                    <Link href="add-patient.html">Add Patients</Link>
                  </li>
                  <li>
                    <Link href="edit-patient.html">Edit Patients</Link>
                  </li>
                  <li>
                    <Link href="patient-profile.html">Patients Profile</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon08} alt="" />
                  </span>
                  <span> Staff </span>
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="staff-list.html">Staff List</Link>
                  </li>
                  <li>
                    <Link href="add-staff.html">Add Staff</Link>
                  </li>
                  <li>
                    <Link href="staff-profile.html">Staff Profile</Link>
                  </li>
                  <li>
                    <Link href="staff-leave.html">Leaves</Link>
                  </li>
                  <li>
                    <Link href="staff-holiday.html">Holidays</Link>
                  </li>
                  <li>
                    <Link href="staff-attendance.html">Attendance</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon04} alt="" />
                  </span>
                  <span> Appointments </span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="appointments.html">Appointment List</Link>
                  </li>
                  <li>
                    <Link href="add-appointment.html">Book Appointment</Link>
                  </li>
                  <li>
                    <Link href="edit-appointment.html">Edit Appointment</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon05} alt="" />
                  </span>
                  <span> Doctor Schedule </span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="schedule.html">Schedule List</Link>
                  </li>
                  <li>
                    <Link href="add-schedule.html">Add Schedule</Link>
                  </li>
                  <li>
                    <Link href="edit-schedule.html">Edit Schedule</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon06} alt="" />
                  </span>
                  <span> Cash Record </span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="departments.html">Department List</Link>
                  </li>
                  <li>
                    <Link href="add-department.html">Add Department</Link>
                  </li>
                  <li>
                    <Link href="edit-department.html">Edit Department</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon06} alt="" />
                  </span>
                  <span> Departments </span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="departments.html">Department List</Link>
                  </li>
                  <li>
                    <Link href="add-department.html">Add Department</Link>
                  </li>
                  <li>
                    <Link href="edit-department.html">Edit Department</Link>
                  </li>
                </ul>
              </li>
             
            </ul>
            <div className="logout-btn">
              <Link href="login.html">
                <span className="menu-side">
                  <img src={logout} alt="" />
                </span>
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      
      </div>
  );
};

export default Sidebar;
