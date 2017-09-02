import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Select the app</p>
        <Link to='/selectList'> selectList app</Link>
      </div>
    );
  }
}
