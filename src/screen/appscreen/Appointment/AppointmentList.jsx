import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import ReactPaginate from 'react-paginate';
import searchnormal from '../../../assest/img/icons/search-normal.svg'
import pdf1 from '../../../img/icons/pdf-icon-01.svg'
import pdf2 from '../../../img/icons/pdf-icon-02.svg'
import pdf3 from '../../../img/icons/pdf-icon-03.svg'
import pdf4 from '../../../img/icons/pdf-icon-04.svg'
import plus from '../../../img/icons/plus.svg'
import refresh from '../../../img/icons/re-fresh.svg'
import { Link } from 'react-router-dom'; // Use react-router-dom for navigation
const data =[
  {
    name: 'Andrea Lalema',
    doctor: 'Dr.Bernardo James',
    treatment: 'Infertility',
    mobile: '+1 23 456890',
    email: 'andrea@example.com',
    date: '01.10.2022',
    time: '07:30',
    image: 'avatar-01.jpg'
  },
  {
    name: 'Bhvaik Rupapara',
    doctor: 'Dr.Tushar Joshi',
    treatment: 'Infertility',
    mobile: '+1 23 456890',
    email: 'smith@example.com',
    date: '01.10.2022',
    time: '07:30',
    image: 'avatar-02.jpg'
  },
  // Add more rows as needed
]
const AppointmentList = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  // Pagination logic
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Calculate the index range for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/appointments">Appointment</Link>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
              </li>
              <li className="breadcrumb-item active">Appointment List</li>
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
                      <h3>Appointment</h3>
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
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="something"
                          />
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Consulting Doctor</th>
                      <th>Treatment</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((appointment, index) => (
                      <tr key={index}>
                        <td>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="something"
                            />
                          </div>
                        </td>
                        <td className="profile-image">
                          <Link to="/profile">
                            <img
                              width="28"
                              height="28"
                              src={`assets/img/profiles/${appointment.image}`}
                              className="rounded-circle m-r-5"
                            
                            />
                            {appointment.name}
                          </Link>
                        </td>
                        <td>{appointment.doctor}</td>
                        <td>{appointment.treatment}</td>
                        <td>
                          <a href={`tel:${appointment.mobile}`}>{appointment.mobile}</a>
                        </td>
                        <td>
                          <a href={`mailto:${appointment.email}`}>{appointment.email}</a>
                        </td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <Link
                                className="dropdown-item"
                                to="/edit-appointment"
                              >
                                <i className="fa-solid fa-pen-to-square m-r-5"></i> Edit
                              </Link>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient"
                              >
                                <i className="fa fa-trash-alt m-r-5"></i> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="pagination-container">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(data.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;
