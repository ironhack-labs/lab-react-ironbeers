import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Home extends Component{
  constructor(props){
    super(props);
  }
  

  render(){
    return (
      <div className="home container-fluid">
        <div className='row'>
          <div className='col-12 col-md-4'>
            <Link to='/all'>
              <div className="home-category card">
                <div className='home-category-img' id='all'></div>
                <div className="card-body">
                  <h5 className="card-title">All Beers</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className='col-12 col-md-4'>
            <Link to='/random'>
              <div className="home-category card">
                <div className='home-category-img' id='random'></div>
                <div className="card-body">
                  <h5 className="card-title">Random Beer</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className='col-12 col-md-4'>
            <Link to='/new'>
              <div className="home-category card">
                <div className='home-category-img' id='new'></div>
                <div className="card-body">
                  <h5 className="card-title">New Beer</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* <ListBeer /> */}
        {/* <RandomBeer /> */}
        {/* <NewBeer /> */}
      </div>
    );
  }
}

export default Home;

      