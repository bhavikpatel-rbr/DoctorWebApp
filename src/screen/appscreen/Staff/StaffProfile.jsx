import React from 'react';
import { ChevronRight } from 'react-feather';
import profile from '../../../assest/img/profile-bg.jpg'
const StaffProfile = () => {
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="staff-list.html">Staffs</a>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
              </li>
              <li className="breadcrumb-item active">Staffs Profile</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="about-info">
                    <h4>Staffs Profile <span><a href="javascript:;"><i className="feather-more-vertical"></i></a></span></h4>
                  </div>
                  <div className="doctor-profile-head">
                    <div className="profile-bg-img">
                    <img src={profile} alt="Profile" />
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="profile-user-box">
                          <div className="profile-user-img">
                            <img src="assets/img/profile-user-02.jpg" alt="" />
                            <div className="input-block doctor-up-files profile-edit-icon mb-0">
                              <div className="uplod d-flex">
                                <label className="file-upload profile-upbtn mb-0">
                                  <img src="assets/img/icons/camera-icon.svg" alt="" />
                                  <input type="file" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="names-profiles">
                            <h4>Cristina Groves</h4>
                            <h5>Nurse</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 d-flex align-items-center">
                        <div className="follow-group">
                          <div className="doctor-follows">
                            <h5>Followers</h5>
                            <h4>850</h4>
                          </div>
                          <div className="doctor-follows">
                            <h5>Following</h5>
                            <h4>18K</h4>
                          </div>
                          <div className="doctor-follows">
                            <h5>Posts</h5>
                            <h4>250</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 d-flex align-items-center">
                        <div className="follow-btn-group">
                          <button type="button" className="btn btn-info follow-btns">Follow</button>
                          <button type="button" className="btn btn-info message-btns">Message</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="doctor-personals-grp">
              <div className="card">
                <div className="card-body">
                  <div className="heading-detail">
                    <h4 className="mb-3">About me</h4>
                    <p>Hello I am Cristina Groves a Gynaecologist in Sanjivni Hospital Surat. I love to work with all my hospital staff and senior doctors.</p>
                  </div>
                  <div className="about-me-list">
                    <ul className="list-space">
                      <li>
                        <h4>Gender</h4>
                        <span>Female</span>
                      </li>
                      <li>
                        <h4>Operation Done</h4>
                        <span>30+</span>
                      </li>
                      <li>
                        <h4>Designation</h4>
                        <span>Nurse</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="doctor-personals-grp">
              <div className="card">
                <div className="card-body">
                  <div className="heading-detail">
                    <h4>Skills:</h4>
                  </div>
                  <div className="skill-blk">
                    <div className="skill-statistics">
                      <div className="skills-head">
                        <h5>Operations</h5>
                        <p>45%</p>
                      </div>
                      <div className="progress mb-0">
                        <div className="progress-bar bg-operations" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="skill-statistics">
                      <div className="skills-head">
                        <h5>Patient Care</h5>
                        <p>85%</p>
                      </div>
                      <div className="progress mb-0">
                        <div className="progress-bar bg-statistics" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="skill-statistics">
                      <div className="skills-head">
                        <h5>Endoscopic</h5>
                        <p>65%</p>
                      </div>
                      <div className="progress mb-0">
                        <div className="progress-bar bg-endoscopic" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="skill-statistics">
                      <div className="skills-head">
                        <h5>Patient Visit</h5>
                        <p>90%</p>
                      </div>
                      <div className="progress mb-0">
                        <div className="progress-bar bg-visit" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="doctor-personals-grp">
              <div className="card">
                <div className="card-body">
                  <div className="heading-detail">
                    <h4>Speciality</h4>
                  </div>
                  <div className="personal-activity">
                    <div className="personal-icons status-grey">
                      <img src="assets/img/icons/medal-01.svg" alt="" />
                    </div>
                    <div className="views-personal">
                      <h4>Proffesionals</h4>
                      <h5>Certified Skin Treatment</h5>
                    </div>
                  </div>
                  <div className="personal-activity">
                    <div className="personal-icons status-green">
                      <img src="assets/img/icons/medal-02.svg" alt="" />
                    </div>
                    <div className="views-personal">
                      <h4>Certified</h4>
                      <h5>Cold Laser Operation</h5>
                    </div>
                  </div>
                  <div className="personal-activity mb-0">
                    <div className="personal-icons status-orange">
                      <img src="assets/img/icons/medal-03.svg" alt="" />
                    </div>
                    <div className="views-personal">
                      <h4>Medication Laser</h4>
                      <h5>Hair Loss Product</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="doctor-personals-grp">
              <div className="card">
                <div className="card-body">
                  <div className="tab-content-set">
                    <ul className="nav">
                      <li>
                        <a href="staff-profile.html" className="active">
                          <span className="set-about-icon me-2">
                            <img src="assets/img/icons/menu-icon-02.svg" alt="" />
                          </span>
                          About me
                        </a>
                      </li>
                      <li>
                        <a href="staff-setting.html">
                          <span className="set-about-icon me-2">
                            <img src="assets/img/icons/menu-icon-16.svg" alt="" />
                          </span>
                          Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="personal-list-out">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="time-visit-block">
                          <div className="heading-detail">
                            <h4>Available Time</h4>
                          </div>
                          <div className="time-day">
                            <ul>
                              <li><span className="days">Monday</span> <span className="time">09:00am - 08:00pm</span></li>
                              <li><span className="days">Tuesday</span> <span className="time">09:00am - 08:00pm</span></li>
                              <li><span className="days">Wednesday</span> <span className="time">09:00am - 08:00pm</span></li>
                              <li><span className="days">Thursday</span> <span className="time">09:00am - 08:00pm</span></li>
                              <li><span className="days">Friday</span> <span className="time">09:00am - 08:00pm</span></li>
                              <li><span className="days">Saturday</span> <span className="time">09:00am - 08:00pm</span></li>
                              <li><span className="days">Sunday</span> <span className="time">Closed</span></li>
                            </ul>
                          </div>
                        </div>
                        <div className="personal-activity">
                          <div className="heading-detail">
                            <h4>Education</h4>
                          </div>
                          <div className="view-personal">
                            <div className="personal-icons">
                              <img src="assets/img/icons/medal-01.svg" alt="" />
                            </div>
                            <div className="views-personal">
                              <h4>Medical University</h4>
                              <h5>MBBS</h5>
                              <p>2015 - 2017</p>
                            </div>
                          </div>
                          <div className="view-personal">
                            <div className="personal-icons">
                              <img src="assets/img/icons/medal-02.svg" alt="" />
                            </div>
                            <div className="views-personal">
                              <h4>Specialisation Course</h4>
                              <h5>Skin Treatment</h5>
                              <p>2017 - 2018</p>
                            </div>
                          </div>
                          <div className="view-personal mb-0">
                            <div className="personal-icons">
                              <img src="assets/img/icons/medal-03.svg" alt="" />
                            </div>
                            <div className="views-personal">
                              <h4>Advanced Certification</h4>
                              <h5>Laser Technology</h5>
                              <p>2018 - 2019</p>
                            </div>
                          </div>
                        </div>
                        <div className="personal-activity">
                          <div className="heading-detail">
                            <h4>Experience</h4>
                          </div>
                          <div className="view-personal">
                            <div className="personal-icons">
                              <img src="assets/img/icons/medal-01.svg" alt="" />
                            </div>
                            <div className="views-personal">
                              <h4>Sanjivni Hospital</h4>
                              <h5>Senior Nurse</h5>
                              <p>2019 - Present</p>
                            </div>
                          </div>
                          <div className="view-personal mb-0">
                            <div className="personal-icons">
                              <img src="assets/img/icons/medal-02.svg" alt="" />
                            </div>
                            <div className="views-personal">
                              <h4>Health Center</h4>
                              <h5>Junior Nurse</h5>
                              <p>2017 - 2019</p>
                            </div>
                          </div>
                        </div>
                        <div className="personal-activity">
                          <div className="heading-detail">
                            <h4>Other Info</h4>
                          </div>
                          <div className="view-personal">
                            <div className="personal-icons">
                              <img src="assets/img/icons/medal-03.svg" alt="" />
                            </div>
                            <div className="views-personal">
                              <h4>Languages</h4>
                              <h5>English, Spanish</h5>
                            </div>
                          </div>
                          <div className="view-personal mb-0">
                            <div className="personal-icons">
                              <img src="assets/img/icons/medal-01.svg" alt="" />
                            </div>
                            <div className="views-personal">
                              <h4>Hobbies</h4>
                              <h5>Reading, Travelling</h5>
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
        </div>
      </div>
    </div>
  );
}

export default StaffProfile;
