import React, { useRef, useState,useEffect } from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import { ChevronRight } from 'react-feather';
import { Tabs, Tab } from 'react-bootstrap'; 

import { MdArrowDropDown } from "react-icons/md";
import PatientSection from "./CommonRender/PatientSection";

const data = [
  {
    id: 1,
    name: "ONSET / SUDDEN",
    department: "Hello",
    specialization: "Select Analysed data",
    degree: "MBBS, MS",
    mobile: "9758698568",
    email: "tushar@example.com",
    joiningDate: "01.10.2022",
    imgSrc: "avatar-01.jpg",
  },
  {
    id: 2,
    name: "Physical Description",
    department: "Hello",
    specialization: "Infertility",
    degree: "MBBS, MS",
    mobile: "9758698568",
    email: "tushar@example.com",
    joiningDate: "01.10.2022",
    imgSrc: "avatar-01.jpg",
  },
  {
    id: 3,
    name: "ONSET",
    department: "Hello",
    specialization: "Infertility",
    degree: "MBBS, MS",
    mobile: "9758698568",
    email: "tushar@example.com",
    joiningDate: "01.10.2022",
    imgSrc: "avatar-01.jpg",
  },
  {
    id: 4,
    name: "SUDDEN",
    department: "Hello",
    specialization: "Infertility",
    degree: "MBBS, MS",
    mobile: "9758698568",
    email: "tushar@example.com",
    joiningDate: "01.10.2022",
    imgSrc: "avatar-01.jpg",
  },

  // Add more data items here
];

const rowsPerPage = 5;
const CaseRecordinit = () => {
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [language, setLanguage] = useState("en");
  const [isRecording, setIsRecording] = useState(false);
  const [selectedoptionvalue, setselectedoptionvalue] = useState(false);
  const [selectedtype, setselectedtype] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const itemsPerPage = 4;
  const [showOptions, setShowOptions] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const [physicalDescription, setPhysicalDescription] = useState({ inputValue: '', locationValue: '', rows: [], showComments: true });
  const [weightGain, setWeightGain] = useState({ inputValue: '', locationValue: '', rows: [], showComments: true });
  const [weightLoss, setWeightLoss] = useState({ inputValue: '', locationValue: '', rows: [], showComments: true });
  const [period, setPeriod] = useState({ inputValue: '', locationValue: '', rows: [], showComments: true });
  const [height, setHeight] = useState({ inputValue: '', locationValue: '', rows: [], showComments: true });
  const [facialConfiguration, setFacialConfiguration] = useState({ inputValue: '', locationValue: '', rows: [], showComments: true });
  const [facialExpression, setFacialExpression] = useState({ inputValue: '', locationValue: '', rows: [], showComments: true });
  const [chin, setChin] = useState({ inputValue: '', locationValue: '', rows: [], showComments: true });
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState(""); // To store the selected dropdown value
  const [showComments, setShowComments] = useState(false); // Initial state to show comments
  const [locationValue, setLocationValue] = useState(null); // Tracks the selected locationValue

  const [activeTab, setActiveTab] = useState('Appearance');
  const tabContainerRef = useRef(null);
  const tabRefs = useRef({});

  const handleTabSelect = (key) => {
    setActiveTab(key);
  };

  useEffect(() => {
    // Scroll selected tab to the center
    if (tabContainerRef.current && tabRefs.current[activeTab]) {
      const tabElement = tabRefs.current[activeTab];
      const containerWidth = tabContainerRef.current.offsetWidth;
      const tabOffsetLeft = tabElement.offsetLeft;
      const tabWidth = tabElement.offsetWidth;

      // Scroll to center the active tab
      tabContainerRef.current.scrollTo({
        left: tabOffsetLeft - containerWidth / 2 + tabWidth / 2,
        behavior: 'smooth',
      });
    }
  }, [activeTab]);


  const handleKeyPress = (event, index) => {
    setSelectedOptions([]);
    if (event.key === "Enter") {
      setFocusedIndex(index);
      setModalContent(
        `Location: ${rows[index].location}, Sensation: ${rows[index].sensation}, Modalities: ${rows[index].modalities}, Concomitant: ${rows[index].concomitant}`
      );
      setShowOptions(true);
      setIsModalVisible(true);
    }
  };
  // Handle the selection of dropdown value
  const handleDropdownSelect = (section, setSection, key, value) => {
    if (key === "locationValue") {
      setSection({ ...section, locationValue: value });
    }
    setDropdownOpen(null);
  };


  // Toggle the dropdown visibility
  const toggleDropdown = (key) => {
    setDropdownOpen(dropdownOpen === key ? null : key);
  };
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

  const toggleCommentsVisibility = (section, setSection) => {
    setSection({ ...section, showComments: !section.showComments });
  };

  // Add new item to the list
  const handleAddItem = (section, setSection) => {
    const newItem = {
      location: section.inputValue,
      locationValue: section.locationValue,
    };
    setSection({ ...section, rows: [...section.rows, newItem], inputValue: '', locationValue: '' });
  };

  const handleRemoveItem = (section, setSection, index) => {
    const newRows = section.rows.filter((_, i) => i !== index);
    setSection({ ...section, rows: newRows });
  };
  
  

  return (
    
    <div className="content">
 <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="chief_complaint.html">Case Record</a>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">Case Record</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card p-2">
      <div className="tabs-container">
      <Tabs
        // ref={tabRef}
        defaultActiveKey="Appearance"
        id="elastic-tab-example"
        className="custom-tabs mb-0"
        onSelect={handleTabSelect}
        fill
      >
         <Tab eventKey="Appearance" title="APPEARANCE">
      <>
        <PatientSection
          title="PHYSICAL DESCRIPTION"
          section={physicalDescription}
          setSection={setPhysicalDescription}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleDropdownSelect={handleDropdownSelect}
          handleAddItem={handleAddItem}
          handleRemoveItem={handleRemoveItem}
          toggleCommentsVisibility={toggleCommentsVisibility}
          subheadingsEnabled={true}
        />
        <PatientSection
          title="WEIGHT/GAIN"
          section={weightGain}
          setSection={setWeightGain}
          dropdownOpen={dropdownOpen}
          
          toggleDropdown={toggleDropdown}
          handleDropdownSelect={handleDropdownSelect}
           handleRemoveItem={handleRemoveItem}
          toggleCommentsVisibility={toggleCommentsVisibility}
        />
        <PatientSection
          title="WEIGHT/LOSS"
          section={weightLoss}
          setSection={setWeightLoss}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleDropdownSelect={handleDropdownSelect}
          handleAddItem={handleAddItem}
          handleRemoveItem={handleRemoveItem}
          toggleCommentsVisibility={toggleCommentsVisibility}
        />
        <PatientSection
          title="PERIOD"
          section={period}
          setSection={setPeriod}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleDropdownSelect={handleDropdownSelect}
          handleAddItem={handleAddItem}
          handleRemoveItem={handleRemoveItem}
          toggleCommentsVisibility={toggleCommentsVisibility}
        />
        <PatientSection
          title="HEIGHT"
          section={height}
          setSection={setHeight}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleDropdownSelect={handleDropdownSelect}
          handleRemoveItem={handleRemoveItem}
          handleAddItem={handleAddItem}
          toggleCommentsVisibility={toggleCommentsVisibility}
        />
        <PatientSection
          title="FACIAL CONFIGURATION"
          section={facialConfiguration}
          setSection={setFacialConfiguration}
          handleRemoveItem={handleRemoveItem}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleDropdownSelect={handleDropdownSelect}
          handleAddItem={handleAddItem}
          toggleCommentsVisibility={toggleCommentsVisibility}
        />
        <PatientSection
          title="FACIAL EXPRESSION"
          section={facialExpression}
          setSection={setFacialExpression}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleRemoveItem={handleRemoveItem}
          handleDropdownSelect={handleDropdownSelect}
          handleAddItem={handleAddItem}
          toggleCommentsVisibility={toggleCommentsVisibility}
        />
        <PatientSection
          title="CHIN"
          section={chin}
          setSection={setChin}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleRemoveItem={handleRemoveItem}
          handleDropdownSelect={handleDropdownSelect}
          handleAddItem={handleAddItem}
          toggleCommentsVisibility={toggleCommentsVisibility}
        />
      </>
    </Tab>
          <Tab eventKey="profile" title="DIGESTION">
            Tab content for BIGESPION
          </Tab>
          <Tab eventKey="longer-tab" title="ELIMINATIONS">
            Tab content for Loooonger ELIMINATIONS
          </Tab>
          <Tab eventKey="contact" title="MENSPRUALFUNCTION">
            Tab content for MENSPRUALFUNCTION
          </Tab>
          <Tab eventKey="contact1" title="SEXUAL FUNCTION">
            Tab content for SEXUAL FUNCTION
          </Tab>
          <Tab eventKey="contact2" title="PATIENT'S/ MOTHERS OBSTEPRIC HISTORY">
            Tab content for PATIENT'S/ MOTHERS OBSTEPRIC HISTORY
          </Tab>
          <Tab eventKey="contact3" title="BEVELOPMENTAL LANDMARKSAND PROBLEMS">
            Tab content for Contact
          </Tab>
        </Tabs>

        </div>
      </div>
    </div>
  );
};

export default CaseRecordinit;
