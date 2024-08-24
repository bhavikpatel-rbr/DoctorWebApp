import React from 'react';
import { ChevronRight } from 'react-feather';
import morningimg01 from '../../../img/morning-img-01.png'
import user from '../../../img/user1.jpg'
import calendar from '../../../img/icons/calendar.svg'
import profile from '../../../img/icons/profile-add.svg'
import depicon01 from '../../../img/icons/dep-icon-01.svg'
import depicon02 from '../../../img/icons/dep-icon-02.svg'
import depicon03 from '../../../img/icons/dep-icon-03.svg'
import depicon04 from '../../../img/icons/dep-icon-04.svg'
import depicon05 from '../../../img/icons/dep-icon-05.svg'
import timer from '../../../img/icons/timer.svg'
import sort from '../../../img/icons/sort-icon-01.svg'
import sort1 from '../../../img/icons/sort-icon-02.svg'
import { ChartComponent, SeriesCollectionDirective, 
    AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,  AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip ,
    SeriesDirective, Inject, ChartTheme, Legend,LineSeries, Category, Tooltip, ColumnSeries, ILoadedEventArgs, DataLabel, Highlight } from '@syncfusion/ej2-react-charts';
import { EmitType } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
import { FaCheckSquare } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";


export let malePatientData = [
    { x: 'January', y: 200, toolTipMappingName: 'Male - January' },
    { x: 'February', y: 180, toolTipMappingName: 'Male - February' },
    { x: 'March', y: 210, toolTipMappingName: 'Male - March' },
    { x: 'April', y: 230, toolTipMappingName: 'Male - April' },
    { x: 'May', y: 190, toolTipMappingName: 'Male - May' },
    { x: 'June', y: 220, toolTipMappingName: 'Male - June' },
    { x: 'July', y: 250, toolTipMappingName: 'Male - July' },
    { x: 'August', y: 270, toolTipMappingName: 'Male - August' },
    { x: 'September', y: 240, toolTipMappingName: 'Male - September' },
    { x: 'October', y: 260, toolTipMappingName: 'Male - October' },
    { x: 'November', y: 230, toolTipMappingName: 'Male - November' },
    { x: 'December', y: 280, toolTipMappingName: 'Male - December' }
];
const data = [
  { x: 'New Patients', y: 40, color: '#FF6347' }, // Red
  { x: 'Old Patients', y: 60, color: '#4682B4' }  // Blue
];
const doctorActivityData = [
  { month: 'Jan', high: 75, low: 30 },
  { month: 'Feb', high: 65, low: 25 },
  { month: 'Mar', high: 80, low: 35 },
  { month: 'Apr', high: 95, low: 40 },
  { month: 'May', high: 85, low: 50 },
  { month: 'Jun', high: 90, low: 45 },
  { month: 'Jul', high: 100, low: 55 },
  { month: 'Aug', high: 95, low: 50 },
  { month: 'Sep', high: 110, low: 60 },
  { month: 'Oct', high: 120, low: 65 },
  { month: 'Nov', high: 115, low: 70 },
  { month: 'Dec', high: 125, low: 75 },
];
export let departmentData = [
    { x: 'Cardiology', y: 35, text: 'Cardiology - 35%' },
    { x: 'Neurology', y: 25, text: 'Neurology - 25%' },
    { x: 'Orthopedics', y: 15, text: 'Orthopedics - 15%' },
    { x: 'Pediatrics', y: 10, text: 'Pediatrics - 10%' },
    { x: 'Radiology', y: 8, text: 'Radiology - 8%' },
    { x: 'Oncology', y: 7, text: 'Oncology - 7%' }
];
export let femalePatientData = [
    { x: 'January', y: 150, toolTipMappingName: 'Female - January' },
    { x: 'February', y: 130, toolTipMappingName: 'Female - February' },
    { x: 'March', y: 160, toolTipMappingName: 'Female - March' },
    { x: 'April', y: 170, toolTipMappingName: 'Female - April' },
    { x: 'May', y: 140, toolTipMappingName: 'Female - May' },
    { x: 'June', y: 150, toolTipMappingName: 'Female - June' },
    { x: 'July', y: 180, toolTipMappingName: 'Female - July' },
    { x: 'August', y: 200, toolTipMappingName: 'Female - August' },
    { x: 'September', y: 170, toolTipMappingName: 'Female - September' },
    { x: 'October', y: 190, toolTipMappingName: 'Female - October' },
    { x: 'November', y: 160, toolTipMappingName: 'Female - November' },
    { x: 'December', y: 210, toolTipMappingName: 'Female - December' }
];
export let data1 = [{ x: 'GBR', y: 27, toolTipMappingName: 'Great Britain' }, { x: 'CHN', y: 26, toolTipMappingName: 'China' }, { x: 'AUS', y: 8, toolTipMappingName: 'Australia' }, { x: 'RUS', y: 19, toolTipMappingName: 'Russia' }, { x: 'GER', y: 17, toolTipMappingName: 'Germany' }, { x: 'UA', y: 2, toolTipMappingName: 'Ukraine' }, { x: 'ES', y: 7, toolTipMappingName: 'Spain' }, { x: 'UZB', y: 4, toolTipMappingName: 'Uzbekistan' }, { x: 'JPN', y: 12, toolTipMappingName: 'Japan' }, { x: 'NL', y: 8, toolTipMappingName: 'NetherLand' }, { x: 'USA', y: 46, toolTipMappingName: 'United States' }];
export let data2 = [{ x: 'GBR', y: 23, toolTipMappingName: 'Great Britain' }, { x: 'CHN', y: 18, toolTipMappingName: 'China' }, { x: 'AUS', y: 11, toolTipMappingName: 'Australia' }, { x: 'RUS', y: 17, toolTipMappingName: 'Russia' }, { x: 'GER', y: 10, toolTipMappingName: 'Germany' }, { x: 'UA', y: 5, toolTipMappingName: 'Ukraine' }, { x: 'ES', y: 4, toolTipMappingName: 'Spain' }, { x: 'UZB', y: 2, toolTipMappingName: 'Uzbekistan' }, { x: 'JPN', y: 8, toolTipMappingName: 'Japan' }, { x: 'NL', y: 7, toolTipMappingName: 'NetherLand' }, { x: 'USA', y: 37, toolTipMappingName: 'United States' }];
export let data3 = [{ x: 'GBR', y: 17, toolTipMappingName: 'Great Britain' }, { x: 'CHN', y: 26, toolTipMappingName: 'China' }, { x: 'AUS', y: 10, toolTipMappingName: 'Australia' }, { x: 'RUS', y: 20, toolTipMappingName: 'Russia' }, { x: 'GER', y: 15, toolTipMappingName: 'Germany' }, { x: 'UA', y: 24, toolTipMappingName: 'Ukraine' }, { x: 'ES', y: 6, toolTipMappingName: 'Spain' }, { x: 'UZB', y: 7, toolTipMappingName: 'Uzbekistan' }, { x: 'JPN', y: 8, toolTipMappingName: 'Japan' }, { x: 'NL', y: 4, toolTipMappingName: 'NetherLand' }, { x: 'USA', y: 38, toolTipMappingName: 'United States' }];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const DoctorDashboard = () => {
    return (
        <div class="content">
    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Dashboard </a></li>
                    <li className="breadcrumb-item">
      <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
    </li>
                    <li class="breadcrumb-item active">Doctor Dashboard</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="good-morning-blk">
        <div class="row">
            <div class="col-md-6">
                <div class="morning-user">
                    <h2>Good Morning, <span>Tushar Joshi</span></h2>
                    <p>Have a nice day at work</p>
                </div>
            </div>
            <div class="col-md-6 position-blk">
                <div class="morning-img">
                <img src={morningimg01} alt/>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="dash-widget">
                <div class="dash-boxs comman-flex-center">
                    <img src={calendar} alt/>
                </div>
                <div class="dash-content dash-count">
                    <h4>Appointments</h4>
                    <h2><span class="counter-up">250</span></h2>
                    <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>40%</span> vs last month</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="dash-widget">
                <div class="dash-boxs comman-flex-center">
                    <img src={profile} alt/>
                </div>
                <div class="dash-content dash-count">
                    <h4>New Patients</h4>
                    <h2><span class="counter-up">140</span></h2>
                    <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>20%</span> vs last month</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="dash-widget">
                <div class="dash-boxs comman-flex-center">
                <img src={profile} alt/>
                </div>
                <div class="dash-content dash-count">
                    <h4>Old Patients</h4>
                    <h2><span class="counter-up">56</span></h2>
                    <p><span class="negative-view"><i class="feather-arrow-down-right me-1"></i>15%</span> vs last month</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="dash-widget">
                <div class="dash-boxs comman-flex-center">
                <img src={profile} alt/>
                </div>
                <div class="dash-content dash-count">
                    <h4>Total Case Record</h4>
                    <h2><span class="counter-up"> 20</span></h2>
                    <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>30%</span> vs last month</p>
                </div>
            </div>
        </div>
    </div>
   
    <div class="row">
        <div class="col-12 col-md-12 col-lg-6 col-xl-9">
            <div class="card">
                <div class="card-body">
                    <div class="chart-title patient-visit">
                        <h4>Patient Visit by Gender</h4>
                        <div>
                            <ul class="nav chat-user-total">
                                <li><i class="fa fa-circle current-users" aria-hidden="true"></i>Male 75%</li>
                                <li><i class="fa fa-circle old-users" aria-hidden="true"></i> Female 25%</li>
                            </ul>
                        </div>
                        <div class="input-block mb-0">
                            <select class="form-control select">
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                            </select>
                        </div>
                    </div>
                    <div id="patient-chart">
                    <div className='control-pane'>
            <div className='control-section'>
                <ChartComponent 
                    id='patient-chart' 
                    style={{ textAlign: "center" }} 
                    legendSettings={{ enableHighlight: true }} 
                    primaryXAxis={{ valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }} 
                    primaryYAxis={{ title: 'Number of Visits', majorTickLines: { width: 0 }, lineStyle: { width: 0 } }} 
                    chartArea={{ border: { width: 0 } }} 
                    tooltip={{ enable: true, header: "<b>${point.tooltip}</b>", shared: true }} 
                    title='Patient Visit by Gender'>
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel, Highlight]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective 
                            dataSource={malePatientData} 
                            tooltipMappingName='toolTipMappingName' 
                            xName='x' 
                            yName='y' 
                            name='Male' 
                            type='Column' 
                            columnSpacing={0.1} 
                        />
                        <SeriesDirective 
                            dataSource={femalePatientData} 
                            tooltipMappingName='toolTipMappingName' 
                            xName='x' 
                            yName='y' 
                            name='Female' 
                            type='Column' 
                            columnSpacing={0.1} 
                        />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
            <div class="card">
                <div class="card-body">
                    <div class="chart-title">
                        <h4>Patient by Department</h4>
                    </div>
                    <div id="donut-chart-dash" class="chart-user-icon">
                    <div className='control-pane'>
            <div className='control-section'>
                <AccumulationChartComponent 
                    id='department-pie-chart' 
                    legendSettings={{ visible: true }} 
                    tooltip={{ enable: true, format: "${point.x} : <b>${point.y}%</b>" }} 
                    title='Patient Distribution by Department'>
                    <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective 
                            dataSource={departmentData} 
                            xName='x' 
                            yName='y' 
                            dataLabel={{ visible: true, name: 'text', position: 'Outside', font: { fontWeight: '600' } }} 
                            radius='70%' 
                            explode={true} 
                            explodeOffset='10%' 
                            explodeIndex={0}
                        />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>
        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <div class="row">
        <div class="col-12 col-md-12 col-xl-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title mb-0">Recent Patients</h4>
                </div>
                <div class="card-body p-0 table-dash">
                    <div class="table-responsive">
                        <table class="table mb-0 border-0 datatable custom-table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Patient name</th>
                                    <th>Age</th>
                                    <th>Date of Birth</th>
                                    <th>Diagnosis</th>
                                    <th>Triage Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>R00001</td>
                                    <td>Ben Nevis</td>
                                    <td>45</td>
                                    <td>02.07.1977</td>
                                    <td>Flu</td>
                                    <td>
                                        <span class="badge rounded-pill bg-danger">Critical</span>
                                    </td>
                                    <td class="text-end">
                                        <a href="#" class="btn btn-outline-primary btn-sm"><i class="feather-eye me-1"></i> View</a>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="col-12 col-md-12 col-lg-12 col-xl-7">
      <div class="card">
      <div class="card-body">
          <div class="chart-title patient-visit">
            <h4>Activity Chart</h4>
            <div>
              <ul class="nav chat-user-total">
                <li><i class="fa fa-circle low-users" aria-hidden="true"></i>Low</li>
                <li><i class="fa fa-circle current-users" aria-hidden="true"></i> High</li>
              </ul>
            </div>
            <div class="input-block mb-0">
              <select class="form-control select">
                <option>This Week</option>
                <option>Last Week</option>
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
          </div>
          <div id="activity-chart">
          <ChartComponent
              primaryXAxis={{
                valueType: 'Category',
                labelIntersectAction: 'Rotate45',
                title: 'Month',
              }}
              primaryYAxis={{
                title: 'Number of Activities',
                labelFormat: '{value}',
              }}
              title="Doctor High and Low Activities per Month"
              tooltip={{ enable: true }}
            >
              <Inject services={[LineSeries, Category, Legend, Tooltip]} />
              <SeriesCollectionDirective>
                <SeriesDirective
                  dataSource={doctorActivityData}
                  xName="month"
                  yName="high"
                  name="High Activity"
                  type="Line"
                  marker={{ visible: true, width: 10, height: 10 }}
                />
                <SeriesDirective
                  dataSource={doctorActivityData}
                  xName="month"
                  yName="low"
                  name="Low Activity"
                  type="Line"
                  marker={{ visible: true, width: 10, height: 10 }}
                />
              </SeriesCollectionDirective>
            </ChartComponent>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
      <div class="card">
        <div class="card-body">
          <div id="radial-patients">
          <AccumulationChartComponent 
                    id='department-pie-chart1' 
                    legendSettings={{ visible: true }} 
                    tooltip={{ enable: true, format: "${point.x} : <b>${point.y}%</b>" }} 
                    title='New Vs Old Patient'>
                    <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective 
                            dataSource={data} 
                            xName='x' 
                            yName='y' 
                            dataLabel={{ visible: true, name: 'text', position: 'Outside', font: { fontWeight: '600' } }} 
                            radius='70%' 
                            explode={true} 
                            explodeOffset='10%' 
                            explodeIndex={0}
                        />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-12 col-lg-6 col-xl-2 d-flex">
      <div class="struct-point">
        <div class="card patient-structure">
          <div class="card-body">
            <h5>New Patients</h5>
            <h3>56<span class="status-green">
                <img src={sort} alt="Increase Icon" class="me-1"/>
                60%</span></h3>
          </div>
        </div>
        <div class="card patient-structure">
          <div class="card-body">
            <h5>Old Patients</h5>
            <h3>35<span class="status-pink">
            <img src={sort1} alt="Increase Icon" class="me-1"/>
                -20%</span></h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
   
    <div class="row">
      <div class="col-12 col-md-12 col-xl-5 flex">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title d-inline-block">Recent Appointments</h4>
            <a href="appointments.html" class="patient-views float-end">Show all</a>
          </div>
          <div class="card-body p-0 table-dash">
            <div class="table-responsive">
              <table class="table mb-0 border-0 custom-table">
                <tbody>
                  <tr>
                    <td class="table-image appoint-doctor">
                      <img width="28" height="28" class="rounded-circle" src={user} alt="Doctor Image"/>
                      <h2>Tushar Joshi</h2>
                    </td>
                    <td class="appoint-time text-center">
                      <h6>Today 5:40 PM</h6>
                      <span>Typoid Fever</span>
                    </td>
                    <td>
                    <button class="check-point status-green me-1"><FaCheckSquare  size={24}/></button>
                    <button class="check-point status-pink"><MdOutlineCancel size={24} /></button>
                    </td>
                  </tr>
                  <tr>
                    <td class="table-image appoint-doctor">
                    <img width="28" height="28" class="rounded-circle" src={user} alt="Doctor Image"/>
                    <h2>Tushar Joshi</h2>
                    </td>
                    <td class="appoint-time text-center">
                      <h6>Today 5:40 PM</h6>
                      <span>Typoid Fever</span>
                    </td>
                    <td>
                    <button class="check-point status-green me-1"><FaCheckSquare  size={24}/></button>
                    <button class="check-point status-pink"><MdOutlineCancel size={24} /></button>
                    </td>
                  </tr>
                  <tr>
                    <td class="table-image appoint-doctor">
                    <img width="28" height="28" class="rounded-circle" src={user} alt="Doctor Image"/>
                    <h2>Tushar Joshi</h2>
                    </td>
                    <td class="appoint-time text-center">
                      <h6>Today 5:40 PM</h6>
                      <span>Typoid Fever</span>
                    </td>
                    <td>
                    <button class="check-point status-green me-1"><FaCheckSquare  size={24}/></button>
                    <button class="check-point status-pink"><MdOutlineCancel size={24} /></button>
                    </td>
                  </tr>
                  <tr>
                    <td class="table-image appoint-doctor">
                    <img width="28" height="28" class="rounded-circle" src={user} alt="Doctor Image"/>
                    <h2>Tushar Joshi</h2>
                    </td>
                    <td class="appoint-time text-center">
                      <h6>Today 5:40 PM</h6>
                      <span>Typoid Fever</span>
                    </td>
                    <td>
                      <button class="check-point status-green me-1"><FaCheckSquare  size={24}/></button>
                      <button class="check-point status-pink"><MdOutlineCancel size={24} /></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </div>
      <div className="col-12 col-md-12 col-xl-2 flex">
      <div class="card">
                <div className="circle-bar circle-bar2">
                    <div className="circle-graph2 mt-5 d-flex justify-content-center align-items-center" data-percent="66">
                        
                            <img src={timer} alt="Timer Icon" />
                       
                    </div>
                </div>
                <div className="main-limit text-center mt-5">
                    <p>Next Appointment in</p>
                    <h4>02h:12m</h4>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-12 col-xl-5 d-flex">
            <div className="card flex-fill comman-shadow">
                <div className="card-header">
                    <h4 className="card-title d-inline-block">Recent Appointments</h4>
                    <a href="appointments.html" className="patient-views float-end">Show all</a>
                </div>
                <div className="card-body">
                    {/* Appointment Time: 08:00 */}
                    <div className="teaching-card">
                        <ul className="steps-history">
                            <li>08:00</li>
                        </ul>
                        <ul className="activity-feed">
                            <li className="feed-item d-flex align-items-center">
                                <div className="dolor-activity hide-activity">
                                    <ul className="doctor-date-list mb-2">
                                        <li className="stick-line">
                                            <i className="fas fa-circle me-2"></i>08:00 <span>Parth Joshi</span>
                                        </li>
                                        <li className="stick-line">
                                            <i className="fas fa-circle me-2"></i>08:00 <span>bhavik patel</span>
                                        </li>
                                        <li className="dropdown ongoing-blk">
                                            <a href="#" className="dropdown-toggle active-doctor" data-bs-toggle="dropdown">
                                                <i className="fas fa-circle me-2 active-circles"></i>08:00 <span>bhavik patel</span>
                                                <span className="ongoing-drapt">Ongoing <i className="feather-chevron-down ms-2"></i></span>
                                            </a>
                                            <ul className="doctor-sub-list dropdown-menu">
                                                <li className="patient-new-list dropdown-item">
                                                    Patient<span>parth</span>
                                                    <a href="javascript:;" className="new-dot status-green">
                                                        <i className="fas fa-circle me-1 fa-2xs"></i>New
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    Time<span>8:30 - 9:00 (30min)</span>
                                                </li>
                                                <li className="schedule-blk mb-0 pt-2 dropdown-item">
                                                    <ul className="nav schedule-time">
                                                        <li><a href="javascript:;"><img src="assets/img/icons/trash.svg" alt="Trash Icon" /></a></li>
                                                        <li><a href="javascript:;"><img src="assets/img/icons/profile.svg" alt="Profile Icon" /></a></li>
                                                        <li><a href="javascript:;"><img src="assets/img/icons/edit.svg" alt="Edit Icon" /></a></li>
                                                    </ul>
                                                    <a className="btn btn-primary appoint-start">Start Appointment</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Appointment Time: 09:00 */}
                    <div className="teaching-card">
                        <ul className="steps-history">
                            <li>09:00</li>
                        </ul>
                        <ul className="activity-feed">
                            <li className="feed-item d-flex align-items-center">
                                <div className="dolor-activity">
                                    <ul className="doctor-date-list mb-2">
                                        <li>
                                            <i className="fas fa-circle me-2"></i>09:00 <span>mayur patel</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle me-2"></i>09:20 <span>Bhavik Rupapara</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle me-2"></i>09:40 <span>Jenny Smith</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Appointment Time: 10:00 */}
                    <div className="teaching-card">
                        <ul className="steps-history">
                            <li>10:00</li>
                        </ul>
                        <ul className="activity-feed">
                            <li className="feed-item d-flex align-items-center">
                                <div className="dolor-activity">
                                    <ul className="doctor-date-list mb-2">
                                        <li>
                                            <i className="fas fa-circle me-2"></i>10:00 <span>mayur patel</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle me-2"></i>10:30 <span>Bhavik Rupapara</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Appointment Time: 11:00 */}
                    <div className="teaching-card">
                        <ul className="steps-history">
                            <li>11:00</li>
                        </ul>
                        <ul className="activity-feed">
                            <li className="feed-item d-flex align-items-center">
                                <div className="dolor-activity">
                                    <ul className="doctor-date-list mb-2">
                                        <li>
                                            <i className="fas fa-circle me-2"></i>11:00 <span>mayur patel</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle me-2"></i>11:30 <span>Bhavik Rupapara</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>



</div>

    );
}

export default DoctorDashboard;