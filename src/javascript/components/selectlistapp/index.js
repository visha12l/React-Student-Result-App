import React from 'react';
import { Link } from 'react-router-dom';
import SelectComponent from '../shared/selectList.js';
import appConstants from '../../app-constants/appConstants.js';
import BreadCrumb from '../shared/breadcrumb.js';

export default class SelectIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countryList : appConstants.country,
            selectListStatus: false,
            orgName: 'vishal'
        };
        this.toggleSelectList = this.toggleSelectList.bind(this);
    }

    toggleSelectList () {
        this.setState({
            selectListStatus: !this.state.selectListStatus,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="topwrap clearfix">
                    <BreadCrumb link={appConstants.breadCrumb.selectListLinks}/>
                </div>
                <h1 className="text-center">Select List  App!</h1>
                <div>
                    <a onClick={this.toggleSelectList}>open select list Component</a>
                </div>
                {this.state.selectListStatus &&
                    <SelectComponent placeholder='select your country' toggleSelectList={this.toggleSelectList} listData={this.state.countryList} selectListName='COUNTRY' />
                }
            </div>
        );
    }
}
