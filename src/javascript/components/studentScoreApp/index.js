import React from 'react';
var underscore = require('underscore');
import { Link } from 'react-router-dom';
import BreadCrumb from '../shared/breadcrumb.js';
import appConstants from '../../app-constants/appConstants.js';
import StudentListing from './studentListing.js';

export default class Index extends React.Component {
    constructor() {
        super();
        this.state = {
          studentData: [
                  {
                    firstName: 'vishal',
                    lastName: 'shinde',
                    marks: {
                      english: 70,
                      hindi: 56
                    }
                  },
                  {
                    firstName: 'parth',
                    lastName: 'shah',
                    marks: {
                      english: 10,
                      hindi: 50
                    }
                  },
                  {
                    firstName: 'ankit',
                    lastName: 'rao',
                    marks: {
                      english: 70,
                      hindi: 20
                    }
                  },
                  {
                    firstName: 'prasad',
                    lastName: 'kulkarni',
                    marks: {
                      english: 70,
                      hindi: 30
                    }
                  }
              ],
        };
    }
    render() {
        debugger;
        return (
            <div className="container">
                <div className="topwrap clearfix">
                    <BreadCrumb link={appConstants.breadCrumb.studentLinks}/>
                </div>
                    <StudentListing studentData={this.state.studentData} />
            </div>
        )
    }
};
