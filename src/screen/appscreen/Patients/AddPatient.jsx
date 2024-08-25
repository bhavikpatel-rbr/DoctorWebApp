import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';

const AddPatient = () => {
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
    status: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
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
              <li className="breadcrumb-item"><a href="patients.html">Patients</a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Add Patient</li>
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
                      <h4>Patients Details</h4>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>First Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Last Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>User Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        placeholder="User Name"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Mobile <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Email <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Password <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Confirm Password <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                      />
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
                        placeholder="Date Of Birth"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block select-gender">
                      <label className="gen-label">Gender <span className="login-danger">*</span></label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={handleChange}
                            className="form-check-input"
                          />
                          Male
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === 'Female'}
                            onChange={handleChange}
                            className="form-check-input"
                          />
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Education <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        placeholder="Education"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Designation <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="Designation"
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
                      >
                        <option value="">Select Department</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Radiology">Radiology</option>
                        <option value="Dentist">Dentist</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="input-block local-forms">
                      <label>Address <span className="login-danger">*</span></label>
                      <textarea
                        className="form-control"
                        rows="3"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                      />
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
                      >
                        <option value="">Select City</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Los Angeles">Los Angeles</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>Country <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option value="">Select Country</option>
                        <option value="Usa">USA</option>
                        <option value="Uk">UK</option>
                        <option value="Italy">Italy</option>
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
                      >
                        <option value="">Select State</option>
                        <option value="Alaska">Alaska</option>
                        <option value="California">California</option>
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
                        placeholder="Postal Code"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="input-block local-forms">
                      <label>Start Biography <span className="login-danger">*</span></label>
                      <textarea
                        className="form-control"
                        rows="3"
                        name="biography"
                        value={formData.biography}
                        onChange={handleChange}
                        placeholder="Biography"
                      />
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
                            checked={formData.status === 'Active'}
                            onChange={handleChange}
                            className="form-check-input"
                          />
                          Active
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="status"
                            value="In Active"
                            checked={formData.status === 'In Active'}
                            onChange={handleChange}
                            className="form-check-input"
                          />
                          In Active
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="doctor-submit text-end">
                      <button type="submit" className="btn btn-primary submit-form me-2">Submit</button>
                      <button type="button" className="btn btn-primary cancel-form">Cancel</button>
                    </div>
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

export default AddPatient;
