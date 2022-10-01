import React from 'react';
import { Link } from 'react-router-dom';

import beersImg1 from './../../assets/beers.png'
import beersImg2 from './../../assets/random-beer.png'
import beersImg3 from './../../assets/new-beer.png'

const HomeScreen = () => {
  return (
    <div class="container text-center">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="row justify-content-center">
            <div className="col-8">
              <Link to="/beers"><img className="img-fluid" src={beersImg1} alt="" /></Link>
              <h2 className='my-3'>All Beer</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dicta quaerat unde nobis magni ratione molestiae? Incidunt eius earum cupiditate.</p>
            </div>
            <div className="col-8">
              <Link to="/random"><img className="img-fluid" src={beersImg2} alt="" /></Link>
              <h2 className='my-3'>Random Bear</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dicta quaerat unde nobis magni ratione molestiae? Incidunt eius earum cupiditate.</p>
            </div>
            <div className="col-8">
              <Link to="/new"><img className="img-fluid" src={beersImg3} alt="" /></Link>
              <h2 className='my-3'>New Beer</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dicta quaerat unde nobis magni ratione molestiae? Incidunt eius earum cupiditate.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
