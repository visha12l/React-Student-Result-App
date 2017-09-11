import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from './shared/breadcrumb.js';
import appConstants from '../app-constants/appConstants.js';

const Home = () =>  {
    return (
        <div className="container">
            <div className="topwrap clearfix">
                <BreadCrumb link={appConstants.breadCrumb.getName('link')}/>
            </div>
            <h2>select the app by clicking the above links</h2>
            <div className="loaderOverlay openPopup fullScreenLoader hide">
                <div className="loaderWrap">
                    <p className="loader"></p>
                    <i className="glyphicon glyphicon-search loaderIcon"></i>
                </div>
            </div>
        </div>
    );
};
export default Home;
