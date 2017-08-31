import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';

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
