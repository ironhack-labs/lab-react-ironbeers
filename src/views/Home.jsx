import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src={'../../beerHome.jpg'}
                  data-holder-rendered="true"
                  alt="beer"
                ></img>
                <div className="card-body">
                  <Link to={'/beers'}>
                    {' '}
                    <h2>All Beers</h2>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi iusto voluptatibus accusantium placeat rerum
                    voluptas corrupti distinctio veniam repudiandae consequatur
                    eaque at, autem eum dicta et error libero. Sint, libero.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src={'../../beerHome.jpg'}
                  data-holder-rendered="true"
                  alt="beer"
                ></img>
                <div className="card-body">
                  <Link to={'/random-beer'}>
                    {' '}
                    <h2>Random Beer</h2>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi iusto voluptatibus accusantium placeat rerum
                    voluptas corrupti distinctio veniam repudiandae consequatur
                    eaque at, autem eum dicta et error libero. Sint, libero.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src={'../../beerHome.jpg'}
                  data-holder-rendered="true"
                  alt="beer"
                ></img>
                <div className="card-body">
                  <Link to={'/new-beer'}>
                    <h2>Create a beer</h2>{' '}
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi iusto voluptatibus accusantium placeat rerum
                    voluptas corrupti distinctio veniam repudiandae consequatur
                    eaque at, autem eum dicta et error libero. Sint, libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
