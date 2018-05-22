import React from 'react';
import underscore from 'underscore';
import { Link } from 'react-router-dom';
import BreadCrumb from '../shared/breadcrumb';
import appConstants from '../../app-constants/appConstants';
import StudentListing from './studentListing';
import CustomCheckbox from '../shared/customCheckbox';
import CustomSearch from '../shared/customSearch';
import Data from '../../../static/result.json';

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      studentData: Data.results,
      result: [],
    };
    this.searchItem = this.searchItem.bind(this);
  }

  componentDidMount() {
    this.setState({
      result: this.state.studentData,
    });
  }

  searchItem(value) {
    const updatedList = underscore.filter([...this.state.studentData], (student, key) => (student.firstName.toLowerCase().search(value.toLowerCase()) > -1) || (student.lastName.toLowerCase().search(value.toLowerCase()) > -1));
    if (updatedList) {
      this.setState({
        result: updatedList,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="topwrap clearfix">
          <BreadCrumb link={appConstants.breadCrumb.studentLinks} />
        </div>
        <div className="clearfix">
          <div className="pull-left">
            <CustomSearch searchItem={this.searchItem} placeholderText="Student" />
          </div>
          <h2 className="pull-left">Click on student name to check the details</h2>
        </div>
        <StudentListing studentData={this.state.result} history={this.props.history} />
      </div>
    );
  }
}
