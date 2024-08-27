import React, { useState } from 'react';
import axios from 'axios';
import { ChevronRight } from 'react-feather';
import { MdArrowDropDown, MdMic } from 'react-icons/md';
import { BiPlus } from 'react-icons/bi';
import searchnormal from '../../../img/icons/search-normal.svg'
const ChiefCompaint = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [language, setLanguage] = useState("en"); // Default language
  const [rows, setRows] = useState([
    {
      location: "",
      sensation: "",
      modalities: "",
      concomitant: ""
    }
  ]);

  const languages = [
    { code: "en", name: "English (US)" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "hi", name: "Hindi" },
    { code: "zh", name: "Chinese (Mandarin)" },
    { code: "gu", name: "Gujarati" },
    { code: "bn", name: "Bengali" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "ru", name: "Russian" },
    { code: "ar", name: "Arabic" },
    { code: "it", name: "Italian" },
    { code: "pt", name: "Portuguese (Brazil)" },
    { code: "ta", name: "Tamil" },
    { code: "te", name: "Telugu" },
    { code: "ml", name: "Malayalam" },
    { code: "mr", name: "Marathi" },
    { code: "kn", name: "Kannada" },
    { code: "pa", name: "Punjabi" },
    // Add more languages as needed
  ];

  // Function to translate text using Google Translate API
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
            key: 'YOUR_GOOGLE_API_KEY' // Replace with your Google API key
          }
        }
      );
      return response.data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Translation API error:', error);
      return text; // Fallback to original text if error occurs
    }
  };

  // Handle language change and translate all text inputs
  const handleLanguageChange = async (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);

    // Translate all rows' text inputs
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
        concomitant: ""
      }
    ]);
  };

  const startListening = (inputField, index) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = language; // Use the selected language
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

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="chief_complaint.html">Chief Complaint</a>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">Chief Complaint </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h4 className="form-heading">Chief Complaint</h4>

              {/* Language Selection Dropdown */}
              <div className="form-group m-2">
                <select className="form-control" value={language} onChange={handleLanguageChange}>
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              <table className="table table-bordered table-hover custom-table">
                <thead className="thead-dark">
                <tr>
      <td colSpan="6">
        <form className="d-flex">
          <input type="text" className="form-control" placeholder="Search here" />
          <button type="submit" className="btn">
            <img src={searchnormal} alt="Search" />
          </button>
        </form>
      </td> 
      
    </tr>
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
                            type="text"
                            className="form-control"
                            value={row.location}
                            onChange={(e) =>
                              setRows(rows.map((r, i) => i === index ? { ...r, location: e.target.value } : r))
                            }
                            placeholder="Enter Location"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary m-1" onClick={() => handleDropdownClick('Location Options')}>
                              <MdArrowDropDown size={28} />
                            </button>
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() => startListening("location", index)}
                            >
                              <MdMic size={28} />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            value={row.sensation}
                            onChange={(e) =>
                              setRows(rows.map((r, i) => i === index ? { ...r, sensation: e.target.value } : r))
                            }
                            placeholder="Enter Sensation & Pathology"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary m-1" onClick={() => handleDropdownClick('Sensation Options')}>
                              <MdArrowDropDown size={28} />
                            </button>
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() => startListening("sensation", index)}
                            >
                              <MdMic size={28} />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            value={row.modalities}
                            onChange={(e) =>
                              setRows(rows.map((r, i) => i === index ? { ...r, modalities: e.target.value } : r))
                            }
                            placeholder="Enter Modalities AF"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary m-1" onClick={() => handleDropdownClick('Modalities Options')}>
                              <MdArrowDropDown size={28} />
                            </button>
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() => startListening("modalities", index)}
                            >
                              <MdMic size={28} />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            value={row.concomitant}
                            onChange={(e) =>
                              setRows(rows.map((r, i) => i === index ? { ...r, concomitant: e.target.value } : r))
                            }
                            placeholder="Enter Concomitant"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary m-1" onClick={() => handleDropdownClick('Concomitant Options')}>
                              <MdArrowDropDown size={28} />
                            </button>
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() => startListening("concomitant", index)}
                            >
                              <MdMic size={28} />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-outline-danger" onClick={removeRow}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-center">
                <button className="btn btn-primary" onClick={addRow}>
                  <BiPlus size={24} /> Add Row
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for dropdown content */}
      {isModalVisible && (
        <div className="modal fade show align-items-center justify-content-center" style={{ display: 'block', }} tabIndex="-1" role="dialog">
           
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Dropdown Options</h5>
                <button type="button" className="close" onClick={() => setIsModalVisible(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Render the content for dropdown options */}
                <p>{modalContent}</p>
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

export default ChiefCompaint;
