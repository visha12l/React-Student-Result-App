import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './javascript/components/Home';
import About from './javascript/components/About';
import SelectComponent from './javascript/components/shared/selectList';
// CSS
import './css/style.css';

ReactDom.render((
   <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
   </Router>
), document.getElementById('app'));
