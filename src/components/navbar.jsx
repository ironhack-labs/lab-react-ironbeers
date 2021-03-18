import { Link } from 'react-router-dom';
import React from 'react';

const navbar = () => {
  return (
   <div> 
<div className="fixed-top ">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h5 className="text-white h4">Check this out!</h5>
      <span className="text-muted"><Link to={'/'}>Home</Link></span>
      <br/>
      <span className="text-muted"><Link to={'/all-beers'}>All-Beer</Link></span>
      <br/>
      <span className="text-muted"><Link to={'/new-beer'}>Random-Beer</Link></span>
    </div>
  </div>
 
  <nav className="navbar navbar-dark bg-primary ">
    <button className="fas fa-beer text-center color:white" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">

      <span className="fas fa-beer"></span>
    </button>
  </nav>

</div>

</div>
  );
};

export default navbar;
