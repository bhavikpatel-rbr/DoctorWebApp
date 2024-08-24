import React from 'react';

const DoctorProfile = () => {
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="doctors.html">Doctors</a>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
              </li>
              <li className="breadcrumb-item active">Doctors Profile</li>
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
                    <h4>Doctor Profile <span><a href="javascript:;"><i className="feather-more-vertical"></i></a></span></h4>
                  </div>
                  <div className="doctor-profile-head">
                    <div className="profile-bg-img">
                      {/* <img src="assets/img/profile-bg.jpg" alt="Profile" /> */}
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="profile-user-box">
                          <div className="profile-user-img">
                            {/* <img src="assets/img/profile-user.jpg" alt="Profile" /> */}
                            <div className="input-block doctor-up-files profile-edit-icon mb-0">
                              <div className="uplod d-flex">
                                <label className="file-upload profile-upbtn mb-0">
                                  {/* <img src="assets/img/icons/camera-icon.svg" alt="Profile" /> */}
                                  <input type="file" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="names-profiles">
                            <h4>Dr. Bruce Willis</h4>
                            <h5>Senior Doctor</h5>
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
                    <p>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. I love to work with all my hospital staff and senior doctors.</p>
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
                        <span>Sr. Doctor</span>
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
                      {/* <img src="assets/img/icons/medal-01.svg" alt="Speciality" /> */}
                    </div>
                    <div className="views-personal">
                      <h4>Professionals</h4>
                      <h5>Certified Skin Treatment</h5>
                    </div>
                  </div>
                  <div className="personal-activity">
                    <div className="personal-icons status-green">
                      {/* <img src="assets/img/icons/medal-02.svg" alt="Speciality" /> */}
                    </div>
                    <div className="views-personal">
                      <h4>Certified</h4>
                      <h5>Cold Laser Operation</h5>
                    </div>
                  </div>
                  <div className="personal-activity mb-0">
                    <div className="personal-icons status-orange">
                      {/* <img src="assets/img/icons/medal-03.svg" alt="Speciality" /> */}
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
                        <a href="doctor-profile.html" className="active">
                          <span className="set-about-icon me-2">
                            {/* <img src="assets/img/icons/menu-icon-02.svg" alt="About me" /> */}
                          </span>
                          About me
                        </a>
                      </li>
                      <li>
                        <a href="doctor-setting.html">
                          <span className="set-about-icon me-2">
                            {/* <img src="assets/img/icons/menu-icon-16.svg" alt="Settings" /> */}
                          </span>
                          Settings
                        </a>
                      </li>
                      <li>
                        <a href="doctor-notification.html">
                          <span className="set-about-icon me-2">
                            {/* <img src="assets/img/icons/menu-icon-08.svg" alt="Notifications" /> */}
                          </span>
                          Notifications
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content mt-5">
                      <div className="tab-pane active">
                        <div className="post-activity">
                          <div className="post-activity-head">
                            <div className="post-activity-left">
                              <h4>All Posts</h4>
                            </div>
                          </div>
                          <div className="post-item">
                            <div className="post-item-img">
                              <a href="javascript:;">
                                {/* <img src="assets/img/posts/post-01.jpg" alt="Post" /> */}
                              </a>
                            </div>
                            <div className="post-item-content">
                              <h5>New Patient Information Added</h5>
                              <p>Here’s a quick note about new information added regarding patients. Always stay updated.</p>
                              <div className="post-item-footer">
                                <a href="javascript:;" className="btn btn-info">View Details</a>
                              </div>
                            </div>
                          </div>
                          <div className="post-item">
                            <div className="post-item-img">
                              <a href="javascript:;">
                                {/* <img src="assets/img/posts/post-02.jpg" alt="Post" /> */}
                              </a>
                            </div>
                            <div className="post-item-content">
                              <h5>Welcome to the New Clinic</h5>
                              <p>We’re excited to announce our new clinic opening. We’re ready to provide the best care.</p>
                              <div className="post-item-footer">
                                <a href="javascript:;" className="btn btn-info">View Details</a>
                              </div>
                            </div>
                          </div>
                          <div className="post-item">
                            <div className="post-item-img">
                              <a href="javascript:;">
                                {/* <img src="assets/img/posts/post-03.jpg" alt="Post" /> */}
                              </a>
                            </div>
                            <div className="post-item-content">
                              <h5>Health Tips for the Season</h5>
                              <p>Check out our latest health tips to stay healthy during the upcoming season. Follow these guidelines for a healthy lifestyle.</p>
                              <div className="post-item-footer">
                                <a href="javascript:;" className="btn btn-info">View Details</a>
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
    </div>
  );
};

export default DoctorProfile;
