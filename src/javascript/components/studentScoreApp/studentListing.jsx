import underscore from 'underscore';
import React from 'react';
import { getClassSet } from '../../utils/dashboardUtil';

export default class StudentListing extends React.Component {
  navigateToDetails(student) {
    this.props.history.push({
      pathname: '/studentDetails',
      state: { student },
    });
  }

  render() {
    const { studentData } = this.props;
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
                          const total = (student.marks.english + student.marks.hindi + student.marks.mathematics),
                                percentage = parseInt(total / 3, 10),
                                listClass = getClassSet({
                                    'clearfix tableBody': true,
                                    redBg: percentage < 35,
                                });
                              return (
                                <li key={key} className={listClass}>
                                  <div className="dataCell">
                                    <button
                                      className="cursorPointer dataCellButton"
                                      onClick={this.navigateToDetails.bind(this, student)}
                                    >
                                    {student.firstName}
                                    </button>
                                  </div>
                                  <div className="dataCell">{student.lastName}</div>
                                  <div className="dataCell">{`${percentage}%` }</div>
                                </li>
                              );
                            })
                          }
                      </ul>
                    : <p>no data</p>
                }
      </div>
    );
  }
}
