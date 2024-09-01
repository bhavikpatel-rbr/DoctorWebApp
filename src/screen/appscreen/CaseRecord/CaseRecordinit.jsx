import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import searchnormal from '../../../img/icons/search-normal.svg'
import pdf1 from '../../../img/icons/pdf-icon-01.svg'
import pdf2 from '../../../img/icons/pdf-icon-02.svg'
import pdf3 from '../../../img/icons/pdf-icon-03.svg'
import pdf4 from '../../../img/icons/pdf-icon-04.svg'
import plus from '../../../img/icons/plus.svg'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import refresh from '../../../img/icons/re-fresh.svg'

import { FaEdit } from 'react-icons/fa';
const data = [
    { id: 1, name: 'ONSET / SUDDEN', department: 'Hello', specialization: 'Select Analysed data', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 2, name: 'Physical Description', department: 'Hello', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 3, name: 'ONSET', department: 'Hello', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 4, name: 'SUDDEN', department: 'Hello', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    
    // Add more data items here
  ];
  
  const rowsPerPage = 5;
const CaseRecordinit = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
    const [dropdownOpen, setDropdownOpen] = useState({});
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handleDropdownToggle = (doctorId) => {
        setDropdownOpen((prev) => ({
          ...prev,
          [doctorId]: !prev[doctorId],
        }));
      };
    
      const handleOptionSelect = (doctorId, option) => {
        console.log(`Doctor ID: ${doctorId}, Selected Option: ${option}`);
        // Handle the selected option logic here
        // Close the dropdown after selecting an option
        setDropdownOpen((prev) => ({
          ...prev,
          [doctorId]: false,
        }));
      };
  return (
    <div className="content">
     

      <div className="row">
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="contact1" title="Contact" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="contact2" title="Contact" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="contact3" title="Contact" >
        Tab content for Contact
      </Tab>
    </Tabs>
      </div>
    </div>
  );
};

export default CaseRecordinit;
