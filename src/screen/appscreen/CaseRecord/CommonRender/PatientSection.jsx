import React from 'react';
import { MdArrowDropDown, MdClose } from 'react-icons/md';

const PatientSection = ({ title, section, setSection, dropdownOpen, toggleDropdown, handleDropdownSelect, handleAddItem, handleRemoveItem, toggleCommentsVisibility }) => {
  return (
    <div className="Patient_Person_Add_main">
      <div className="Patient_Person_Add">
        <div className="Patient_Problem_Nem" onClick={() => toggleCommentsVisibility(section, setSection)}>
          <h3 className="mb-0">{title}</h3>
        </div>
        <div className="Patient_Textinput-main">
          <div className="Patient_Textinput w-50">
            <div className="p-1">
              <div className="flex-grow-1 position-relative">
                <input
                  type="text"
                  className="form-control"
                  value={section.inputValue}
                  onChange={(e) => setSection({ ...section, inputValue: e.target.value })}
                  placeholder="Enter Comment"
                />
                <button
                  type="button"
                  className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                  onClick={() => toggleDropdown(title)}
                  aria-label="Dropdown"
                >
                  {section.locationValue || <MdArrowDropDown size={24} />}
                </button>
                {dropdownOpen === title && (
                  <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                    <button
                      className="custom-dropdown-item"
                      onClick={() => handleDropdownSelect(section, setSection, "locationValue", "1")}
                    >
                      1
                    </button>
                    <button
                      className="custom-dropdown-item"
                      onClick={() => handleDropdownSelect(section, setSection, "locationValue", "2")}
                    >
                      2
                    </button>
                    <button
                      className="custom-dropdown-item"
                      onClick={() => handleDropdownSelect(section, setSection, "locationValue", "3")}
                    >
                      3
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="btn btn-primary btn-rounded Add-btn-new" onClick={() => handleAddItem(section, setSection)}>
            + Add
          </button>
        </div>
      </div>

      {/* Show the list of added comments */}
      {section.showComments && (
        <div className="Patient_comment_list_Main">
          {section.rows.map((row, index) => (
            <div key={index} className="Comment_list d-flex">
                <div>

              <p className="Comment_name">{row.location}</p>
              </div>
              <div>

              <p className="priority_btn">{row.locationValue}</p>

              </div>
              <button className="btn btn-sm btn-danger" onClick={() => handleRemoveItem(section, setSection, index)}>
                <MdClose size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientSection;
