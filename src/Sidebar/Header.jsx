import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";
import baricon from "../img/icons/bar-icon.svg";
import searchnormal from "../img/icons/search-normal.svg";
import noteicon02 from "../img/icons/note-icon-02.svg";
import noteicon01 from "../img/icons/note-icon-01.svg";
import user from "../img/user.jpg";
import user06 from "../img/user-06.jpg";
import settingicon01 from "../img/icons/setting-icon-01.svg";

const Header = () => {
  const [toggle, SetToggle] = useState(false);
  
  const isElementVisible = (element) => {
    return element.offsetWidth > 0 || element.offsetHeight > 0;
  };

  useEffect(() => {
    const handleMouseover = (e) => {
      e.stopPropagation();

      const body = document.body;
      const toggleBtn = document.getElementById("toggle_btn");

      if (
        body.classList.contains("mini-sidebar") &&
        isElementVisible(toggleBtn)
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("mouseover", handleMouseover);

    return () => {
      document.removeEventListener("mouseover", handleMouseover);
    };
  }, []);
  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };
  const sidebarOverlay = () => {
    document?.querySelector(".main-wrapper")?.classList?.toggle("slide-nav");
    document?.querySelector(".sidebar-overlay")?.classList?.toggle("opened");
    document?.querySelector("html")?.classList?.toggle("menu-opened");
  };

  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
    SetToggle((current) => !current);
  };

  return (
    <div
      className="header"     
    >
      <div className={`header-left ${toggle ? "" : "active"}`}
          onMouseLeave={expandMenu}
          onMouseOver={expandMenuOpen}>
        <Link className="logo logo-normal">
          <img src={logo} width="35" height="35" alt="" />{" "}
          <span>Pre Clinic</span>
        </Link>
      </div>
      <Link id="toggle_btn" href="javascript:void(0);" onClick={handlesidebar}>
        <img src={baricon} alt="" />
      </Link>
      <Link id="mobile_btn" className="mobile_btn float-start" href="#sidebar">
        <img src={baricon} alt="" />
      </Link>
      <div className="top-nav-search mob-view">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
          />
          <Link className="btn">
            <img src={searchnormal} alt="" />
          </Link>
        </form>
      </div>
      <ul className="nav user-menu float-end">
        <li className="nav-item dropdown d-none d-md-block">
          <Link
            href="#"
            className="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            <img src={noteicon02} alt="" />
            <span className="pulse"></span>
          </Link>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span>Notifications</span>
            </div>
            <div className="drop-scroll">
              <ul className="notification-list">
                <li className="notification-message">
                  <Link href="activities.html">
                    <div className="media">
                      <span className="avatar">
                        <img alt="John Doe" src={user} className="img-fluid" />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">John Doe</span> added new
                          task{" "}
                          <span className="noti-title">
                            Patient appointment booking
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link>
                    <div className="media">
                      <span className="avatar">V</span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Tarah Shropshire</span>
                          changed the task name{" "}
                          <span className="noti-title">
                            Appointment booking with payment gateway
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link>
                    <div className="media">
                      <span className="avatar">L</span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Misty Tison</span>
                          added{" "}
                          <span className="noti-title">
                            Domenic Houston
                          </span>{" "}
                          and <span className="noti-title">Claire Mapes</span>{" "}
                          to project{" "}
                          <span className="noti-title">
                            Doctor available module
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link>
                    <div className="media">
                      <span className="avatar">G</span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Rolland Webber</span>
                          completed task{" "}
                          <span className="noti-title">
                            Patient and Doctor video conferencing
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link href="activities.html">
                    <div className="media">
                      <span className="avatar">V</span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Bernardo Galaviz</span>
                          added new task{" "}
                          <span className="noti-title">
                            Private chat module
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">2 days ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <Link href="activities.html">View all Notifications</Link>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown d-none d-md-block">
          <Link
            href="javascript:void(0);"
            id="open_msg_box"
            className="hasnotifications nav-link"
          >
            <img src={noteicon01} alt="" />
            <span className="pulse"></span>
          </Link>
        </li>
        <li className="nav-item dropdown has-arrow user-profile-list">
          <Link
            href="#"
            className="dropdown-toggle nav-link user-link"
            data-bs-toggle="dropdown"
          >
            <div className="user-names">
              <h5>Liam Michael </h5>
              <span>Admin</span>
            </div>
            <span className="user-img">
              <img src={user06} alt="Admin" />
            </span>
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" href="profile.html">
              My Profile
            </Link>
            <Link className="dropdown-item" href="edit-profile.html">
              Edit Profile
            </Link>
            <Link className="dropdown-item" href="settings.html">
              Settings
            </Link>
            <Link className="dropdown-item" href="login.html">
              Logout
            </Link>
          </div>
        </li>
        <li className="nav-item ">
          <Link href="settings.html" className="hasnotifications nav-link">
            <img src={settingicon01} alt="" />
          </Link>
        </li>
      </ul>
      <div className="dropdown mobile-user-menu float-end">
        <Link
          href="#"
          className="dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </Link>
        <div className="dropdown-menu dropdown-menu-end">
          <Link className="dropdown-item" href="profile.html">
            My Profile
          </Link>
          <Link className="dropdown-item" href="edit-profile.html">
            Edit Profile
          </Link>
          <Link className="dropdown-item" href="settings.html">
            Settings
          </Link>
          <Link className="dropdown-item" href="login.html">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;