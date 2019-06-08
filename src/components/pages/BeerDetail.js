import React from 'react';
import Header from '../Header';
import BeerDetailService from '../services/BeerService';

class BeerDetail extends React.Component {

  state={
    beerDetail:[]
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    BeerDetailService.detailBeer(id)
      .then(response => this.setState({beerDetail:response}))
  }

  render() {
      return (
        <div>
          <Header/>
            {
              <div className='eachBeerContainer'>
                <div>
                  <img className='img-eachBeer' src={this.state.beerDetail.image_url} alt={this.state.beerDetail.name}></img>
                </div>
                      <div>
                        <h1>{this.state.beerDetail.name}</h1>
                          <h2>{this.state.beerDetail.tagline}</h2>
                            <p>{this.state.beerDetail.contributed_by}</p>
                </div>
              </div>
            }
        </div>
      )
  }  
}

export default BeerDetail;