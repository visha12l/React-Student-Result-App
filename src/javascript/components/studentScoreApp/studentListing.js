import React from 'react';
import { getClassSet } from '../../utils/dashboardUtil';
import { Link } from 'react-router-dom';
var underscore = require('underscore');

export default class StudentListing extends React.Component {

    constructor() {
        super();
        this.showDetails = this.showDetails.bind(this);
    }

    showDetails(student) {
        window.location.hash = `/studentDetails?state = ${JSON.stringify(student)}`;
    }

    render() {
        let {studentData} = this.props;
        return (
            <div>
                {studentData && studentData.length
                    ? <ul className="customDataTable">
                        <li className="clearfix">
                            <div className="dataCell">FirstName</div>
                            <div className="dataCell">LastName</div>
                            <div className="dataCell">Percentage</div>
                        </li>
                        {underscore.map(studentData, (student, key) => {
                            let total = (student.marks.english + student.marks.hindi + student.marks.mathematics);
                            let percentage = parseInt(total / 3, 10);
                            let listClass = getClassSet({
                                'clearfix tableBody': true,
                                'redBg': percentage < 35
                            });
                            return(
                                <li key={key} className={listClass}>
                                    <div className="dataCell cursorPointer" onClick={this.showDetails.bind(this, student)}>
                                        {student.firstName}
                                    </div>
                                    <div className="dataCell">{student.lastName}</div>
                                    <div className="dataCell">{`${percentage}%` }</div>
                                </li>
                            );
                        })}
                      </ul>
                    : <p>no data</p>
                }
            </div>
        );
    }
};
