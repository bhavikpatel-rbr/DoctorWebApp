import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import { ChevronRight } from 'react-feather';
import user from '../../../img/user1.jpg'
import calendar from '../../../img/icons/calendar.svg'
import profile from '../../../img/icons/profile-add.svg'
import pdf1 from '../../../img/icons/pdf-icon-01.svg'
import pdf2 from '../../../img/icons/pdf-icon-02.svg'
import pdf3 from '../../../img/icons/pdf-icon-03.svg'
import pdf4 from '../../../img/icons/pdf-icon-04.svg'
import plus from '../../../img/icons/plus.svg'
import refresh from '../../../img/icons/re-fresh.svg'
import searchnormal from '../../../img/icons/search-normal.svg'
import depicon05 from '../../../img/icons/dep-icon-05.svg'
import ReactPaginate from 'react-paginate';
const DepartmentList = () => {
  // Sample data
  const departments = [
    {
      id: 1,
      name: 'Cardiology',
      head: 'Dr.Bhvaik Rupapara',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-01.jpg',
    },
    {
      id: 2,
      name: 'Urology',
      head: 'Dr.Bhvaik Rupapara',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-02.jpg',
    },
    {
      id: 3,
      name: 'Radiology',
      head: 'Dr.Tushar Joshi',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-03.jpg',
    },
    {
      id: 4,
      name: 'Radiology',
      head: 'Dr.Tushar Joshi',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-03.jpg',
    },

    {
      id: 5,
      name: 'Radiology',
      head: 'Dr.Tushar Joshi',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-03.jpg',
    },
    {
      id: 6,
      name: 'Radiology',
      head: 'Dr.Tushar Joshi',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-03.jpg',
    },
    {
      id: 7,
      name: 'Radiology',
      head: 'Dr.Tushar Joshi',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-03.jpg',
    },
    // Add more departments as needed
  ];
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  // Pagination logic
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Calculate the index range for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = departments.slice(startIndex, endIndex);
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/departments">Department</Link>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
              </li>
              <li className="breadcrumb-item active">Department List</li>
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
                      <h3>Department List</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                          <form>
                            <input type="text" className="form-control" placeholder="Search here" />
                            <button type="submit" className="btn">
                              <img src={searchnormal} alt="" />
                            </button>
                          </form>
                        </div>
                        <div className="add-group">
                          <Link to="/add-department" className="btn btn-primary add-pluss ms-2">
                            <img src={plus} alt="" />
                          </Link>
                          <button className="btn btn-primary doctor-refresh ms-2">
                            <img src={refresh} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto text-end float-end ms-auto download-grp">
                    <a href="javascript:;" className="me-2">
                      <img src={pdf1} alt="" />
                    </a>
                    <a href="javascript:;" className="me-2">
                      <img src={pdf2} alt="" />
                    </a>
                    <a href="javascript:;" className="me-2">
                      <img src={pdf3} alt="" />
                    </a>
                    <a href="javascript:;">
                      <img src={pdf4} alt="" />
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
                      <th>Department</th>
                      <th>Department Head</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {departments.map(department => (
                      <tr key={department.id}>
                        <td>
                          <div className="form-check check-tables">
                            <input className="form-check-input" type="checkbox" value="something" />
                          </div>
                        </td>
                        <td>{department.name}</td>
                        <td className="profile-image">
                          <Link to="/profile">
                            <img
                              width="28"
                              height="28"
                              src={user}
                              className="rounded-circle m-r-5"
                              
                            />
                            {department.head}
                          </Link>
                        </td>
                        <td>{department.description}</td>
                        <td>{department.date}</td>
                        <td>
                          <button className={`custom-badge ${department.status === 'Active' ? 'status-green' : 'status-pink'}`}>
                            {department.status}
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-ellipsis-v"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <Link className="dropdown-item" to="/edit-department">
                                <i className="fa-solid fa-pen-to-square m-r-5"></i> Edit
                              </Link>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
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
        pageCount={Math.ceil(departments.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item previous"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item break"}
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

export default DepartmentList;
