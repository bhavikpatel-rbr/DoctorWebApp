import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { MdArrowDropDown } from "react-icons/md";

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
  const [rows, setRows] = useState([
    {
      location: "",
      locationValue: "",
      locationChecked: false,
      sensation: "",
      sensationValue: "",
      sensationChecked: false,
      modalities: "",
      modalitiesValue: "",
      modalitiesChecked: false,
      concomitant: "",
      concomitantValue: "",
      concomitantChecked: false,
      selectedOptions: [],
    },
  ]);
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

  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState(""); // To store the selected dropdown value
  const [showComments, setShowComments] = useState(false); // Initial state to show comments

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
  const toggleDropdown = (index, section) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: prevState[index] === section ? null : section,
    }));
  };
  const handleDropdownSelect = (index, key, value) => {
    setRows(
      rows.map((row, i) => (i === index ? { ...row, [key]: value } : row))
    );
    setDropdownOpen((prevState) => ({ ...prevState, [index]: null }));
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

  const toggleCommentsVisibility = () => {
    setShowComments(!showComments); // Toggle the visibility
  };

  const handleAddItem = () => {
    if (inputValue.trim() && dropdownValue) {
      setRows([
        ...rows,
        { location: inputValue, locationValue: dropdownValue },
      ]);
      setInputValue("");
      setDropdownValue(""); // Reset dropdown value after adding
    }
  };

  return (
    <div className="content">
      <div className="card p-2">
        <Tabs
          defaultActiveKey="Appearance"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="Appearance" title="APPEARANCE">
            <div className="Patient_Person_Add_main">
              <div className="Patient_Person_Add">
                <div
                  className="Patient_Problem_Nem"
                  onClick={toggleCommentsVisibility}
                >
                  <h3 className="mb-0">PHYSICAL DESCRIPTION</h3>
                </div>
                <div className="Patient_Textinput-main">
                  <div className="Patient_Textinput w-50">
                    {rows.map((row, index) => (
                      <div
                        className={`p-1 ${
                          row.location ? "bg-highlight" : "bg-default"
                        }`}
                      >
                        <div className="flex-grow-1 position-relative">
                          <input
                            type="text"
                            className="form-control"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Enter Comment"
                          />
                          <button
                            type="button"
                            className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                            onClick={() => toggleDropdown(index, "location")}
                            aria-label="Dropdown"
                          >
                            {row.locationValue || <MdArrowDropDown size={24} />}
                          </button>
                          {dropdownOpen[index] === "location" && (
                            <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                              <button
                                className="custom-dropdown-item"
                                onClick={() =>
                                  handleDropdownSelect(
                                    index,
                                    "locationValue",
                                    "1"
                                  )
                                }
                              >
                                1
                              </button>
                              <button
                                className="custom-dropdown-item"
                                onClick={() =>
                                  handleDropdownSelect(
                                    index,
                                    "locationValue",
                                    "2"
                                  )
                                }
                              >
                                2
                              </button>
                              <button
                                className="custom-dropdown-item"
                                onClick={() =>
                                  handleDropdownSelect(
                                    index,
                                    "locationValue",
                                    "3"
                                  )
                                }
                              >
                                3
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    class="btn btn-primary btn-rounded Add-btn-new"
                    onClick={handleAddItem}
                  >
                    + Add{" "}
                  </a>
                </div>
              </div>
              {showComments && ( // Conditionally render the comments section
                <div className="Patient_comment_list_Main">
                  {rows.map((row, index) => (
                    <div key={index} className="Comment_list d-flex">
                      <p className="Comment_name">{row.location}</p>
                      <p className="priority_btn">{row.locationValue}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Tab>
          <Tab eventKey="profile" title="BIGESPION">
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
  );
};

export default CaseRecordinit;
