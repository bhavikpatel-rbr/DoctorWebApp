import React, { useState } from 'react';
import { Dropdown, Form, Table } from 'react-bootstrap'; // Import Bootstrap components if needed
import { ChevronRight } from 'react-feather';

const LeaveRequest = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [leaveStatus, setLeaveStatus] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="staff-list.html">Staffs </a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Leave Request</li>
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
                      <h3>Leave Request</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                          <Form onSubmit={handleSearch}>
                            <Form.Control
                              type="text"
                              className="form-control"
                              placeholder="Search here"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn" type="submit">
                              <img src="assets/img/icons/search-normal.svg" alt="" />
                            </button>
                          </Form>
                        </div>
                        <div className="add-group">
                          <a href="add-leave.html" className="btn btn-primary add-pluss ms-2">
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
                <Form onSubmit={handleSearch}>
                  <div className="row">
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>Employee Name</label>
                        <Form.Control
                          type="text"
                          value={employeeName}
                          onChange={(e) => setEmployeeName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>Leave Type</label>
                        <Form.Control
                          as="select"
                          value={leaveType}
                          onChange={(e) => setLeaveType(e.target.value)}
                        >
                          <option>Select Leave Type</option>
                          <option>Medical Leave</option>
                          <option>Casual Leave</option>
                          <option>Loss of Pay</option>
                        </Form.Control>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>Leave Status</label>
                        <Form.Control
                          as="select"
                          value={leaveStatus}
                          onChange={(e) => setLeaveStatus(e.target.value)}
                        >
                          <option>Leave Status</option>
                          <option>Pending</option>
                          <option>Approved</option>
                          <option>Declined</option>
                        </Form.Control>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms cal-icon">
                        <label>From</label>
                        <Form.Control
                          type="text"
                          className="datetimepicker"
                          value={fromDate}
                          onChange={(e) => setFromDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms cal-icon">
                        <label>To</label>
                        <Form.Control
                          type="text"
                          className="datetimepicker"
                          value={toDate}
                          onChange={(e) => setToDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="doctor-submit">
                        <button type="submit" className="btn btn-primary submit-list-form me-2">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>

              <div className="table-responsive">
                <Table bordered className="custom-table comman-table datatable mb-0">
                  <thead>
                    <tr>
                      <th>
                        <div className="form-check check-tables">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </th>
                      <th>Employee Name</th>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>No of days</th>
                      <th>Reason</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Map through leave requests data */}
                    <tr>
                      <td>
                        <div className="form-check check-tables">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td className="profile-image">
                        <a href="profile.html">
                          <img
                            width="28"
                            height="28"
                            src="assets/img/profiles/avatar-01.jpg"
                            className="rounded-circle m-r-5"
                            alt=""
                          />
                          Andrea Lalema
                        </a>
                      </td>
                      <td>Medical Leave</td>
                      <td>02.10.2022</td>
                      <td>04.10.2022</td>
                      <td>2 Days</td>
                      <td>Not Feeling well</td>
                      <td>
                        <Dropdown className="action-label">
                          <Dropdown.Toggle
                            className="custom-badge status-green"
                            id="dropdown-custom-components"
                          >
                            Approved
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="javascript:;">New</Dropdown.Item>
                            <Dropdown.Item href="javascript:;">Pending</Dropdown.Item>
                            <Dropdown.Item href="javascript:;">Approved</Dropdown.Item>
                            <Dropdown.Item href="javascript:;">Declined</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                      <td className="text-end">
                        <Dropdown className="dropdown-action">
                          <Dropdown.Toggle
                            className="action-icon"
                            id="dropdown-basic"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="edit-leave.html">
                              <i className="feather-edit-2 me-1"></i> Edit
                            </Dropdown.Item>
                            <Dropdown.Item href="javascript:;">
                              <i className="feather-trash-2 me-1"></i> Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    {/* Repeat rows for other leave requests */}
                  </tbody>
                </Table>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="dataTables_info" id="example2_info" role="status" aria-live="polite">
                    Showing 1 to 10 of 57 entries
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                    <ul className="pagination">
                      <li className="paginate_button page-item previous disabled" id="example2_previous">
                        <a href="javascript:;" aria-controls="example2" data-dt-idx="0" tabIndex="0" className="page-link">
                          Previous
                        </a>
                      </li>
                      <li className="paginate_button page-item active">
                        <a href="javascript:;" aria-controls="example2" data-dt-idx="1" tabIndex="0" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="paginate_button page-item">
                        <a href="javascript:;" aria-controls="example2" data-dt-idx="2" tabIndex="0" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="paginate_button page-item next" id="example2_next">
                        <a href="javascript:;" aria-controls="example2" data-dt-idx="3" tabIndex="0" className="page-link">
                          Next
                        </a>
                      </li>
                    </ul>
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

export default LeaveRequest;
