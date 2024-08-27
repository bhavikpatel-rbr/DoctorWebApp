import React from 'react';
import { ChevronRight } from 'react-feather';
import searchnormal from '../../../img/icons/search-normal.svg'
const AttendanceSheet = () => {
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
              <li className="breadcrumb-item active">Attendance Sheet</li>
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
                      <h3>Attendance Sheet</h3>
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
                                alt=""
                              />
                            </a>
                          </form>
                        </div>
                        <div className="add-group">
                          <a href="javascript:;" className="btn btn-primary add-pluss ms-2">
                            <img src="assets/img/icons/plus.svg" alt="" />
                          </a>
                          <a href="javascript:;" className="btn btn-primary doctor-refresh ms-2">
                            <img src="assets/img/icons/re-fresh.svg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto text-end float-end ms-auto download-grp">
                    <a href="javascript:;" className="me-2">
                      <img src="assets/img/icons/pdf-icon-01.svg" alt="" />
                    </a>
                    <a href="javascript:;" className="me-2">
                      <img src="assets/img/icons/pdf-icon-02.svg" alt="" />
                    </a>
                    <a href="javascript:;" className="me-2">
                      <img src="assets/img/icons/pdf-icon-03.svg" alt="" />
                    </a>
                    <a href="javascript:;">
                      <img src="assets/img/icons/pdf-icon-04.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="staff-search-table">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>Employee Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>Year</label>
                        <select className="form-control select">
                          <option>Select Year</option>
                          <option>2022</option>
                          <option>2021</option>
                          <option>2020</option>
                          <option>2019</option>
                          <option>2018</option>
                          <option>2017</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>Month</label>
                        <select className="form-control select">
                          <option>Select Month</option>
                          <option>December</option>
                          <option>November</option>
                          <option>October</option>
                          <option>September</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms cal-icon">
                        <label>From</label>
                        <input className="form-control datetimepicker" type="text" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms cal-icon">
                        <label>To</label>
                        <input className="form-control datetimepicker" type="text" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="doctor-submit">
                        <button type="submit" className="btn btn-primary submit-list-form me-2">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="table-responsive">
                <table className="table border-0 custom-table attent-table datatable mb-0">
                  <thead>
                    <tr>
                      <th>September</th>
                      <th>01</th>
                      <th>02</th>
                      <th>03</th>
                      <th>04</th>
                      <th>05</th>
                      <th className="week-days">06</th>
                      <th className="week-days">07</th>
                      <th>08</th>
                      <th>09</th>
                      <th>10</th>
                      <th>11</th>
                      <th>12</th>
                      <th className="week-days">13</th>
                      <th className="week-days">14</th>
                      <th>15</th>
                      <th>16</th>
                      <th>17</th>
                      <th>18</th>
                      <th>19</th>
                      <th className="week-days">20</th>
                      <th className="week-days">21</th>
                      <th>22</th>
                      <th>23</th>
                      <th>24</th>
                      <th>25</th>
                      <th>26</th>
                      <th className="week-days">27</th>
                      <th className="week-days">28</th>
                      <th>29</th>
                      <th>30</th>
                      <th>31</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Replace with dynamic data */}
                    <tr>
                      <td className="month-table">
                        <h5>Andrea Lalema</h5>
                      </td>
                      <td>
                        <span className="present-table attent-status">
                          <i className="feather-check"></i>
                        </span>
                      </td>
                      <td>
                        <span className="present-table attent-status">
                          <i className="feather-check"></i>
                        </span>
                      </td>
                      {/* Add more cells here */}
                    </tr>
                    {/* Repeat for other rows */}
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

export default AttendanceSheet;
