import React, { useState } from 'react';
import { MdArrowDropDown, MdClose } from 'react-icons/md';

const AddSfft = () => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [items, setItems] = useState([]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleDropdownSelect = (value) => {
    setDropdownValue(value);
    setDropdownOpen(false);
  };
  const handleAddItem = () => {
    if (inputValue && dropdownValue) {
      setItems([...items, { inputValue, dropdownValue }]);
      setInputValue('');
      setDropdownValue('');
    }
  };
  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
   

      <div className="content">
        <div className="input-section">
          <input
            type="text"
            className="input-field"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Select SFFT Diagnosis"
          />
          <button className="dropdown-button" onClick={toggleDropdown}>
            {dropdownValue || <MdArrowDropDown size={24} />}
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={() => handleDropdownSelect('Value 1')}>Value 1</button>
              <button className="dropdown-item" onClick={() => handleDropdownSelect('Value 2')}>Value 2</button>
              <button className="dropdown-item" onClick={() => handleDropdownSelect('Value 3')}>Value 3</button>
            </div>
          )}
          <button className="save-button">SAVE</button>
        </div>
       
       <div className='flex: 1,'>

       
        
          <div className="triangle"></div>
          {/* <div className="triangle-item">Structure</div>
          <div className="triangle-item">Time</div>
          <div className="triangle-item">Function</div>
          <div className="triangle-item">Form</div> */}
        </div>
       
        <div className="action-buttons">
          <button className="remove-button">REMOVE</button>
          <button className="analysis-button">ANALYSIS</button>
          <button className="add-button" onClick={handleAddItem}>+</button>
        </div>

        <div className="items-list">
          {items.map((item, index) => (
            <div key={index} className="item">
              <span>{item.inputValue} - {item.dropdownValue}</span>
              <button className="remove-item-button" onClick={() => handleRemoveItem(index)}><MdClose /></button>
            </div>
          ))}
        </div>
      </div>
   
  );
}

export default AddSfft;
