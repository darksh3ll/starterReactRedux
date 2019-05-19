import React from 'react';
import "../assets/notFound.css"
import {Link} from 'react-router-dom'


const NotFound = () => {
  return (
    <div className="container">
      <h1 className="title">404</h1>
      <Link to="/"><p>Retour a l'acceuil</p></Link>
    </div>
  );
};

export default NotFound;
