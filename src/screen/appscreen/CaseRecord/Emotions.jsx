import React, { useRef, useState } from "react";
import MentalSateItem from "../DiagramComponent/MentalSateItem";

export default function Emotions() {
  return (
    <div
      className="content"
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "10px",
      }}
    >
      <div className="row">
        <div className="col-sm-7 col-6">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="chief_complaint.html">Chief Complaint</a>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right"></i>
            </li>
            <li className="breadcrumb-item active">EMOTIONAL State</li>
          </ul>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-4 text-start">
            
          </div>
          <div className="col-4 text-center">
            <h4
              
              style={{ marginTop: "-10px", marginBottom: "40px" }}
            >
              EMOTIONS
            </h4>
          </div>
          <div className="col-4 text-end">
           
          </div>
          <div className="col-12">
            <svg
              width="100%"
              height="80"
              style={{
                position: "absolute",
                top: "60%",
                left: "0",
                transform: "translateY(-50%)",
              }}
            >
              <line
                x1="1.3%"
                y1="10"
                x2="45%"
                y2="10"
                stroke="black"
                strokeWidth="1"
               
              />
              
              <line
                x1="55%"
                y1="10"
                x2="98.8%"
                y2="10"
                stroke="black"
                strokeWidth="1"
               
              />
            </svg>
          </div>
        </div>
      </div>
      
      
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-1">
          <svg width="100%" height="100" style={{marginTop:"-51px"}}>
              
              
              <line
                x1="5%"
                y1="0"
                x2="5%"
                y2="50"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
          </div>
          <div className="col-md-10 d-flex">
             <div className="col-md-4">
                
             </div>
             <div className="col-md-2">
             <svg width="100%" height="100" style={{marginTop:"-51px"}}>
              
              
              <line
                x1="99%"
                y1="30"
                x2="99%"
                y2="50"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
             </div>
             <div className="col-md-4"></div>
          </div>
          <div className="col-md-1">
          <svg width="100%" height="100" style={{marginTop:"-51px"}}>
              
              
              <line
                x1="98%"
                y1="0"
                x2="98%"
                y2="50"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-1">
          <svg width="100%" height="100" style={{marginTop:"-51px"}}>
              
              
              <line
                x1="5%"
                y1="0"
                x2="5%"
                y2="50"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
          </div>
          <div className="col-md-10 d-flex">
             <div className="col-md-4 d-flex" style={{backgroundColor:"red"}}>
             <div className="col-md-3" style={{width:"30%" ,}}>
             <div className="input-block local-forms">
                <label>
                  SCHOLASTIC<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
                <div className="col-md-3" style={{width:"30%" ,marginLeft:10}}>
                <div className="input-block local-forms">
                <label>
                  SCHOLASTIC<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
                <div className="col-md-3">
                <div className="input-block local-forms">
                <label>
                  SCHOLASTIC<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
                <div className="col-md-3">
                <div className="input-block local-forms">
                <label>
                  SCHOLASTIC<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
             </div>
             <div className="col-md-2">
             <svg width="100%" height="100" style={{marginTop:"-51px"}}>
              
              
              <line
                x1="99%"
                y1="0"
                x2="99%"
                y2="50"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
             </div>
             <div className="col-md-4 d-flex ">
             <div className="col-md-3">
             <div className="input-block local-forms">
                <label>
                  SCHOLASTIC<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
                <div className="col-md-3">
                <div className="input-block local-forms">
                <label>
                  SCHOLASTIC<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
                <div className="col-md-3">
                <div className="input-block local-forms">
                <label>
                  SCHOLASTIC<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
                <div className="col-md-3">
                <div className="input-block local-forms">
                <label>
                  SCHOLASTIC<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
             </div>
          </div>
          <div className="col-md-1">
          <svg width="100%" height="100" style={{marginTop:"-51px"}}>
              
              
              <line
                x1="98%"
                y1="0"
                x2="98%"
                y2="50"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
          </div>
        </div>
      </div>
      
      
      
        
     
      
    </div>
  );
}
