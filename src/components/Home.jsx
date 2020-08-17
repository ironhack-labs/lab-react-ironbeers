import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to='/beers' className='text-decoration-none'>
        <section className="card">
          <div className="card-img-top">
            <img src="https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2011/03/featured-yard-house.jpg?w=420&h=316&crop=1" alt="Tap beers" />
          </div>
          <div className="card-body">
            <h2>All Beers</h2>
            <p>Show all beers in the DB</p>
          </div>
        </section>
      </Link>
      <Link to='/random-beer' className='text-decoration-none'>
        <section className="card">
          <div className="card-img-top">
            <img src="https://fh-sites.imgix.net/sites/2207/2012/10/04102206/Brouwerij-t-IJ2.jpg?auto=compress%2Cformat&w=1000&h=1000&fit=max" alt="Beer bottles" />
          </div>
          <div className="card-body">
            <h2>Random Beer</h2>
            <p>Show a totally random beer</p>
          </div>
        </section>
      </Link>
      <Link to='/new-beer' className='text-decoration-none'>
        <section className="card">
          <div className="card-img-top">
            <img src="https://lamplighter-brewing-co.s3.us-east-2.amazonaws.com/2019/09/LBCO_homepage_slide5-min.jpg" alt="Beer barrels" />
          </div>
          <div className="card-body">
            <h2>Create Beer</h2>
            <p>Add a new beer to the DB</p>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default Home;
