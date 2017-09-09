import React from 'react';
var underscore = require('underscore');

const StudentListing = (props) => {
    return (
        <div>
            <ul className="studentListing">
                <li className="clearfix">
                    <div className="pull-left firstName">FirstName</div>
                    <div className="pull-left">LastName</div>
                    <div className="pull-left">Percentage</div>
                </li>
                {underscore.map(props.studentData, (student, key) => {
                    return(
                        <li key={key} className="clearfix">
                            <div className="pull-left firstName">{student.firstName}</div>
                            <div className="pull-left">{student.lastName}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default StudentListing;
