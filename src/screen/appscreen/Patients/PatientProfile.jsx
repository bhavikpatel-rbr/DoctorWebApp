import React from 'react';
import { ChevronRight } from 'react-feather';
import profile from '../../../assest/img/profile-bg.jpg'
import user from "../../../assest/img/user1.jpg";
const PatientProfile = () => {
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="patients.html">Patients</a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Patient Profile</li>
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
                    <h4>Patient Profile <span><a href="javascript:;"><i className="feather-more-vertical"></i></a></span></h4>
                  </div>
                  <div className="doctor-profile-head">
                    <div className="profile-bg-img">
                    <img src={profile} alt="Profile" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-xl-4 col-md-4">
                        <div className="profile-user-box">
                          <div className="profile-user-img">
                          <img src={user} alt="Profile" />
                            <div className="input-block doctor-up-files profile-edit-icon mb-0">
                              <div className="upload d-flex">
                                <label className="file-upload profile-upbtn mb-0">
                                  {/* <img src="assets/img/icons/camera-icon.svg" alt="Profile" /> */}
                                  <input type="file" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="names-profiles">
                            <h4>Bhvaik Rupapara</h4>
                            <h5>Engineer</h5>
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
                      <div className="col-lg-6 col-xl-4 d-flex align-items-center">
                        <div className="follow-btn-group py-3">
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
                    <p>Hello I am Bhvaik Rupapara a Gynaecologist in Sanjivni Hospital Surat. I love to work with all my hospital staff and senior doctors.</p>
                  </div>
                  <div className="about-me-list">
                    <ul className="list-space">
                      <li>
                        <h4>Gender</h4>
                        <span>Male</span>
                      </li>
                      <li>
                        <h4>Operation Done</h4>
                        <span>30+</span>
                      </li>
                      <li>
                        <h4>Designation</h4>
                        <span>Engineer</span>
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
                        <h5>Heart Beat</h5>
                        <p>45%</p>
                      </div>
                      <div className="progress mb-0">
                        <div className="progress-bar bg-operations" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="skill-statistics">
                      <div className="skills-head">
                        <h5>Haemoglobin</h5>
                        <p>85%</p>
                      </div>
                      <div className="progress mb-0">
                        <div className="progress-bar bg-haemoglobin" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="skill-statistics">
                      <div className="skills-head">
                        <h5>Blood Pressure</h5>
                        <p>65%</p>
                      </div>
                      <div className="progress mb-0">
                        <div className="progress-bar bg-statistics" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="skill-statistics">
                      <div className="skills-head">
                        <h5>Sugar</h5>
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
          </div>

          <div className="col-lg-8">
            <div className="doctor-personals-grp">
              <div className="card">
                <div className="card-body">
                  <div className="tab-content-set">
                    <ul className="nav">
                      <li>
                        <a href="patient-profile.html" className="active">
                          <span className="set-about-icon me-2">
                            {/* <img src="assets/img/icons/menu-icon-02.svg" alt="About me" /> */}
                          </span>
                          About me
                        </a>
                      </li>
                      <li>
                        <a href="patient-setting.html">
                          <span className="set-about-icon me-2">
                            {/* <img src="assets/img/icons/menu-icon-16.svg" alt="Settings" /> */}
                          </span>
                          Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="personal-list-out">
                    <div className="row">
                      <div className="col-xl-3 col-md-6">
                        <div className="detail-personal">
                          <h2>Full Name</h2>
                          <h3>Bhvaik Rupapara</h3>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6">
                        <div className="detail-personal">
                          <h2>Mobile</h2>
                          <h3>264-625-2583</h3>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6">
                        <div className="detail-personal">
                          <h2>Email</h2>
                          <h3><a href="mailto:[email&#160;protected]">[email protected]</a></h3>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6">
                        <div className="detail-personal">
                          <h2>Location</h2>
                          <h3>USA</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hello-park">
                    <p>Completed my graduation in Gynaecologist Medicine from the well-known and renowned institution of India – SARDAR PATEL MEDICAL COLLEGE, BARODA in 2000-01, which was affiliated to M.S. University. I ranked in University exams from the same university from 2000 – 2005 and have many papers and journals to my credit. I have worked in various hospitals like Apollo, and Fortis and conducted many successful operations. You can find my published papers online. I have been associated with some renowned medical institutions and have helped many patients recover from serious illnesses.</p>
                    <p>I work with a team of doctors who are specialists in their respective fields. With their support and my determination, I have helped many patients recover and lead healthy lives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
