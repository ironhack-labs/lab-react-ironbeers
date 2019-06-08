import React from 'react';
import Header from '../Header';
import BeerService from '../services/BeerService';
import { Link } from 'react-router-dom';

class Beers extends React.Component {

  state={
    beers:[]
  }

  componentDidMount(){
    BeerService.listBeers()
      .then(
        response => this.setState({
        beers:response
      }),
        error => console.error(error)
      )
  }

  render() {
      return (
        <div>
          <Header/>
            {
              this.state.beers.map((eachBeer,index) => {
                return (
                  <Link key={index} to={`/beers/${eachBeer._id}`}>
                    <div className='eachBeerContainer'>
                      <div>
                        <img className='img-eachBeer' src={eachBeer.image_url} alt={eachBeer.name}></img>
                      </div>
                        <div>
                          <h1>{eachBeer.name}</h1>
                            <h2>{eachBeer.tagline}</h2>
                              <p>{eachBeer.contributed_by}</p>
                        </div>
                    </div>
                  </Link>
                )
              })
            }
        </div>
      )
  }  
}

export default Beers;
