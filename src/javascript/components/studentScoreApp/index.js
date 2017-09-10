import React from 'react';
var underscore = require('underscore');
import { Link } from 'react-router-dom';
import BreadCrumb from '../shared/breadcrumb.js';
import appConstants from '../../app-constants/appConstants.js';
import StudentListing from './studentListing.js';
import CustomCheckbox from '../shared/customCheckbox.js';
import CustomSearch from '../shared/CustomSearch.js';
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
                <CustomSearch searchItem={this.searchItem} />
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
