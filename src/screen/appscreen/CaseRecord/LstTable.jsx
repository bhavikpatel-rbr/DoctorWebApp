import React, { useState } from 'react';
import { MdArrowDropDown, MdClose } from 'react-icons/md';

const LstTable = () => {
    const [events, setEvents] = useState([{ id: 1, keyword: 'hello', onset: '' }]);

    const handleEdit = (id) => {
      // Handle edit logic
      alert(`Edit event with id: ${id}`);
    };
  
    const handleAddEvent = () => {
      // Handle add event logic
      const newEvent = { id: events.length + 1, keyword: '', onset: '' };
      setEvents([...events, newEvent]);
    };

  return (
   

    <div className='content'>
    <div className="Lsttable">
      <div className="Lst-table-header">
        <div className="Lst-table-cell">Sr No</div>
        <div className="Lst-table-cell">Event / Key word</div>
        <div className="Lst-table-cell">Onset</div>
      </div>
      {events.map((event) => (
        <div key={event.id} className="Lst-table-row">
          <div className="Lst-table-cell">{event.id}</div>
          <div className="Lst-table-cell">
            <button className="Lst-keyword-button">✓ {event.keyword}</button>
          </div>
          <div className="Lst-table-cell">{event.onset || 'Enter Data'}</div>
          <button className="Lst-edit-button" onClick={() => handleEdit(event.id)}>EDIT</button>
        </div>
      ))}
    </div>
    <button className="Lst-add-button" onClick={handleAddEvent}>ADD EVENT</button>
  
    </div>
  );
}

export default LstTable;
