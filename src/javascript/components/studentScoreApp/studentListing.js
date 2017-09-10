import React from 'react';
import { getClassSet } from '../../utils/dashboardUtil.js';
import { Link } from 'react-router-dom';
var underscore = require('underscore');
import StudentDetails from './studentDetails.js';

export default class StudentListing extends React.Component {

    constructor() {
        super();
        this.state = {
            studentDetails: '',
        };
        this.getStudentDetails = this.getStudentDetails.bind(this);
    }

    getStudentDetails (student) {
        this.setState({
            studentDetails: student,
        })
    }

    render() {
        return (
            <div>
                {this.props.studentData && this.props.studentData.length
                    ? <ul className="customDataTable">
                        <li className="clearfix">
                            <div className="dataCell">FirstName</div>
                            <div className="dataCell">LastName</div>
                            <div className="dataCell">Percentage</div>
                        </li>
                        {underscore.map(this.props.studentData, (student, key) => {
                            let total = (student.marks.english + student.marks.hindi + student.marks.mathematics);
                            let percentage = parseInt(total / 3);
                            let listClass = getClassSet({
                                'clearfix tableBody': true,
                                'redBg': percentage < 35
                            });
                            return(
                                <li key={key} className={listClass}>
                                    <div className="dataCell cursorPointer" onClick={this.getStudentDetails.bind(this, student)}>{student.firstName}</div>
                                    <div className="dataCell">{student.lastName}</div>
                                    <div className="dataCell">{`${percentage}%` }</div>
                                </li>
                            );
                        })}
                      </ul>
                    : <p>no data</p>
                }
                <div>
                    {this.state.studentDetails
                        ? <StudentDetails studentDetails={this.state.studentDetails} />
                        : null
                    }
                </div>
            </div>
      );
    }
};
