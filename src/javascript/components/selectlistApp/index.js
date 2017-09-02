import React from 'react';
import { Link } from 'react-router-dom';
import SelectComponent from '../shared/selectList.js';
import appConstants from '../../app-constants/appConstants';

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countryList : appConstants.country,
            selectListStatus: false,
        };
        this.closeSelectList = this.closeSelectList.bind(this);
    }

    openSelectList () {
        this.setState({
            selectListStatus: true,
        });
    }

    closeSelectList () {
        this.setState({
            selectListStatus: !this.state.selectListStatus,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="topwrap clearfix">
                    <h1 className="pull-left">Select List  App!</h1>
                    <Link className="pull-right" to='/'>go to Home Page</Link>
                </div>
                <div>
                    <a onClick={this.openSelectList.bind(this)}>open select list Component</a>
                </div>
                {this.state.selectListStatus &&
                    <SelectComponent placeholder='select your country' closeSelectList={this.closeSelectList} listData={this.state.countryList} selectListName='COUNTRY' />
                }
            </div>
        );
    }
}
