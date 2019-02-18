import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './javascript/components/home';
import SelectIndex from './javascript/components/selectlistapp/index';
import StudentIndex from './javascript/components/studentScoreApp/index';
import ValidationIndex from './javascript/components/userLogin/index';
import StudentDetails from './javascript/components/studentScoreApp/studentDetails';
// CSS
import './css/style.css';

ReactDom.render(
  (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/studentApp" component={StudentIndex} />
        <Route path="/studentDetails" component={StudentDetails} />
      </div>
    </Router>
  ), document.getElementById('app'),
);
