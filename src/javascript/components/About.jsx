import React from 'react';
import { Link } from 'react-router-dom';
export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>About Page!</h1>
        <p>Ipsa vitae dicta voluptatum, consectetur harum, vero sunt magnam impedit eveniet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, optio repudiandae aliquam. Perspiciatis asperiores atque consectetur tenetur consequuntur, temporibus dicta expedita adipisci pariatur.</p>
        <Link to='/'>Home Page</Link>
      </div>
    );
  }
}
