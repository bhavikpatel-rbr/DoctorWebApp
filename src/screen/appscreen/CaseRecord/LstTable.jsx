import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Button, IconButton, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { ChevronRight, ArrowDownLeft } from 'react-feather';

const LstTable = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    onset: '',
    duration: '',
    family: { keyword: '', description: '' },
    society: { keyword: '', description: '' },
    work: { keyword: '', description: '' },
    interpretation: { keyword: '', description: '' },
  });

  const [showDescription, setShowDescription] = useState({
    family: false,
    society: false,
    work: false,
    interpretation: false,
  });

  const [events, setEvents] = useState([{
    id: 1,
    eventName: 'Default Event',
    onset: '2024-09-25',
    duration: '1 hour',
    family: { keyword: 'default', description: '' },
    society: { keyword: 'default', description: '' },
    work: { keyword: 'default', description: '' },
    interpretation: { keyword: 'default', description: '' },
  }]);

  const lightColors = ['#fff', '#d4ffe6', '#b8cdff', '#edd4ff', '#f8ffd1'];

  const FormContainer = styled(Box)(({ theme, bgcolor }) => ({
    padding: theme.spacing(4),
    backgroundColor: bgcolor || theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [key, field] = name.split('.');
    setFormData((prevData) => ({
      ...prevData,
      [key]: { ...prevData[key], [field]: value },
    }));
  };

  const toggleDescription = (key) => {
    setShowDescription((prevShow) => ({
      ...prevShow,
      [key]: !prevShow[key],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleAddEvent = () => {
    if (events.length < 5) {
      const newEvent = {
        id: events.length + 1,
        eventName: formData.eventName,
        onset: formData.onset,
        duration: formData.duration,
        family: formData.family,
        society: formData.society,
        work: formData.work,
        interpretation: formData.interpretation,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      // Reset form data after adding event
      setFormData({
        eventName: '',
        onset: '',
        duration: '',
        family: { keyword: '', description: '' },
        society: { keyword: '', description: '' },
        work: { keyword: '', description: '' },
        interpretation: { keyword: '', description: '' },
      });
    } else {
      alert("You can only add a maximum of 5 events.");
    }
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/appointments">LstTable</Link>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">LstTable</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          {/* Display Event Names */}
          <Typography variant="h5" gutterBottom>
            Events List
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
            {events.map((event, index) => (
              <div 
                key={event.id} 
                style={{ 
                  padding: '8px', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px', 
                  backgroundColor: lightColors[index % lightColors.length] // Assign color
                }}
              >
                {event.eventName}
              </div>
            ))}
          </div>

          {/* Assign a background color based on the number of events */}
          <FormContainer bgcolor={events.length ? lightColors[(events.length - 1) % lightColors.length] : undefined}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h4" gutterBottom>Event Details</Typography>
              
              <div className="row">
                <div className="row">
                  <div className="col-4">
                    <div className="input-block local-forms">
                      <label>Event Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="eventName"
                        value={formData.eventName}
                        onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="input-block local-forms">
                      <label>Onset:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="onset"
                        value={formData.onset}
                        onChange={(e) => setFormData({ ...formData, onset: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="input-block local-forms">
                      <label>Duration:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="duration"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {['family', 'society', 'work', 'interpretation'].map((key) => (
                  <div key={key} className="col-3"> {/* Adjust the column size based on your layout needs */}
                    <div className="input-block local-forms">
                      <label>{`${key.charAt(0).toUpperCase() + key.slice(1)} Keyword:`}</label>
                      <input
                        type="text"
                        className="form-control"
                        name={`${key}.keyword`}
                        value={formData[key].keyword}
                        onChange={handleChange}
                        style={{ position: 'relative' }}
                      />
                      <IconButton
                        onClick={() => toggleDescription(key)}
                        style={{ position: 'absolute', right: '10px', top: '3px' }}
                      >
                        <ArrowDownLeft />
                      </IconButton>
                      {showDescription[key] && (
                        <input
                          type="text"
                          className="form-control"
                          name={`${key}.description`}
                          value={formData[key].description}
                          onChange={handleChange}
                          style={{ marginTop: '8px' }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <FormControl className='col-md-6' component="fieldset">
                <FormLabel component="legend">Characteristics Expression</FormLabel>
                <RadioGroup row aria-label="characteristics" name="characteristics">
                  <FormControlLabel value="Emotional State" control={<Radio />} label="Emotional State" />
                  <FormControlLabel value="Intellectual State" control={<Radio />} label="Intellectual State" />
                  <FormControlLabel value="Action" control={<Radio />} label="Action" />
                </RadioGroup>
              </FormControl>

              <FormControl className='col-md-6' component="fieldset">
                <FormLabel component="legend">Cause Aggravation Amelioration</FormLabel>
                <RadioGroup row aria-label="cause" name="cause">
                  <FormControlLabel value="Emotions" control={<Radio />} label="Emotions" />
                  <FormControlLabel value="Intellectual Activity" control={<Radio />} label="Intellectual Activity" />
                  <FormControlLabel value="Life Situation" control={<Radio />} label="Life Situation" />
                </RadioGroup>
              </FormControl>

              <div className="submit-section">
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
                <Button type="button" variant="contained" color="primary" onClick={handleAddEvent} style={{ marginLeft: '20px' }}>
                  Add Event
                </Button>
              </div>
            </form>
          </FormContainer>
        </div>
      </div>
    </div>
  );
};

export default LstTable;
