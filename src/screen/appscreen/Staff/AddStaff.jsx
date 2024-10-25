import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChevronRight } from 'react-feather';

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required'),
  password: Yup.string()
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  firstname: Yup.string()
    .required('First name is required'),
  lastname: Yup.string()
    .required('Last name is required'),
  gender: Yup.string()
    .oneOf(['male', 'female', 'other'], 'Invalid gender')
    .required('Gender is required'),
  birth_date: Yup.date()
    .required('Birth date is required')
    .max(new Date(), 'Birth date cannot be in the future'),
  staff_name: Yup.string()
    .required('Staff name is required'),
  specialization: Yup.string()
    .required('Specialization is required'),
  education: Yup.string()
    .required('Education is required'),
  designation: Yup.string()
    .required('Designation is required'),
  department: Yup.string()
    .required('Department is required'),
  staff_phone: Yup.string()
    .required('Staff phone number is required'),
  staff_email: Yup.string()
    .email('Invalid staff email format')
    .required('Staff email is required'),
  license_number: Yup.string()
    .required('License number is required'),
  years_of_experience: Yup.number()
    .required('Years of experience is required')
    .min(0, 'Years of experience cannot be negative'),
  address_line_1: Yup.string()
    .required('Address line 1 is required'),
  address_line_2: Yup.string(),
  city: Yup.string()
    .required('City is required'),
  state: Yup.string()
    .required('State is required'),
  postal_code: Yup.string()
    .required('Postal code is required'),
  country: Yup.string()
    .required('Country is required'),
  operating_hours: Yup.string()
    .required('Operating hours are required'),
  services: Yup.string()
    .required('Services are required'),
  latitude: Yup.string()
    .required('Latitude is required'),
  longitude: Yup.string()
    .required('Longitude is required'),
  staff_type: Yup.string()
    .oneOf(['permanent', 'temporary'], 'Invalid staff type')
    .required('Staff type is required')
});


const AddStaff = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      lastname: '',
      gender: '',
      birth_date: '',
      staff_name: '',
      specialization: '',
      education: '',
      designation: '',
      department: '',
      staff_phone: '',
      staff_email: '',
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
      staff_type: ''
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      // clinic_id
      console.log(values);
    }
  });

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="staff-list.html">Staffs</a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} /></li>
              <li className="breadcrumb-item active">Add Staffs</li>
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
                      <h4>Staffs Details</h4>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>First Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.firstname && formik.errors.firstname ? (
                        <div className="text-danger">{formik.errors.firstname}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Last Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.lastname && formik.errors.lastname ? (
                        <div className="text-danger">{formik.errors.lastname}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>User Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.username && formik.errors.username ? (
                        <div className="text-danger">{formik.errors.username}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Mobile <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-danger">{formik.errors.phone}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Email <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Password <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-danger">{formik.errors.password}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Confirm Password <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className="text-danger">{formik.errors.confirmPassword}</div>
                      ) : null}
                    </div>
                  </div>




                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
