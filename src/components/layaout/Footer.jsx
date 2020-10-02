import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-dark py-5">
      <div className="container d-flex">
        <Link
          to="https://www.freepik.es/fotos/fiesta"
          className="text-muted mr-4"
        >
          ©
        </Link>
        <Link
          to="https://www.freepik.es/fotos/fiesta"
          className="text-muted mr-4"
        >
          www.freepik.es
        </Link>
      </div>
    </div>
  );
};

export default Footer;
