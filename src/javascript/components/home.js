import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
          <h1>WELCOME!</h1>
          <p>select the app</p>
          <Link to='/selectList'>selectList</Link>
      </div>
    );
  }
}
