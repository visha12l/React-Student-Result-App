import React from 'react';
var underscore = require('underscore');
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
            resultStatus: ['fail','pass','first class', 'second class'],
            result: [],
        };
        this.filterList = this.filterList.bind(this);
        this.resetList = this.resetList.bind(this);
        this.searchItem = this.searchItem.bind(this);
    }

    componentWillMount(){
        this.setState({
            result: this.state.studentData,
        });
    }

    searchItem(value) {
        let updatedList = this.state.studentData;
        updatedList = underscore.filter(updatedList, (student, key) => {
          return (student.firstName.toLowerCase().search(value.toLowerCase()) > -1) || (student.lastName.toLowerCase().search(
              value.toLowerCase()) > -1);
        });
        if(updatedList) {
            this.setState({
                result: updatedList
            });
        }
    }

    filterList(status, isChecked) {
        //add filter logic here
    }

    resetList(status, isChecked) {
        //add reset logic here
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
                <div className="hide">
                    {underscore.map(this.state.resultStatus, (status, key) => {
                        return (
                            <CustomCheckbox key={key} status={status} filterList={this.filterList} resetList={this.resetList} />
                        )})
                    }
                </div>
                <StudentListing studentData={this.state.result} />
            </div>
        )
    }
};
