import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../screen/appscreen/home';
import Dashboard from '../screen/appscreen/Dashboard';
import SignUp from '../screen/authscreen/Signup';
import Header from '../Sidebar/Header';
import Sidebar from '../Sidebar/Sidebar';
import DoctorDashboard from '../screen/appscreen/Dashboard/Doctordashboard';
import PatientDashboard from '../screen/appscreen/Dashboard/Patientdashboard';
import DoctorList from '../screen/appscreen/Doctors/doctors';
import AddDoctor from '../screen/appscreen/Doctors/AddDoctor';
import EditDoctor from '../screen/appscreen/Doctors/EditDoctor';
import DoctorProfile from '../screen/appscreen/Doctors/DoctorProfile';
import AddPatient from '../screen/appscreen/Patients/AddPatient';
import PatientList from '../screen/appscreen/Patients/PatientList';
import EditPatient from '../screen/appscreen/Patients/EditPatient';
import PatientProfile from '../screen/appscreen/Patients/PatientProfile';
import StaffList from '../screen/appscreen/Staff/StaffList';
import AddStaff from '../screen/appscreen/Staff/AddStaff';
import StaffProfile from '../screen/appscreen/Staff/StaffProfile';
import LeaveRequest from '../screen/appscreen/Staff/LeaveRequest';
import Holidays from '../screen/appscreen/Staff/Holidays';
import AttendanceSheet from '../screen/appscreen/Staff/AttendanceSheet';
import AppointmentList from '../screen/appscreen/Appointment/AppointmentList';
import BookAppointmentForm from '../screen/appscreen/Appointment/BookAppointmentForm';
import EditAppointmentForm from '../screen/appscreen/Appointment/EditAppointmentForm';
import ScheduleList from '../screen/appscreen/DoctorShedule/ScheduleList';
import AddSchedule from '../screen/appscreen/DoctorShedule/AddSchedule';
import EditSchedule from '../screen/appscreen/DoctorShedule/EditSchedule';
import DepartmentList from '../screen/appscreen/Department/DepartmentList';
import AddDepartment from '../screen/appscreen/Department/AddDepartment';
import EditDepartment from '../screen/appscreen/Department/EditDepartment';
const AppNavigation = () => {

    const Layout = ({ children }) => {
        return (
            <div className="main-wrapper">
                <Header/>
                <Sidebar />
                <div className="page-wrapper" >
                    <div class="content">
                    {children} {/* This ensures the content for the route is displayed */}
                    </div>
                </div>
            </div>
        );
    };
    return (
        <Routes>
            <Route>
            <Route
                path="/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
             <Route
                    path="/dashboard"
                    element={
                        <Layout>
                            <Dashboard />
                        </Layout>
                    }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default AppNavigation
