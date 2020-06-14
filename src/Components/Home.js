import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Home() {

    return (
      <div>
        <section className="container">
          <h1 className="display-1 text-center">IRON BEERS WITH REACT</h1>
        </section>
        <section className="container">
          <div className="row">
          <Link to="/beers"><div className="card shadow my-4">
              <img
                className="card-img-top img-fluid"
                src="../../images/christin-hume-08tX2fsuSLg-unsplash.jpg"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  <h4 className="display-4 text-center">All Beers</h4>
                </p>
              </div>
            </div></Link>
            
            <Link to="/random"><div className="card shadow my-4">
              <img
                className="card-img-top"
                src="../../images/radovan-XDW56oKSCHw-unsplash.jpg"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  <h4 className="display-4 text-center">Random Beer</h4>
                </p>
              </div>
            </div></Link>

           <Link to="/new"> <div className="card shadow my-4">
              <img
                className="card-img-top"
                src="../../images/radovan-46Yad80Ynp4-unsplash.jpg"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  <h4 className="display-4 text-center">New Beer</h4>
                </p>
              </div>
            </div>
            </Link>
          </div>
        </section>
      </div>
    );
}

export default Home;
