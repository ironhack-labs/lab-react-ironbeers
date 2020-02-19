import React, { Component } from 'react';
import NavBar from '../NavBar'
// import SingleBeer from './SingleBeer'


class RandomBeer extends Component {

    showRandomBeer = () => {
        let randomBeer = this.props.beers[Math.floor(Math.random()*this.props.beers.length)]
        console.log(randomBeer)
        
          return  <div>
          <NavBar />
          {/* <div>{beerDetails.name}</div> */}
          <div className='d-flex justify-content-center'>
          {this.props.ready? <img className='img-fluid w-25 h-25 p-5' src={randomBeer.image_url} alt='' /> : ("Loading....")}
          </div>
          <br></br>
          <div className="d-flex justify-content-around">
          <div>{this.props.ready? (randomBeer.name) : ("")}</div>
          <div className="font-weight-light">{this.props.ready? (randomBeer.attenuation_level) : ("")}</div>
          </div>
          <br></br>
          <div className="d-flex justify-content-around">
          <div className="font-weight-light">{this.props.ready? (randomBeer.tagline) : ("")}</div>
          <div className="font-weight-bold">{this.props.ready? (randomBeer.first_brewed) : ("")}</div>
          </div>
          <br></br>
          <div className="d-flex justify-content-center">
          <div>{this.props.ready? (randomBeer.description) : ("")}</div>
          </div>
          <br></br>
          <div className="d-flex justify-content-center">
          <div className="font-weight-light">{this.props.ready? (randomBeer.contributed_by) : ("")}</div>
          </div>
      </div>
        
    }
    render() {
        return (
            <div>
            {this.props.ready? (this.showRandomBeer()) : ("Loading....")}
                
            </div>
        );
    }
}

export default RandomBeer;