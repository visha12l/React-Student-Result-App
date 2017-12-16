import React from 'react';
import BreadCrumb from '../shared/breadcrumb';
import appConstants from '../../app-constants/appConstants';

export default class StudentDetails extends React.Component {

    render() {
        let studentDetails = JSON.parse(this.props.location.search.split('?')[1].split('=')[1]);
        let total = studentDetails.marks.english + studentDetails.marks.hindi + studentDetails.marks.mathematics;
        let percentage = parseInt(total / 3, 10);
        return (
            <div className="container">
                <div className="topwrap clearfix">
                    <BreadCrumb link={appConstants.breadCrumb.studentDetailsLink} />
                </div>
                <div>{`Name :: ${studentDetails.firstName} ${studentDetails.lastName}`}</div>
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
    }
};
