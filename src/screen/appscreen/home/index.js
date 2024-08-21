import React, { useState } from 'react'
import { mdiAccountCircleOutline, mdiEmailOutline, mdiLockOutline } from '@mdi/js';
import { BiAbacus, BiBarChartAlt, BiBellOff, BiPlus } from 'react-icons/bi';
import { MdAccountCircle, MdArrowDropDown } from 'react-icons/md';
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../Sidebar/Sidebar';
import HcOffcanvasNav from 'hc-offcanvas-nav';
import doctorImage from '../../../img/home/top-doctor-1.jpg';
import doctorImage1 from '../../../img/home/available-doctor-1.png';
const Home = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState(0);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const Modal = ({ isVisible, onClose, content }) => {
    if (!isVisible) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>×</button>
          {content}
        </div>
      </div>
    );
  };
  
  // Array of tab titles
  const tabs = [
    'Chief Complaint',
    'Associate Complaint',
    'Case Record',
    'Upload Case Record',
    'Add Diagnosis (SFFT)',
    'Add Life Space Table (LST)'
  ];

  const [rows, setRows] = useState([
    {
      location: "",
      sensation: "",
      modalities: "",
      concomitant: ""
    }
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        location: "",
        sensation: "",
        modalities: "",
        concomitant: ""
      }
    ]);
  };

  const startListening = (inputField, index) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRows(rows.map((row, i) =>
          i === index ? { ...row, [inputField]: transcript } : row
        ));
      };

      recognition.start();
    } else {
      alert("Speech Recognition API is not supported in this browser.");
    }
  };
 // Handle dropdown icon click to show modal
 const handleDropdownClick = (content) => {
  setModalContent(content);
  setIsModalVisible(true);
};
  const removeRow = () => {
    if (selectedRowIndex !== null) {
      setRows(rows.filter((_, index) => index !== selectedRowIndex));
      setSelectedRowIndex(null); // Reset the selected row index
    }
  };

  const handleRowSelect = (index) => {
    setSelectedRowIndex(index);
  };
  const handleCheckboxChange = (index) => {
    setRows(rows.map((row, i) =>
      i === index ? { ...row, isChecked: !row.isChecked } : row
    ));
  };
  // Array of tab content
  const tabContent = [
    <div>
      <h5>Chief Complaint Content</h5>
      <table className="table table-bordered table-hover custom-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sr No</th>
            <th scope="col">Location</th>
            <th scope="col">Sensation & Pathology</th>
            <th scope="col">Modalities AF</th>
            <th scope="col">Concomitant</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={selectedRowIndex === index ? 'selected-row' : ''}
              onClick={() => handleRowSelect(index)}
            >
              <td>{index + 1}</td>
              <td>
                <div className="input-group">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={row.isChecked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={row.location}
                    onChange={(e) =>
                      setRows(rows.map((r, i) => i === index ? { ...r, location: e.target.value } : r))
                    }
                    placeholder="Enter Location"
                  />
                  <button className="btn btn-outline-secondary" onClick={() => handleDropdownClick('Location Options')}>
                    <MdArrowDropDown size={20} />
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => startListening("location", index)}
                  >
                    🎤
                  </button>
                </div>
              </td>
              <td>
                <div className="input-group">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={row.isChecked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={row.sensation}
                    onChange={(e) =>
                      setRows(rows.map((r, i) => i === index ? { ...r, sensation: e.target.value } : r))
                    }
                    placeholder="Enter Sensation & Pathology"
                  />
                  <button className="btn btn-outline-secondary" onClick={() => handleDropdownClick('Sensation Options')}>
                    <MdArrowDropDown size={20} />
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => startListening("sensation", index)}
                  >
                    🎤
                  </button>
                </div>
              </td>
              <td>
                <div className="input-group">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={row.isChecked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={row.modalities}
                    onChange={(e) =>
                      setRows(rows.map((r, i) => i === index ? { ...r, modalities: e.target.value } : r))
                    }
                    placeholder="Enter Modalities AF"
                  />
                  <button className="btn btn-outline-secondary" onClick={() => handleDropdownClick('Modalities Options')}>
                    <MdArrowDropDown size={20} />
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => startListening("modalities", index)}
                  >
                    🎤
                  </button>
                </div>
              </td>
              <td>
                <div className="input-group">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={row.isChecked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={row.concomitant}
                    onChange={(e) =>
                      setRows(rows.map((r, i) => i === index ? { ...r, concomitant: e.target.value } : r))
                    }
                    placeholder="Enter Concomitant"
                  />
                  <button className="btn btn-outline-secondary" onClick={() => handleDropdownClick('Concomitant Options')}>
                    <MdArrowDropDown size={20} />
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => startListening("concomitant", index)}
                  >
                    🎤
                  </button>
                </div>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row selection on button click
                    handleRowSelect(index); // Select the row to delete
                    removeRow(); // Remove the selected row
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-outline-primary" onClick={addRow}>
        <BiPlus size={20} /> Add New Row
      </button>
    </div>,
    <div>Associate Complaint Content</div>,
    <div>Case Record Content</div>,
    <div>Upload Case Record Content</div>,
    <div>Add Diagnosis (SFFT) Content</div>,
    <div>Add Life Space Table (LST) Content</div>
  ];



  return (
    <div className="bg-light">
      <Sidebar />
      <div className="home d-flex flex-column vh-100">
        <div className="bg-white shadow-sm">
          <div className="d-flex align-items-center justify-content-between mb-auto p-3 osahan-header">
            <div className="d-flex align-items-center gap-2 me-auto">
              <img src={doctorImage} alt="" className="img-fluid rounded-circle icon" />
              <div className="ps-1">
                <p className="text-orange m-0 small">Welcome</p>
                <p className="fw-bold mb-0 text-primary fw-bold">Hey, Samantha!</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="bg-white shadow rounded-circle icon">
                <span className="mdi mdi-cards-heart-outline mdi-18px text-primary"></span>
              </div>
              <div className="bg-white shadow rounded-circle icon">
                <span className="mdi mdi-bell-outline mdi-18px text-primary"></span>
              </div>
              <a className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5 hc-nav-trigger hc-nav-1" href="#">
                <BiAbacus size={24} className="d-flex" />
              </a>
            </div>
          </div>
        </div>
        <div className="vh-100 my-auto overflow-auto body-fix-osahan-footer">
          <div className="p-3 mb-2">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-3 fw-bold px-3 text-black">Case Record</h4>
              <button className="btn btn-primary">
                <i className="bi bi-plus-lg me-1"></i> Add Data
              </button>
            </div>
            <div className="row row-cols-6 g-2 mt-1 tabs-container">
              {tabs.map((tab, index) => (
                <div key={index} className="col">
                  <div
                    className={`text-center rounded-4 p-2 shadow-sm ${activeTab === index ? 'active-tab' : 'bg-white'}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="link-dark">
                      <h6 className="text-truncate small m-0">{tab}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Tab Content */}
          <div className="p-3">
            {tabContent[activeTab]}
          </div>
          <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        content={modalContent}
      />
        </div>
      </div>
    </div>

  )
}

export default Home
