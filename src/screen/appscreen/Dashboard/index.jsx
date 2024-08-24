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
import { ChartComponent, SeriesCollectionDirective, 
    AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,  AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip ,
    SeriesDirective, Inject, ChartTheme, Legend, Category, Tooltip, ColumnSeries, ILoadedEventArgs, DataLabel, Highlight } from '@syncfusion/ej2-react-charts';
import { EmitType } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
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
const Dashboard = () => {

    const loaded = (args) => {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    const load = (args) => {
        let selectedTheme 
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        if (selectedTheme === 'highcontrast') {
            args.chart.series[0].marker.dataLabel.font.color = '#000000';
            args.chart.series[1].marker.dataLabel.font.color = '#000000';
            args.chart.series[2].marker.dataLabel.font.color = '#000000';
        }
    };
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
                    <li class="breadcrumb-item active">Admin Dashboard</li>
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
        <div class="col-12 col-md-12 col-xl-4">
            <div class="card top-departments">
                <div class="card-header">
                    <h4 class="card-title mb-0">Top Departments</h4>
                </div>
                <div class="card-body">
                    <div class="activity-top">
                        <div class="activity-boxs comman-flex-center">
                            <img src= {depicon01}/>
                        </div> 
                        <div class="departments-list">
                            <h4>General Physician</h4>
                            <p>35%</p>
                        </div>
                    </div>
                    <div class="activity-top">
                        <div class="activity-boxs comman-flex-center">
                            <img src= {depicon02} alt/>
                        </div>
                        <div class="departments-list">
                            <h4>Dentist</h4>
                            <p>24%</p>
                        </div>
                    </div>
                    <div class="activity-top">
                        <div class="activity-boxs comman-flex-center">
                        <img src= {depicon03} alt/>
                        </div>
                        <div class="departments-list">
                            <h4>ENT</h4>
                            <p>10%</p>
                        </div>
                    </div>
                    <div class="activity-top">
                        <div class="activity-boxs comman-flex-center">
                        <img src= {depicon04} alt/>
                        </div>
                        <div class="departments-list">
                            <h4>Cardiologist</h4>
                            <p>15%</p>
                        </div>
                    </div>
                    <div class="activity-top mb-0">
                        <div class="activity-boxs comman-flex-center">
                        <img src= {depicon05} alt/>
                        </div>
                        <div class="departments-list">
                            <h4>Opthomology</h4>
                            <p>20%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-12 col-xl-8">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title d-inline-block">Upcoming Appointments</h4> 
                    <a href="appointments.html" class="patient-views float-end">Show all</a>
                </div>
                <div class="card-body p-0 table-dash">
                    <div class="table-responsive">
                        <table class="table mb-0 border-0 datatable custom-table">
                            <thead>
                                <tr>
                                    <th>
                                        <div class="form-check check-tables">
                                            <input class="form-check-input" type="checkbox" value="something"/>
                                        </div>
                                    </th>
                                    <th>No</th>
                                    <th>Patient name</th>
                                    <th>Doctor</th>
                                    <th>Time</th>
                                    <th>Disease</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="form-check check-tables">
                                            <input class="form-check-input" type="checkbox" value="something"/>
                                        </div>
                                    </td>
                                    <td>R00001</td>
                                    <td>Bhavik Rupapara</td>
                                    <td class="table-image appoint-doctor">
                                    <img width="28" height="28" class="rounded-circle" src={user} alt/>
                                        <h2>Dr.Tushar Joshi</h2>
                                    </td>
                                    <td class="appoint-time"><span>12.05.2022 at </span>7.00 PM</td>
                                    <td>Ear Pain</td>
                                    <td class="text-end">
                                        <a href="#" class="btn btn-outline-primary btn-sm"><i class="feather-eye me-1"></i> View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check check-tables">
                                            <input class="form-check-input" type="checkbox" value="something"/>
                                        </div>
                                    </td>
                                    <td>R00001</td>
                                    <td>Bhavik Rupapara</td>
                                    <td class="table-image appoint-doctor">
                                    <img width="28" height="28" class="rounded-circle" src={user} alt/>
                                        <h2>Dr.Tushar Joshi</h2>
                                    </td>
                                    <td class="appoint-time"><span>12.05.2022 at </span>7.00 PM</td>
                                    <td>Ear Pain</td>
                                    <td class="text-end">
                                        <a href="#" class="btn btn-outline-primary btn-sm"><i class="feather-eye me-1"></i> View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check check-tables">
                                            <input class="form-check-input" type="checkbox" value="something"/>
                                        </div>
                                    </td>
                                    <td>R00001</td>
                                    <td>Bhavik Rupapara</td>
                                    <td class="table-image appoint-doctor">
                                    <img width="28" height="28" class="rounded-circle" src={user} alt/>
                                        <h2>Dr.Tushar Joshi</h2>
                                    </td>
                                    <td class="appoint-time"><span>12.05.2022 at </span>7.00 PM</td>
                                    <td>Ear Pain</td>
                                    <td class="text-end">
                                        <a href="#" class="btn btn-outline-primary btn-sm"><i class="feather-eye me-1"></i> View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check check-tables">
                                            <input class="form-check-input" type="checkbox" value="something"/>
                                        </div>
                                    </td>
                                    <td>R00001</td>
                                    <td>Bhavik Rupapara</td>
                                    <td class="table-image appoint-doctor">
                                    <img width="28" height="28" class="rounded-circle" src={user} alt/>
                                    <h2>Dr.Tushar Joshi</h2>
                                        
                                    </td>
                                    <td class="appoint-time"><span>12.05.2022 at </span>7.00 PM</td>
                                    <td>Ear Pain</td>
                                    <td class="text-end">
                                        <a href="#" class="btn btn-outline-primary btn-sm"><i class="feather-eye me-1"></i> View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check check-tables">
                                            <input class="form-check-input" type="checkbox" value="something"/>
                                        </div>
                                    </td>
                                    <td>R00001</td>
                                    <td>Bhavik Rupapara</td>
                                    <td class="table-image appoint-doctor">
                                    <img width="28" height="28" class="rounded-circle" src={user} alt/>
                                    <h2>Dr.Tushar Joshi</h2>
                                    </td>
                                    <td class="appoint-time"><span>12.05.2022 at </span>7.00 PM</td>
                                    <td>Ear Pain</td>
                                    <td class="text-end">
                                        <a href="#" class="btn btn-outline-primary btn-sm"><i class="feather-eye me-1"></i> View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check check-tables">
                                            <input class="form-check-input" type="checkbox" value="something"/>
                                        </div>
                                    </td>
                                    <td>R00001</td>
                                    <td>Bhavik Rupapara</td>
                                    <td class="table-image appoint-doctor">
                                    <img width="28" height="28" class="rounded-circle" src={user} alt/>
                                    <h2>Dr.Tushar Joshi</h2>
                                    </td>
                                    <td class="appoint-time"><span>12.05.2022 at </span>7.00 PM</td>
                                    <td>Ear Pain</td>
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
                                    <td>Bhavik Rupapara</td>
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
                                <tr>
                                    <td>R00001</td>
                                    <td>Bhavik Rupapara</td>
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
                                <tr>
                                    <td>R00001</td>
                                    <td>Bhavik Rupapara</td>
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
                                <tr>
                                    <td>R00001</td>
                                    <td>Bhavik Rupapara</td>
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
</div>

    );
}

export default Dashboard;