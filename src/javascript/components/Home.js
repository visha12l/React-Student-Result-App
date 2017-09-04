import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>  {
    return (
        <div className="container">
            <h1>Welcome</h1>
            <p>Select the app</p>
            <Link to='/selectList'> selectList app</Link>
        </div>
    );
};
export default Home;
