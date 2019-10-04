import React, { Component } from 'react'
import {Link} from  'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
              <div className="stretch">
                  <div>
                      <img src="images/beers.png" alt="beerimage"/>
                  </div>
                  <div>
                  <Link to='/showbeers' >
                      <h1>All beers</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </Link>
                  </div>
              </div>
              <div className="stretch">
                  <div>
                      <img src="images/random-beer.png" alt="beerimage"/>
                  </div>
                  <div>
                      <h1>Random beers</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
              </div>
              <div className="stretch">
                  <div>
                      <img src="images/new-beer.png" alt="beerimage"/>
                  </div>
                  <div>
                      <h1>Add new beers</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
              </div>
            </React.Fragment>
        )
    }
}
