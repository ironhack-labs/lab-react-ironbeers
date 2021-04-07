import React from 'react';
import { Link } from 'react-router-dom';
import imgAllBeers from '../../assets/beers.png';
import './Section.css';

const Section = ({ to, title, description, src }) => {
  return (
    <div className="justify-content-center">
      <Link to={to}>
        <img className="imgSection" src={src} alt="Allbeers" />
        <div className="container">
          <h3 className="titleSection">{title}</h3>
          <p className="pSection">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Section;
