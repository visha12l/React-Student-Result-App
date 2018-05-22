import React from 'react';
import BreadCrumb from '../shared/breadcrumb';
import appConstants from '../../app-constants/appConstants';

export default class StudentDetails extends React.Component {
  render() {
    const studentDetails = this.props.history.location.state.student;
    const { marks } = studentDetails;
    const total = marks.english + marks.hindi + marks.mathematics;
    const percentage = parseInt(total / 3, 10);
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
            <div className="dataCell">{marks.english}</div>
            <div className="dataCell">{marks.hindi}</div>
            <div className="dataCell">{marks.mathematics}</div>
            <div className="dataCell">{total}</div>
            <div className="dataCell">{`${percentage}%`}</div>
          </li>
        </ul>
      </div>
    );
  }
}
