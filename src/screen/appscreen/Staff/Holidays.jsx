import React from 'react';
import { Table, Dropdown } from 'react-bootstrap';
import { ChevronRight } from 'react-feather';
import searchnormal from '../../../img/icons/search-normal.svg'
const Holidays = () => {
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="staff-list.html">Staffs</a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Holidays</li>
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
                      <h3>Holidays</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                          <form>
                            <input type="text" className="form-control" placeholder="Search here" />
                            <a className="btn"><img src={searchnormal}  alt="" /></a>
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
                    <a href="javascript:;" className="me-2"><img src="assets/img/icons/pdf-icon-01.svg" alt="" /></a>
                    <a href="javascript:;" className="me-2"><img src="assets/img/icons/pdf-icon-02.svg" alt="" /></a>
                    <a href="javascript:;" className="me-2"><img src="assets/img/icons/pdf-icon-03.svg" alt="" /></a>
                    <a href="javascript:;"><img src="assets/img/icons/pdf-icon-04.svg" alt="" /></a>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <Table className="border-0 custom-table comman-table datatable mb-0" striped bordered hover>
                  <thead>
                    <tr>
                      <th>
                        <div className="form-check check-tables">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </th>
                      <th>Title</th>
                      <th>Holiday Date</th>
                      <th>Day</th>
                      <th>Description</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Repeat rows for each holiday */}
                    {['New Year', 'Pongal', 'Pongal Holiday', 'Tamil New Year', 'Good Friday', 'May Day', 'Ramzan', 'Independence day'].map((holiday, index) => (
                      <tr key={index}>
                        <td>
                          <div className="form-check check-tables">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>{holiday}</td>
                        <td>{`01.01.2022`}</td>
                        <td>Sunday</td>
                        <td>Common Holiday</td>
                        <td className="text-end">
                          <Dropdown className="dropdown dropdown-action">
                            <Dropdown.Toggle variant="link" id="dropdown-basic">
                              <i className="fa fa-ellipsis-v"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end">
                              <Dropdown.Item href="javascript:;"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</Dropdown.Item>
                              <Dropdown.Item href="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
                                <i className="fa fa-trash-alt m-r-5"></i> Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
