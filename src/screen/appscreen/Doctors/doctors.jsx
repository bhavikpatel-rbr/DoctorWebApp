import React, { useState } from 'react';
const data = [
    { id: 1, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 1, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 1, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 1, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 1, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 1, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 1, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 1, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 1, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 1, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 1, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    // Add more data items here
  ];
  
  const rowsPerPage = 5;
const DoctorList = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    const totalPages = Math.ceil(data.length / rowsPerPage);
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
              <li className="breadcrumb-item active">Doctors List</li>
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
                      <h3>Doctors List</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                          <form>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here"
                            />
                            <a className="btn">
                              {/* <img
                                src="assets/img/icons/search-normal.svg"
                                alt="Search"
                              /> */}
                            </a>
                          </form>
                        </div>
                        <div className="add-group">
                          <a href="add-doctor.html" className="btn btn-primary add-pluss ms-2">
                            {/* <img
                              src="assets/img/icons/plus.svg"
                              alt="Add"
                            /> */}
                          </a>
                          <a href="javascript:;" className="btn btn-primary doctor-refresh ms-2">
                            {/* <img
                              src="assets/img/icons/re-fresh.svg"
                              alt="Refresh"
                            /> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto text-end float-end ms-auto download-grp">
                    <a href="javascript:;" className="me-2">
                      {/* <img
                        src="assets/img/icons/pdf-icon-01.svg"
                        alt="PDF Icon 1"
                      /> */}
                    </a>
                    <a href="javascript:;" className="me-2">
                      {/* <img
                        src="assets/img/icons/pdf-icon-02.svg"
                        alt="PDF Icon 2"
                      /> */}
                    </a>
                    <a href="javascript:;" className="me-2">
                      {/* <img
                        src="assets/img/icons/pdf-icon-03.svg"
                        alt="PDF Icon 3"
                      /> */}
                    </a>
                    <a href="javascript:;">
                      {/* <img
                        src="assets/img/icons/pdf-icon-04.svg"
                        alt="PDF Icon 4"
                      /> */}
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
              <th>Name</th>
              <th>Department</th>
              <th>Specialization</th>
              <th>Degree</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Joining Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map(doctor => (
              <tr key={doctor.id}>
                <td>
                  <div className="form-check check-tables">
                    <input className="form-check-input" type="checkbox" value="something" />
                  </div>
                </td>
                <td className="profile-image">
                  <a href="profile.html">{doctor.name}</a>
                </td>
                <td>{doctor.department}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.degree}</td>
                <td><a href="javascript:;">{doctor.mobile}</a></td>
                <td><a href={`mailto:${doctor.email}`}>{doctor.email}</a></td>
                <td>{doctor.joiningDate}</td>
                <td className="text-end">
                  <div className="dropdown dropdown-action">
                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-ellipsis-v"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="edit-doctor.html">
                        <i className="fa-solid fa-pen-to-square m-r-5"></i>
                        Edit
                      </a>
                      <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
                        <i className="fa fa-trash-alt m-r-5"></i>
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <a className="page-link" href="#" onClick={() => paginate(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
