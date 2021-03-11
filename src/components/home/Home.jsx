import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from '../../assets/beers.png';
import randomBeerImg from '../../assets/random-beer.png';
import newBeerImg from '../../assets/new-beer.png';

class Home extends React.Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row mb-3">
          <div className="col-12 col-lg-12">
            <div className="card">
              <img src={beersImg} className="card-img-top" alt="beersImg" />
              <div className="card-body">
                <Link className="fs-2 fw-bold text-decoration-none" to="/beers">Beers</Link>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea optio voluptates, et temporibus beatae praesentium tempore maiores eligendi. Inventore mollitia aspernatur dolore nulla deleniti repellendus repellat vero hic. Et, iste!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-lg-12">
            <div className="card">
              <img
                src={randomBeerImg}
                className="card-img-top"
                alt="randomBeerImg"
              />
              <div className="card-body">
                <Link className="fs-2 fw-bold text-decoration-none" to="/random-beer">Random Beer</Link>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-lg-12">
            <div className="card">
              <img src={newBeerImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <Link className="fs-2 fw-bold text-decoration-none" to="/new-beer">New Beer</Link>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
