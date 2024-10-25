import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChevronRight } from 'react-feather';

const AddPatient = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      firstname: '',
      lastname: '',
      gender: '',
      birth_date: '',
      patient_name: '',
      specialization: '',
      education: '',
      designation: '',
      department: '',
      patient_phone: '',
      patient_email: '',
      license_number: '',
      years_of_experience: '',
      address_line_1: '',
      address_line_2: '',
      city: '',
      state: '',
      postal_code: '',
      country: '',
      operating_hours: '',
      services: '',
      latitude: '',
      longitude: '',
      patient_type: '',
      clinic_id: '',
      doctor_id: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      password: Yup.string().required('Password is required'),
      firstname: Yup.string().required('First name is required'),
      lastname: Yup.string().required('Last name is required'),
      gender: Yup.string().required('Gender is required'),
      birth_date: Yup.date().required('Birth date is required'),
      patient_name: Yup.string().required('Patient name is required'),
      specialization: Yup.string().required('Specialization is required'),
      education: Yup.string().required('Education is required'),
      designation: Yup.string().required('Designation is required'),
      department: Yup.string().required('Department is required'),
      patient_phone: Yup.string().required('Patient phone is required'),
      patient_email: Yup.string().email('Invalid email format').required('Patient email is required'),
      license_number: Yup.string().required('License number is required'),
      years_of_experience: Yup.number().required('Years of experience is required'),
      address_line_1: Yup.string().required('Address line 1 is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      postal_code: Yup.string().required('Postal code is required'),
      country: Yup.string().required('Country is required'),
      operating_hours: Yup.string().required('Operating hours are required'),
      services: Yup.string().required('Services are required'),
      latitude: Yup.number().required('Latitude is required'),
      longitude: Yup.number().required('Longitude is required'),
      patient_type: Yup.string().required('Patient type is required'),
      clinic_id: Yup.number().required('Clinic ID is required'),
      doctor_id: Yup.number().required('Doctor ID is required')
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission logic here
    }
  });

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="patients.html">Patients</a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} /></li>
              <li className="breadcrumb-item active">Add Patient</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-heading">
                      <h4>Patient Details</h4>
                    </div>
                  </div>
                  
                  {/* Username */}
                  <div className="col-12 col-md-6">
                    <div className="input-block">
                      <label>Username</label>
                      <input
                        type="text"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.username && formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-12 col-md-6">
                    <div className="input-block">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                    </div>
                  </div>

                  {/* Add similar input fields for all remaining fields */}
                  <div className="col-12 col-md-6">
                    <div className="input-block">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-secondary">Cancel</button>
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
    