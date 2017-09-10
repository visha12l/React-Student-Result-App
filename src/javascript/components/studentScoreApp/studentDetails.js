import React from 'react';
import BreadCrumb from '../shared/breadcrumb.js';
import appConstants from '../../app-constants/appConstants.js';

const StudentDetails = (props) => {
    let studentDetails = props.studentDetails;
    let total = studentDetails.marks.english + studentDetails.marks.hindi + studentDetails.marks.mathematics;
    let percentage = parseInt(total / 3);
    return (
        <div className="container">
            <div className="topwrap clearfix">
                <BreadCrumb link={appConstants.breadCrumb.studentDetailsLink} />
            </div>
            <div>{`${studentDetails.firstName} ${studentDetails.lastName}`}</div>
            <ul className="customDataTable">
                <li className="clearfix">
                    <div className="dataCell">English</div>
                    <div className="dataCell">Hindi</div>
                    <div className="dataCell">Mathematics</div>
                    <div className="dataCell">Total</div>
                    <div className="dataCell">Percentage</div>
                </li>
                <li className="clearfix">
                    <div className="dataCell">{studentDetails.marks.english}</div>
                    <div className="dataCell">{studentDetails.marks.hindi}</div>
                    <div className="dataCell">{studentDetails.marks.mathematics}</div>
                    <div className="dataCell">{total}</div>
                    <div className="dataCell">{`${percentage}%`}</div>
                </li>
              </ul>
        </div>
    );
};
export default StudentDetails;
