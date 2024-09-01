import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../screen/appscreen/Dashboard';
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
import ChiefCompaint from '../screen/appscreen/CaseRecord/ChiefComplaint';
import AssociateComplaint from '../screen/appscreen/CaseRecord/AssociateComplaint';
import BlogGrid from '../screen/appscreen/Blog/Blog';
import BlogDetails from '../screen/appscreen/Blog/BlogDetails';
import AddBlogPage from '../screen/appscreen/Blog/AddBlog';
import EditBlogPage from '../screen/appscreen/Blog/EditBlogPage';
import ChatBox from '../screen/appscreen/Chat/ChatBox';
import ChiefCompaintInit from '../screen/appscreen/CaseRecord/ChiefCompaintInit';
import AssociateComplaintInit from '../screen/appscreen/CaseRecord/AssociateComplaintInit';
import AddMedicalStorePage from '../screen/appscreen/Store/AddMedicalStorePage';
import StoreGrid from '../screen/appscreen/Store/StoreGrid';
import StoreDetails from '../screen/appscreen/Store/StoreDetails';
import EditStoreDetails from '../screen/appscreen/Store/EditStoreDetails';
import ProfilePage from '../screen/appscreen/Profile/Profile';
import Chiefcomplaintstart from '../screen/appscreen/CaseRecord/Chiefcomplaintstart';
import AssociatecomplaintStart from '../screen/appscreen/CaseRecord/Associatecomplaintstart';
import CaseRecordinit from '../screen/appscreen/CaseRecord/CaseRecordinit';
import AddData from '../screen/appscreen/CaseRecord/AddData';
import CaseRecordAdd from '../screen/appscreen/CaseRecord/CaseRecordAdd';
import UploadCaseRecord from '../screen/appscreen/CaseRecord/Uploadcaserecord';

const AppNavigation = () => {

    const Layout = ({ children }) => {
        return (
            <div className="main-wrapper">
                <Header />
                <Sidebar />
                <div className="page-wrapper">
                    <div className="content">
                        {children} {/* This ensures the content for the route is displayed */}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Routes>
            <Route path="/" element={<Layout><Dashboard /></Layout>} />
            <Route path="/doctordashboard" element={<Layout><DoctorDashboard /></Layout>} />
            <Route path="/patientdashboard" element={<Layout><PatientDashboard /></Layout>} />

            {/* Doctors Routes */}
            <Route path="/doctors" element={<Layout><DoctorList /></Layout>} />
            <Route path="/adddoctor" element={<Layout><AddDoctor /></Layout>} />
            <Route path="/editdoctor" element={<Layout><EditDoctor /></Layout>} />
            <Route path="/doctorprofile" element={<Layout><DoctorProfile /></Layout>} />

            {/* Patients Routes */}
            <Route path="/patients" element={<Layout><PatientList /></Layout>} />
            <Route path="/addpatient" element={<Layout><AddPatient /></Layout>} />
            <Route path="/editpatient" element={<Layout><EditPatient /></Layout>} />
            <Route path="/patientprofile" element={<Layout><PatientProfile /></Layout>} />

            {/* Staff Routes */}
            <Route path="/stafflist" element={<Layout><StaffList /></Layout>} />
            <Route path="/addstaff" element={<Layout><AddStaff /></Layout>} />
            <Route path="/staffprofile" element={<Layout><StaffProfile /></Layout>} />
            <Route path="/leaverequest" element={<Layout><LeaveRequest /></Layout>} />
            <Route path="/holidays" element={<Layout><Holidays /></Layout>} />
            <Route path="/attendancesheet" element={<Layout><AttendanceSheet /></Layout>} />

            {/* Appointment Routes */}
            <Route path="/appointmentlist" element={<Layout><AppointmentList /></Layout>} />
            <Route path="/bookappointment" element={<Layout><BookAppointmentForm /></Layout>} />
            <Route path="/editappointment" element={<Layout><EditAppointmentForm /></Layout>} />

            {/* Doctor Schedule Routes */}
            <Route path="/schedulelist" element={<Layout><ScheduleList /></Layout>} />
            <Route path="/addschedule" element={<Layout><AddSchedule /></Layout>} />
            <Route path="/editschedule" element={<Layout><EditSchedule /></Layout>} />

            {/* Department Routes */}
            <Route path="/departments" element={<Layout><DepartmentList /></Layout>} />
            <Route path="/adddepartment" element={<Layout><AddDepartment /></Layout>} />
            <Route path="/editdepartment" element={<Layout><EditDepartment /></Layout>} />

             {/* Chief Complaint Routes */}
             <Route path="/chiefcompaint" element={<Layout><ChiefCompaint /></Layout>} />
             <Route path="/associatecomplaint" element={<Layout><AssociateComplaint /></Layout>} />
             <Route path="/adddata" element={<Layout><AddData /></Layout>} />
             <Route path="/caserecordadd" element={<Layout><CaseRecordAdd /></Layout>} />
             <Route path="/caserecordinit" element={<Layout><CaseRecordinit /></Layout>} />
             <Route path="/uploadcaserecord" element={<Layout><UploadCaseRecord /></Layout>} />
             <Route path="/chiefcomplaintstart" element={<Layout><Chiefcomplaintstart /></Layout>} />
             <Route path="/associatecomplaintStart" element={<Layout><AssociatecomplaintStart /></Layout>} />
             <Route path="/chiefcompaint/:id" element={<Layout><ChiefCompaintInit /></Layout>} />
             <Route path="/associatecomplaint/:id" element={<Layout><AssociateComplaintInit /></Layout>} />
           
             {/* Blog Routes */}
             <Route path="/blog" element={<Layout><BlogGrid /></Layout>} />
             <Route path="/blogdetails" element={<Layout><BlogDetails /></Layout>} />
             <Route path="/addblogpage" element={<Layout><AddBlogPage /></Layout>} />
             <Route path="/editblogpage" element={<Layout><EditBlogPage /></Layout>} />

              {/* Store Routes */}
              <Route path="/addmedicalstorepage" element={<Layout><AddMedicalStorePage /></Layout>} />
             <Route path="/store" element={<Layout><StoreGrid /></Layout>} />
             <Route path="/storedetails" element={<Layout><StoreDetails /></Layout>} />
             <Route path="/editstoredetails" element={<Layout><EditStoreDetails /></Layout>} />

             {/* Chat Routes */}
             <Route path="/chat" element={<Layout><ChatBox /></Layout>} />

              {/* ProfilePage Routes */}
              <Route path="/profilepage" element={<Layout><ProfilePage /></Layout>} />
             
             
            {/* Redirect to Dashboard if route not found */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppNavigation;
