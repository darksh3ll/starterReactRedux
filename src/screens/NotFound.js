import React from 'react';
import "../assets/notFound.css"
import {Link} from 'react-router-dom'


const NotFound = () => {
  return (
    <div className="container">
      <h1>404</h1>
      <p>Oops! Something is wrong.</p>
      <Link to="/"><p>o back in initial page, is better</p></Link>
    </div>
  );
};

export default NotFound;
