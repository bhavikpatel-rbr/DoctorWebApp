import React, { useState } from 'react'
import { mdiAccountCircleOutline, mdiEmailOutline, mdiLockOutline } from '@mdi/js';
import { BiAbacus, BiBarChartAlt, BiBellOff } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../Sidebar/Sidebar';
import HcOffcanvasNav from 'hc-offcanvas-nav';
import { useLocation } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';



const ResetPassword = () => {
    return (
      <div className="bg-light min-vh-100 d-flex flex-column">
          <Sidebar/>
        <div className="sign-in p-4 flex-grow-1">
          <div className="d-flex align-items-start justify-content-between mb-4">
            <div>
              <span className="bi bi-lock-open-variant text-primary display-1"></span>
              <h2 className="my-3 fw-bold">Reset Password</h2>
              <p className="text-muted mb-0">Enter a new Password</p>
            </div>
            <a className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5 hc-nav-trigger hc-nav-1" href="#">
          <BiAbacus size={24} className="d-flex" />
        </a>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <InputGroup className="border bg-white rounded-3 py-1">
                <InputGroup.Text id="password">
                  <span className="bi bi-lock-open-variant text-muted"></span>
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Type your password"
                  aria-label="Type your password"
                  aria-describedby="password"
                  defaultValue="123456789"
                  className="bg-transparent rounded-0 border-0 px-0"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <InputGroup className="border bg-white rounded-3 py-1">
                <InputGroup.Text id="password1">
                  <span className="bi bi-lock text-muted"></span>
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Type your confirm password"
                  aria-label="Type your confirm password"
                  aria-describedby="password1"
                  defaultValue="123456789"
                  className="bg-transparent rounded-0 border-0 px-0"
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </div>
  
        <div className="footer fixed-bottom m-4">
          <Button href="congrats.html" className="btn btn-info btn-lg w-100 rounded-4">Login</Button>
        </div>
  
      
  
     
      </div>
    );
  };
  
  export default ResetPassword;
