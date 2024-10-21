import React, { useRef, useState,useEffect } from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import { ChevronRight } from 'react-feather';
import { Tabs, Tab } from 'react-bootstrap'; 
import PatientSection from "./CommonRender/PatientSection";
const CaseRecordinit = () => {
  const [showWeightSections, setShowWeightSections] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [WEIGHT, setWEIGHT] = useState({ inputValue: '', locationValue: '', rows: [], showComments: true });
  const [weightGain, setWeightGain] = useState({ inputValue: '', locationValue: '', rows: [], showComments: true });
  const [weightLoss, setWeightLoss] = useState({ inputValue: '', locationValue: '', rows: [], showComments: true });
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
      <div className="Patient_Person_Add_main">
      <div className='Patient_Person_main_1'>
        <PatientSection
          title="WEIGHT"
          section={WEIGHT}
          setSection={setWEIGHT}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleDropdownSelect={handleDropdownSelect}
          handleAddItem={handleAddItem}
          handleRemoveItem={handleRemoveItem}
          toggleCommentsVisibility={toggleCommentsVisibility}
          ishideshowbutton={true}
          setShowWeightSections={setShowWeightSections}
          showWeightSections={showWeightSections}
        />

{showWeightSections && (
          <>
            <PatientSection
              title="WEIGHT/GAIN"
              isShowIcon={true}
              section={weightGain}
              setSection={setWeightGain}
              dropdownOpen={dropdownOpen}
              toggleDropdown={toggleDropdown}
              handleDropdownSelect={handleDropdownSelect}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              toggleCommentsVisibility={toggleCommentsVisibility}
            />
            <PatientSection
              title="WEIGHT/LOSS"
              isShowIcon={true}
              section={weightLoss}
              setSection={setWeightLoss}
              dropdownOpen={dropdownOpen}
              toggleDropdown={toggleDropdown}
              handleDropdownSelect={handleDropdownSelect}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              toggleCommentsVisibility={toggleCommentsVisibility}
            />
          </>
        )}

        
        </div>
        </div>

        
       
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
