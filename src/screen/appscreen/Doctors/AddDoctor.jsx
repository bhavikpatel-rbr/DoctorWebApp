import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    education: '',
    designation: '',
    department: '',
    address: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
    biography: '',
    avatar: null,
    status: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="doctors.html">Doctors </a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Add Doctor</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-heading">
                      <h4>Doctor Details</h4>
                    </div>
                  </div>
                  {[
                    { name: 'firstName', label: 'First Name', type: 'text', required: true },
                    { name: 'lastName', label: 'Last Name', type: 'text', required: true },
                    { name: 'userName', label: 'User Name', type: 'text', required: true },
                    { name: 'mobile', label: 'Mobile', type: 'text', required: true },
                    { name: 'email', label: 'Email', type: 'email', required: true },
                    { name: 'password', label: 'Password', type: 'password', required: true },
                    { name: 'confirmPassword', label: 'Confirm Password', type: 'password', required: true },
                    { name: 'dob', label: 'Date Of Birth', type: 'text', required: true },
                    { name: 'education', label: 'Education', type: 'text', required: true },
                    { name: 'designation', label: 'Designation', type: 'text', required: true }
                  ].map((field, idx) => (
                    <div key={idx} className={`col-12 col-md-6 col-xl-4`}>
                      <div className="input-block local-forms">
                        <label>{field.label} {field.required && <span className="login-danger">*</span>}</label>
                        <input
                          className="form-control"
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder=""
                          required={field.required}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block select-gender">
                      <label className="gen-label">Gender<span className="login-danger">*</span></label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            value="Male"
                            className="form-check-input mt-0"
                            checked={formData.gender === 'Male'}
                            onChange={handleChange}
                          /> Male
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            value="Female"
                            className="form-check-input mt-0"
                            checked={formData.gender === 'Female'}
                            onChange={handleChange}
                          /> Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms cal-icon">
                      <label>Date Of Birth <span className="login-danger">*</span></label>
                      <input
                        className="form-control datetimepicker"
                        type="text"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Department <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                      >
                        <option>Select Department</option>
                        <option>Orthopedics</option>
                        <option>Radiology</option>
                        <option>Dentist</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="input-block local-forms">
                      <label>Address <span className="login-danger">*</span></label>
                      <textarea
                        className="form-control"
                        name="address"
                        rows="3"
                        cols="30"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>City <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      >
                        <option>Select City</option>
                        <option>Alaska</option>
                        <option>Los Angeles</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>Country <span class="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option>Select Country</option>
                        <option>Usa</option>
                        <option>Uk</option>
                        <option>Italy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>State/Province <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      >
                        <option>Select State</option>
                        <option>Alaska</option>
                        <option>California</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>Postal Code <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="input-block local-forms">
                      <label>Start Biography <span className="login-danger">*</span></label>
                      <textarea
                        className="form-control"
                        name="biography"
                        rows="3"
                        cols="30"
                        value={formData.biography}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-top-form">
                      <label className="local-top">Avatar <span className="login-danger">*</span></label>
                      <div className="settings-btn upload-files-avator">
                        <input
                          type="file"
                          accept="image/*"
                          name="avatar"
                          id="file"
                          onChange={handleChange}
                          className="hide-input"
                        />
                        <label htmlFor="file" className="upload">Choose File</label>
                      </div>
                      {formData.avatar &&
                      <div className="upload-images upload-size">
                        {formData.avatar && <img src={URL.createObjectURL(formData.avatar)} alt="Avatar" />}
                        <a href="javascript:void(0);" className="btn-icon logo-hide-btn">
                          <i className="feather-x-circle"></i>
                        </a>
                      </div>
}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block select-gender">
                      <label className="gen-label">Status <span className="login-danger">*</span></label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="status"
                            value="Active"
                            className="form-check-input mt-0"
                            checked={formData.status === 'Active'}
                            onChange={handleChange}
                          /> Active
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="status"
                            value="Inactive"
                            className="form-check-input mt-0"
                            checked={formData.status === 'Inactive'}
                            onChange={handleChange}
                          /> Inactive
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  
                  <div className="doctor-submit text-end">
                    <button type="submit" className="btn btn-primary submit-form me-2">Submit</button>
                    <button type="button" className="btn btn-primary cancel-form">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
