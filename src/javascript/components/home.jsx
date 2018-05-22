import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from './shared/breadcrumb';
import appConstants from '../app-constants/appConstants';

const Home = () => (
  <div className="container">
    <div className="topwrap clearfix">
      <BreadCrumb link={appConstants.breadCrumb.getName('link')} />
    </div>
    <h2>Check student result by clicking the above link</h2>
    <div className="loaderOverlay openPopup fullScreenLoader hide">
      <div className="loaderWrap">
        <p className="loader" />
        <i className="glyphicon glyphicon-search loaderIcon" />
      </div>
    </div>
  </div>
);
export default Home;
