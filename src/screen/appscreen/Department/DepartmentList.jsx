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
import { FaPen, FaTrash } from 'react-icons/fa';
import refresh from '../../../img/icons/re-fresh.svg'
import searchnormal from '../../../img/icons/search-normal.svg'
import depicon05 from '../../../img/icons/dep-icon-05.svg'
import ReactPaginate from 'react-paginate';
const DepartmentList = () => {
  // Sample data
  const data = [
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
      id: 1,
      name: 'Urology',
      head: 'Dr.Bhvaik Rupapara',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-02.jpg',
    },
    {
      id: 1,
      name: 'Radiology',
      head: 'Dr.Tushar Joshi',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-03.jpg',
    },
    {
      id: 1,
      name: 'Radiology',
      head: 'Dr.Tushar Joshi',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-03.jpg',
    },

    {
      id: 1,
      name: 'Radiology',
      head: 'Dr.Tushar Joshi',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-03.jpg',
    },
    {
      id: 1,
      name: 'Radiology',
      head: 'Dr.Tushar Joshi',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-03.jpg',
    },
    {
      id: 1,
      name: 'Radiology',
      head: 'Dr.Tushar Joshi',
      description: 'Investigates and treats proble...',
      date: '01.10.2022',
      status: 'Active',
      headImage: 'assets/img/profiles/avatar-03.jpg',
    },
    // Add more departments as needed
  ];
  const rowsPerPage = 5;

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
                  
                </div>
              </div>

              <div className="table-responsive">
                <table className="table border-0 custom-table comman-table datatable mb-0">
                  <thead>
                    <tr>
                     
                      <th>Department</th>
                      <th>Department Head</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {currentRows.map(department => (
                      <tr key={department.id}>
                      
                        <td>{department.name}</td>
                        <td className="profile-image">
                          <Link to="/profile">
                            
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
                          <button 
                            className="btn btn-sm btn-danger me-2" 
                            style={{ backgroundColor: '#2e37a4', borderColor: '#2e37a4' }}
                            
                          >
                            <FaPen />
                          </button>
                          <button 
                            className="btn btn-sm btn-danger " 
                            style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                            
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <nav>
                <ul className="pagination justify-content-center" style={{ marginTop: '20px' }}>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} style={{ margin: '0 5px' }}>
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => paginate(index + 1)}
                        style={{
                          border: '1px solid #2e37a4',
                          color: currentPage === index + 1 ? '#fff' : '#2e37a4',
                          backgroundColor: currentPage === index + 1 ? '#2e37a4' : '#fff',
                          borderRadius: '4px',
                          padding: '6px 12px',
                          cursor: 'pointer',
                        }}
                      >
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

export default DepartmentList;
