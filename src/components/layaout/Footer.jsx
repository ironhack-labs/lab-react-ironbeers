import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="d-flex">
      <Link to="https://www.freepik.es/fotos/fiesta" className="text-muted">
        www.freepik.es
      </Link>
    </div>
  );
};

export default Footer;
