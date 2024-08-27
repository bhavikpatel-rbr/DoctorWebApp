import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';
import searchnormal from '../../../img/icons/search-normal.svg'
import pdf1 from '../../../img/icons/pdf-icon-01.svg'
import pdf2 from '../../../img/icons/pdf-icon-02.svg'
import pdf3 from '../../../img/icons/pdf-icon-03.svg'
import pdf4 from '../../../img/icons/pdf-icon-04.svg'
import plus from '../../../img/icons/plus.svg'
import refresh from '../../../img/icons/re-fresh.svg'
const ScheduleList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="schedule.html">Doctor Schedule</Link>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
              </li>
              <li className="breadcrumb-item active">Schedule List</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card card-table show-entire">
            <div className="card-body">
              <div className="page-table-header mb-2">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="doctor-table-blk">
                      <h3>Schedule List</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                          <form>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here"
                            />
                            <a className="btn">
                              <img
                                src={searchnormal}
                                alt="Search"
                              />
                            </a>
                          </form>
                        </div>
                        <div className="add-group">
                          <a href="add-doctor.html" className="btn btn-primary add-pluss ms-2">
                          <img src={plus} alt="" />
                          </a>
                          <a href="javascript:;" className="btn btn-primary doctor-refresh ms-2">
                          <img src={refresh} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto text-end float-end ms-auto download-grp">
                    <a href="javascript:;" className="me-2">
                      <img
                        src={pdf1}
                        alt="PDF Icon 1"
                      />
                    </a>
                    <a href="javascript:;" className="me-2">
                      <img
                        src={pdf2}
                        alt="PDF Icon 2"
                      />
                    </a>
                    <a href="javascript:;" className="me-2">
                      <img
                         src={pdf3}
                        alt="PDF Icon 3"
                      />
                    </a>
                    <a href="javascript:;">
                    <img
                         src={pdf4}
                        alt="PDF Icon 3"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table border-0 custom-table comman-table datatable mb-0">
                  <thead>
                    <tr>
                      <th>
                        <div className="form-check check-tables">
                          <input className="form-check-input" type="checkbox" value="something" />
                        </div>
                      </th>
                      <th>Doctor Name</th>
                      <th>Department</th>
                      <th>Available Days</th>
                      <th>Available Time</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Repeat this <tr> block for each doctor */}
                    <tr>
                      <td>
                        <div className="form-check check-tables">
                          <input className="form-check-input" type="checkbox" value="something" />
                        </div>
                      </td>
                      <td className="profile-image">
                        <Link to="profile.html">
                          <img
                            width="28"
                            height="28"
                            src="assets/img/profiles/avatar-01.jpg"
                            className="rounded-circle m-r-5"
                            
                          />
                          Dr.Andrea Lalema
                        </Link>
                      </td>
                      <td>Cardiology</td>
                      <td>Mon - Sun</td>
                      <td>09:00 AM - 06:00 PM</td>
                      <td>
                        <button className="custom-badge status-green">Active</button>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <Link className="dropdown-item" to="edit-schedule.html">
                              <i className="fa-solid fa-pen-to-square m-r-5"></i> Edit
                            </Link>
                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
                              <i className="fa fa-trash-alt m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* End of repeated <tr> block */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleList;
