import React from "react";
import {Link} from 'react-router-dom';


const home = () => {
  return (
    <div className="container">
      <div>
        <div className="card card-w col">
          <img
            src="http://www.sexenio.com.mx//fotos/13041/960x540/13041.jpg"
            alt="cervezas"
          />
          <div className="card-body">
            <h3 className="card-title">Beers</h3>
            <p className="card-text">Todas las cervezas...</p>
            <Link to="/beerlist" className="btn btn-primary">
              Ir a Todas las cervezas
            </Link>
          </div>
        </div>
        <div className="card card-w col">
          <img
            src="https://img.grouponcdn.com/iam/36A9VudcVPi3sKPVHhyMtKBPY5NR/36-2048x1229/v1/c700x420.jpg"
            alt="cervezas"
          />
          <div className="card-body">
            <h3 className="card-title">Random-beer</h3>
            <p className="card-text">Cervezas aleatorio...</p>
            <Link to="beerrandomlist" className="btn btn-primary">
              Ir a Cerveza aleatoria
            </Link>
          </div>
        </div>
        <div className="card card-w col">
          <img
            src="https://bombanoise.com/wp-content/uploads/2018/07/Cerveza-1.jpg"
            alt="cervezas"
          />
          <div className="card-body">
            <h3 className="card-title">New-beer</h3>
            <p className="card-text">Agrega una nueva cerveza...</p>
            <Link to="" className="btn btn-primary">
              Ir a Agregar una nueva cerveza
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
