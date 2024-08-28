import React, { useState } from 'react';
import axios from 'axios';
import { MdArrowDropDown, MdMic } from 'react-icons/md';
import { BiPlus } from 'react-icons/bi';
import { FaUser, FaBirthdayCake, FaVenusMars, FaUserCheck } from 'react-icons/fa';
import { BsMicFill, BsMicMute } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ChiefCompaintInit = ({ patient }) => {
  const [rows, setRows] = useState([
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
      selectedOptions: [], // New field to store selected options
    }
  ]);

  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [language, setLanguage] = useState("en");
  const [isRecording, setIsRecording] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]); // New state for selected options
  const [showOptions, setShowOptions] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleDropdownSelect = (index, field, value) => {
    setRows(rows.map((r, i) =>
      i === index ? { ...r, [field]: value, [`${field}Value`]: value } : r
    ));
    setDropdownOpen(null);
  };

  const translateText = async (text, targetLanguage) => {
    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        {
          q: text,
          target: targetLanguage,
          format: 'text'
        },
        {
          params: {
            key: 'YOUR_GOOGLE_API_KEY'
          }
        }
      );
      return response.data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Translation API error:', error);
      return text;
    }
  };

  const handleLanguageChange = async (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);

    const translatedRows = await Promise.all(rows.map(async (row) => {
      const translatedRow = {
        location: await translateText(row.location, newLanguage),
        sensation: await translateText(row.sensation, newLanguage),
        modalities: await translateText(row.modalities, newLanguage),
        concomitant: await translateText(row.concomitant, newLanguage),
      };
      return translatedRow;
    }));

    setRows(translatedRows);
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
      }
    ]);
  };

  const startListening = (inputField, index) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = language;
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

  const removeRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleCheckboxChange = (index, field) => {
    setRows(rows.map((r, i) =>
      i === index ? { ...r, [field]: !r[field] } : r
    ));
  };

  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/patient/${id}`);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Add your recording start/stop logic here
  };

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter') {
      setFocusedIndex(index);
      setModalContent(
        `Location: ${rows[index].location}, Sensation: ${rows[index].sensation}, Modalities: ${rows[index].modalities}, Concomitant: ${rows[index].concomitant}`
      );
      setCurrentOptions(['Option 1', 'Option 2', 'Option 3', 'Option 4']); // Set initial options
      setShowOptions(true);
      setIsModalVisible(true);
    }
  };

  const handleOptionSelect = (option) => {
    // Add option to selected options
    setSelectedOptions(prevOptions => {
      const updatedOptions = [...prevOptions];
      if (!updatedOptions.includes(option)) {
        updatedOptions.push(option);
      }
      return updatedOptions;
    });
    setShowOptions(false); // Hide current options after selection
    // Optionally, you can set new options here for the next display
    setCurrentOptions(['New Option 1', 'New Option 2', 'New Option 3', 'New Option 4']); // Update options
  };

  const saveSelectedOptions = () => {
    // Save selected options to the row
    if (focusedIndex !== null) {
      setRows(rows.map((row, i) =>
        i === focusedIndex ? { ...row, selectedOptions } : row
      ));
    }
    setIsModalVisible(false);
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
            <p className="mb-0 fs-6 text-dark"><strong>Name:</strong> Tushar Joshi</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <FaBirthdayCake size={24} className="text-info me-2" />
            <p className="mb-0 fs-6 text-dark"><strong>Age:</strong> 29</p>
          </div>
          <div className="d-flex align-items-center">
            <FaVenusMars size={24} className="text-info me-2" />
            <p className="mb-0 fs-6 text-dark"><strong>Gender:</strong> Male</p>
          </div>
        </div>
        <div className="recording-controls d-flex align-items-center">
          <button
            className={`btn btn-${isRecording ? 'danger' : 'primary'} d-flex align-items-center`}
            onClick={toggleRecording}
          >
            {isRecording ? <BsMicMute size={24} /> : <BsMicFill size={24} />}
            <span className="ms-2">{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
          </button>
        </div>
      </div>

      <div>
        {rows.map((row, index) => (
          <form key={index} className="form-group mb-3">
            {/* Location Section */}
            <div className="d-flex align-items-center mb-2">
              <div className="form-check me-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={row.locationChecked}
                  onChange={() => handleCheckboxChange(index, 'locationChecked')}
                  id={`location-check-${index}`}
                />
              </div>
              <div className="flex-grow-1 position-relative">
                <input
                  type="text"
                  className="form-control"
                  value={row.location}
                  onChange={(e) =>
                    setRows(rows.map((r, i) => i === index ? { ...r, location: e.target.value } : r))
                  }
                  onKeyDown={(e) => handleKeyPress(e, index)}
                  placeholder="Enter Location"
                />
                <button
                  type="button"
                  className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                  onClick={() => toggleDropdown(index)}
                  aria-label="Dropdown"
                >
                  {row.locationValue || <MdArrowDropDown size={24} />}
                </button>
                {dropdownOpen === index && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2">
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelect(index, 'locationValue', 'High')}
                    >
                      High
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelect(index, 'locationValue', 'Medium')}
                    >
                      Medium
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelect(index, 'locationValue', 'Low')}
                    >
                      Low
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Sensation Section */}
            <div className="d-flex align-items-center mb-2">
              <div className="form-check me-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={row.sensationChecked}
                  onChange={() => handleCheckboxChange(index, 'sensationChecked')}
                  id={`sensation-check-${index}`}
                />
              </div>
              <div className="flex-grow-1 position-relative">
                <input
                  type="text"
                  className="form-control"
                  value={row.sensation}
                  onChange={(e) =>
                    setRows(rows.map((r, i) => i === index ? { ...r, sensation: e.target.value } : r))
                  }
                  onKeyDown={(e) => handleKeyPress(e, index)}
                  placeholder="Enter Sensation & Pathology"
                />
                <button
                  type="button"
                  className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                  onClick={() => toggleDropdown(index)}
                  aria-label="Dropdown"
                >
                  {row.sensationValue || <MdArrowDropDown size={24} />}
                </button>
                {dropdownOpen === index && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2">
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelect(index, 'sensationValue', 'High')}
                    >
                      High
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelect(index, 'sensationValue', 'Medium')}
                    >
                      Medium
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelect(index, 'sensationValue', 'Low')}
                    >
                      Low
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Modalities Section */}
            <div className="d-flex align-items-center mb-2">
              <div className="form-check me-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={row.modalitiesChecked}
                  onChange={() => handleCheckboxChange(index, 'modalitiesChecked')}
                  id={`modalities-check-${index}`}
                />
              </div>
              <div className="flex-grow-1 position-relative">
                <input
                  type="text"
                  className="form-control"
                  value={row.modalities}
                  onChange={(e) =>
                    setRows(rows.map((r, i) => i === index ? { ...r, modalities: e.target.value } : r))
                  }
                  onKeyDown={(e) => handleKeyPress(e, index)}
                  placeholder="Enter Modalities AF"
                />
                <button
                  type="button"
                  className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                  onClick={() => toggleDropdown(index)}
                  aria-label="Dropdown"
                >
                  {row.modalitiesValue || <MdArrowDropDown size={24} />}
                </button>
                {dropdownOpen === index && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2">
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelect(index, 'modalitiesValue', 'High')}
                    >
                      High
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelect(index, 'modalitiesValue', 'Medium')}
                    >
                      Medium
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelect(index, 'modalitiesValue', 'Low')}
                    >
                      Low
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Concomitant Section */}
            <div className="d-flex align-items-center mb-2">
              <div className="form-check me-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={row.concomitantChecked}
                  onChange={() => handleCheckboxChange(index, 'concomitantChecked')}
                  id={`concomitant-check-${index}`}
                />
              </div>
              <div className="flex-grow-1 position-relative">
                <input
                  type="text"
                  className="form-control"
                  value={row.concomitant}
                  onChange={(e) =>
                    setRows(rows.map((r, i) => i === index ? { ...r, concomitant: e.target.value } : r))
                  }
                  onKeyDown={(e) => handleKeyPress(e, index)}
                  placeholder="Enter Concomitant"
                />
                <button
                  type="button"
                  className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                  onClick={() => toggleDropdown(index)}
                  aria-label="Dropdown"
                >
                  {row.concomitantValue || <MdArrowDropDown size={24} />}
                </button>
                {dropdownOpen === index && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2">
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelect(index, 'concomitantValue', 'High')}
                    >
                      High
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelect(index, 'concomitantValue', 'Medium')}
                    >
                      Medium
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDropdownSelect(index, 'concomitantValue', 'Low')}
                    >
                      Low
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Display Selected Options */}
            <div className="mb-2">
              <strong>Selected Options:</strong>
              <ul>
                {row.selectedOptions.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </div>
          </form>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={addRow}>
          <BiPlus size={24} /> Add Row
        </button>
      </div>

      {isModalVisible && (
        <div className="modal fade show align-items-center justify-content-center" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Select Options</h5>
                <button type="button" className="close" onClick={() => setIsModalVisible(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {selectedOptions.length > 0 && (
                  <div>
                    <p>Selected Options:</p>
                    <ul>
                      {selectedOptions.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {showOptions ? (
                  <ul className="list-group">
                    {currentOptions.map((option, index) => (
                      <li
                        key={index}
                        className="list-group-item"
                        onClick={() => handleOptionSelect(option)}
                        style={{ cursor: 'pointer' }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Loading more options...</p>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsModalVisible(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChiefCompaintInit;
