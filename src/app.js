import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './javascript/components/home.js';
import SelectIndex from './javascript/components/selectlistapp/index.js';
// CSS
import './css/style.css';

ReactDom.render((
   <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/selectList" component={SelectIndex} />
      </div>
   </Router>
), document.getElementById('app'));
