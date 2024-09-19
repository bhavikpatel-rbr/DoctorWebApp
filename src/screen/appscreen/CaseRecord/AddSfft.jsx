import React, { useState } from 'react';
import { MdArrowDropDown, MdClose } from 'react-icons/md';

const AddSfft = () => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [items, setItems] = useState([]);
 
  const [lines, setLines] = useState([]);

  const addLine = () => {
    setLines([...lines, { width: 2, height: 50 }]);
  };

  const updateLine = (index, width, height) => {
    const newLines = [...lines];
    newLines[index] = { width, height };
    setLines(newLines);
  };


  const [structure, setStructure] = useState("");
  const [form, setForm] = useState("");
  const [functionText, setFunctionText] = useState("");
  const [time, setTime] = useState("");

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

 

  // const startDrag = (index) => {
  //   const onMouseMove = (e) => {
  //     const newLines = [...lines];
  //     newLines[index].left = e.clientX;
  //     newLines[index].top = e.clientY;

  //     // Snapping logic
  //     for (const key in sections) {
  //       const section = sections[key];
  //       const cornerPositions = [
  //         { x: section.left, y: section.top }, // Top-left
  //         { x: section.left + section.width, y: section.top }, // Top-right
  //         { x: section.left, y: section.top + section.height }, // Bottom-left
  //         { x: section.left + section.width, y: section.top + section.height }, // Bottom-right
  //       ];

  //       cornerPositions.forEach((corner) => {
  //         const snapThreshold = 10; // Distance within which to snap
  //         if (
  //           Math.abs(corner.x - e.clientX) < snapThreshold &&
  //           Math.abs(corner.y - e.clientY) < snapThreshold
  //         ) {
  //           newLines[index].left = corner.x;
  //           newLines[index].top = corner.y;
  //         }
  //       });
  //     }

  //     setLines(newLines);
  //   };

  //   const onMouseUp = () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //     window.removeEventListener('mouseup', onMouseUp);
  //   };

  //   window.addEventListener('mousemove', onMouseMove);
  //   window.addEventListener('mouseup', onMouseUp);
  // };

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
       
       {/* <div className='flex: 1,'>

       
        
          <div className="triangle"></div>
      
        </div> */}
     <div className="diagram">
        <div className="structure">
          <h4>structure</h4>
          <input 
            type="text" 
            value={structure} 
            onChange={(e) => setStructure(e.target.value)} 
          />
        </div>
        <div className="form ">
        <h4>form</h4>
          <input 
            type="text" 
            value={form} 
            onChange={(e) => setForm(e.target.value)} 
          />
        </div>
        <div className="triangle"></div>
        <div className="function">
        <h4>function</h4>
          <input 
            type="text" 
            value={functionText} 
            onChange={(e) => setFunctionText(e.target.value)} 
          />
        </div>
        <div className="time">
          <h4>time</h4>
          <input 
            type="text" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
          />
        </div>
        {/* {lines.map((line, index) => (
          <div
            key={line.id}
            className="line"
            style={{
              width: `${line.width}px`,
              height: `${line.height}px`,
              backgroundColor: 'black',
              position: 'absolute',
              left: `${line.left}px`,
              top: `${line.top}px`,
              cursor: 'grab',
            }}
            onMouseDown={() => startDrag(index)}
          />
        ))} */}
      </div>

       
        <div className="action-buttons">
          <button className="remove-button">REMOVE</button>
          <button className="analysis-button">ANALYSIS</button>
          <button className="add-button" onClick={handleAddItem}>+</button>
        </div>
        

{/* <button onClick={addLine}>Add Line</button> */}

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
