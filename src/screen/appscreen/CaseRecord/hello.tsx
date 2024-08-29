import React, { useState } from "react";
import axios from "axios";
import { MdArrowDropDown, MdMic } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import {
  FaUser,
  FaBirthdayCake,
  FaVenusMars,
  FaUserCheck,
} from "react-icons/fa";
import { BsMicFill, BsMicMute } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import './ChiefCompaintInit.css';

const ChiefCompaintInit = ({ patient }) => {
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
  const [dropdownOpen, setDropdownOpen] = useState({});

  const [language, setLanguage] = useState("en");
  const [isRecording, setIsRecording] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true); // Toggle modal visibility
  const [currentPage, setCurrentPage] = useState(0); // Tracks current page
  const [selectedOptions, setSelectedOptions] = useState([]); // Tracks selected options
  const itemsPerPage = 4; // Number of items per page
  const [showOptions, setShowOptions] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(null);

  // Assuming you have an array of 36 items
  const allOptions = Array.from({ length: 36 }, (_, i) => `Option ${i + 1}`);

  // Get the current items to display based on the current page
  const currentOptions = allOptions.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }

    // Automatically go to the next page if the option selected is the last item on the current page
    if (currentOptions.indexOf(option) === currentOptions.length - 1) {
      handleNext();
    }
  };

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < allOptions.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
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
    setDropdownOpen((prevState) => ({ ...prevState, [index]: null })); // Close the dropdown after selecting an option
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        location: "",
        sensation: "",
        modalities: "",
        concomitant: "",
        locationValue: "",
        sensationValue: "",
        modalitiesValue: "",
        concomitantValue: "",
        locationChecked: false,
        sensationChecked: false,
        modalitiesChecked: false,
        concomitantChecked: false,
        selectedOptions: [], // Initialize with empty array
      },
    ]);
  };

  const startListening = (inputField, index) => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = language;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRows(
          rows.map((row, i) =>
            i === index ? { ...row, [inputField]: transcript } : row
          )
        );
      };

      recognition.start();
    } else {
      alert("Speech Recognition API is not supported in this browser.");
    }
  };

  const handleCheckboxChange = (index, key) => {
    setRows(
      rows.map((row, i) => (i === index ? { ...row, [key]: !row[key] } : row))
    );
  };

  const navigate = useNavigate();

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Add your recording start/stop logic here
  };

  const handleKeyPress = (event, index) => {
    if (event.key === "Enter") {
      setFocusedIndex(index);
      setModalContent(
        `Location: ${rows[index].location}, Sensation: ${rows[index].sensation}, Modalities: ${rows[index].modalities}, Concomitant: ${rows[index].concomitant}`
      );
      setShowOptions(true);
      setIsModalVisible(true);
    }
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="chief_complaint.html">Chief Complaint</a>
              </li>
              <li className="breadcrumb-item active">Chief Complaint</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="patient-details mb-4 p-4 bg-white rounded border shadow-lg d-flex justify-content-between align-items-start">
        <div className="details-info">
          <div className="d-flex align-items-center mb-3">
            <FaUserCheck size={24} className="text-info me-2" />
            <p className="mb-0 fs-6 text-dark">
              <strong>Name:</strong> Tushar Joshi
            </p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <FaBirthdayCake size={24} className="text-info me-2" />
            <p className="mb-0 fs-6 text-dark">
              <strong>Age:</strong> 29
            </p>
          </div>
          <div className="d-flex align-items-center">
            <FaVenusMars size={24} className="text-info me-2" />
            <p className="mb-0 fs-6 text-dark">
              <strong>Gender:</strong> Male
            </p>
          </div>
        </div>
        <div className="recording-controls d-flex align-items-center">
          <button
            className={`btn btn-${
              isRecording ? "danger" : "primary"
            } d-flex align-items-center`}
            onClick={toggleRecording}
          >
            {isRecording ? <BsMicMute size={24} /> : <BsMicFill size={24} />}
            <span className="ms-2">
              {isRecording ? "Stop Recording" : "Start Recording"}
            </span>
          </button>
        </div>
      </div>

      <div>
        {rows.map((row, index) => (
          <form key={index} className="form-group mb-3">
            <div className="d-flex">
              <div className="flex-grow-1">
                {/* Location Section */}
                <div className="d-flex align-items-center mb-2">
                  <div className="form-check me-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={row.locationChecked}
                      onChange={() =>
                        handleCheckboxChange(index, "locationChecked")
                      }
                      id={`location-check-${index}`}
                    />
                  </div>
                  <div className="flex-grow-1 position-relative">
                    <input
                      type="text"
                      className="form-control"
                      value={row.location}
                      onChange={(e) =>
                        setRows(
                          rows.map((r, i) =>
                            i === index ? { ...r, location: e.target.value } : r
                          )
                        )
                      }
                      onKeyDown={(e) => handleKeyPress(e, index)}
                      placeholder="Enter Location"
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
                      <div className="dropdown-menu show position-absolute end-0 mt-2">
                        <button
                          className="dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "locationValue", "Value 1")
                          }
                        >
                          Value 1
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "locationValue", "Value 2")
                          }
                        >
                          Value 2
                        </button>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="btn btn-light ms-2"
                    onClick={() => startListening("location", index)}
                  >
                    <MdMic size={24} />
                  </button>
                </div>

                {/* Sensation Section */}
                <div className="d-flex align-items-center mb-2">
                  <div className="form-check me-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={row.sensationChecked}
                      onChange={() =>
                        handleCheckboxChange(index, "sensationChecked")
                      }
                      id={`sensation-check-${index}`}
                    />
                  </div>
                  <div className="flex-grow-1 position-relative">
                    <input
                      type="text"
                      className="form-control"
                      value={row.sensation}
                      onChange={(e) =>
                        setRows(
                          rows.map((r, i) =>
                            i === index
                              ? { ...r, sensation: e.target.value }
                              : r
                          )
                        )
                      }
                      onKeyDown={(e) => handleKeyPress(e, index)}
                      placeholder="Enter Sensation"
                    />
                    <button
                      type="button"
                      className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                      onClick={() => toggleDropdown(index, "sensation")}
                      aria-label="Dropdown"
                    >
                      {row.sensationValue || <MdArrowDropDown size={24} />}
                    </button>
                    {dropdownOpen[index] === "sensation" && (
                      <div className="dropdown-menu show position-absolute end-0 mt-2">
                        <button
                          className="dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "sensationValue", "Value 1")
                          }
                        >
                          Value 1
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "sensationValue", "Value 2")
                          }
                        >
                          Value 2
                        </button>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="btn btn-light ms-2"
                    onClick={() => startListening("sensation", index)}
                  >
                    <MdMic size={24} />
                  </button>
                </div>

                {/* Modalities Section */}
                <div className="d-flex align-items-center mb-2">
                  <div className="form-check me-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={row.modalitiesChecked}
                      onChange={() =>
                        handleCheckboxChange(index, "modalitiesChecked")
                      }
                      id={`modalities-check-${index}`}
                    />
                  </div>
                  <div className="flex-grow-1 position-relative">
                    <input
                      type="text"
                      className="form-control"
                      value={row.modalities}
                      onChange={(e) =>
                        setRows(
                          rows.map((r, i) =>
                            i === index
                              ? { ...r, modalities: e.target.value }
                              : r
                          )
                        )
                      }
                      onKeyDown={(e) => handleKeyPress(e, index)}
                      placeholder="Enter Modalities"
                    />
                    <button
                      type="button"
                      className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                      onClick={() => toggleDropdown(index, "modalities")}
                      aria-label="Dropdown"
                    >
                      {row.modalitiesValue || <MdArrowDropDown size={24} />}
                    </button>
                    {dropdownOpen[index] === "modalities" && (
                      <div className="dropdown-menu show position-absolute end-0 mt-2">
                        <button
                          className="dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "modalitiesValue", "Value 1")
                          }
                        >
                          Value 1
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "modalitiesValue", "Value 2")
                          }
                        >
                          Value 2
                        </button>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="btn btn-light ms-2"
                    onClick={() => startListening("modalities", index)}
                  >
                    <MdMic size={24} />
                  </button>
                </div>

                {/* Concomitant Section */}
                <div className="d-flex align-items-center mb-2">
                  <div className="form-check me-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={row.concomitantChecked}
                      onChange={() =>
                        handleCheckboxChange(index, "concomitantChecked")
                      }
                      id={`concomitant-check-${index}`}
                    />
                  </div>
                  <div className="flex-grow-1 position-relative">
                    <input
                      type="text"
                      className="form-control"
                      value={row.concomitant}
                      onChange={(e) =>
                        setRows(
                          rows.map((r, i) =>
                            i === index
                              ? { ...r, concomitant: e.target.value }
                              : r
                          )
                        )
                      }
                      onKeyDown={(e) => handleKeyPress(e, index)}
                      placeholder="Enter Concomitant"
                    />
                    <button
                      type="button"
                      className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                      onClick={() => toggleDropdown(index, "concomitant")}
                      aria-label="Dropdown"
                    >
                      {row.concomitantValue || <MdArrowDropDown size={24} />}
                    </button>
                    {dropdownOpen[index] === "concomitant" && (
                      <div className="dropdown-menu show position-absolute end-0 mt-2">
                        <button
                          className="dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "concomitantValue", "Value 1")
                          }
                        >
                          Value 1
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "concomitantValue", "Value 2")
                          }
                        >
                          Value 2
                        </button>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="btn btn-light ms-2"
                    onClick={() => startListening("concomitant", index)}
                  >
                    <MdMic size={24} />
                  </button>
                </div>
              </div>
              {/* Selected Options */}
              <div className="selected-options flex-shrink-0 ms-4">
                <h6>Selected Options:</h6>
                <ul>
                  {selectedOptions.map((option, i) => (
                    <li key={i}>{option}</li>
                  ))}
                </ul>
              </div>
            </div>
          </form>
        ))}
        <div className="d-flex justify-content-between mb-4">
          <button className="btn btn-primary" onClick={addRow}>
            Add Row <BiPlus size={24} />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setShowOptions(!showOptions)}
          >
            {showOptions ? "Hide Options" : "Show Options"}
          </button>
        </div>
        {showOptions && (
          <div className="options-section">
            <h6>Select Options:</h6>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-outline-secondary"
                onClick={handlePrevious}
                disabled={currentPage === 0}
              >
                Previous
              </button>
              <div className="options-grid">
                {currentOptions.map((option, i) => (
                  <div
                    key={i}
                    className={`option-item ${
                      selectedOptions.includes(option) ? "selected" : ""
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <button
                className="btn btn-outline-secondary"
                onClick={handleNext}
                disabled={(currentPage + 1) * itemsPerPage >= allOptions.length}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChiefCompaintInit;
