import React from 'react';
import beersImg from './../../assets/beers.png'

const Home = () => {
  return (
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-sm-8 align-self-center">
          <div className="row">
            <div className="col-sm-12 bg-primary">
              <img src={beersImg} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dicta quaerat unde nobis magni ratione molestiae? Incidunt eius earum cupiditate.</p>
            </div>
            <div className="col-sm-12 bg-primary">
              <img src={beersImg} alt="" />
            </div>
            <div className="col-sm-12 bg-primary">
              <img src={beersImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
