import React, { Component } from 'react';
import NavBar from '../NavBar'


class SingleBeer extends Component {

    showBeerDetails = () => {
        console.log(this.props.match.params.beername, this.props)
        let theBeer = this.props.beers.find(aBeer => {
          return aBeer.name === this.props.match.params.beername
        })
        console.log(theBeer)
        return theBeer
    }



    render() {
        let beerDetails = this.showBeerDetails();
        console.log(beerDetails)
        return (
            <div>
                <NavBar />
                {/* <div>{beerDetails.name}</div> */}
                <div className='d-flex justify-content-center'>
                {this.props.ready? <img className='img-fluid w-25 h-25 p-5' src={beerDetails.image_url} alt='' /> : ("Loading....")}
                </div>
                <br></br>
                <div className="d-flex justify-content-around">
                <div>{this.props.ready? (beerDetails.name) : ("")}</div>
                <div className="font-weight-light">{this.props.ready? (beerDetails.abv) : ("")}</div>
                </div>
                <br></br>
                <div className="d-flex justify-content-around">
                <div className="font-weight-light">{this.props.ready? (beerDetails.tagline) : ("")}</div>
                <div className="font-weight-bold">{this.props.ready? (beerDetails.first_brewed) : ("")}</div>
                </div>
                <br></br>
                <div className="d-flex justify-content-center">
                <div>{this.props.ready? (beerDetails.description) : ("")}</div>
                </div>
                <br></br>
                <div className="d-flex justify-content-center">
                <div className="font-weight-light">{this.props.ready? (beerDetails.contributed_by) : ("")}</div>
                </div>
            </div>
        );
    }
}

export default SingleBeer;