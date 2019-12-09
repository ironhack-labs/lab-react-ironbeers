import React, {Component} from 'react';
import axios from 'axios';
import Header from '../Header.js';
const ENDPOINT = 'https://ih-beer-api.herokuapp.com/beers';

class BeerDetail extends Component{
  state = {}

  async componentDidMount() {
    const { data } = await axios.get(`${ENDPOINT}`)
    const beer = data.find( beer => beer._id === this.props.match.params.id );
    this.setState({ beer });
  }

  render(){

    const { beer } = this.state
    if (!beer) {
      return (
        <div className="App">

        </div>
      )
    }


    return(
    <>
      
        <div className="card">
        <Header></Header>

          <img src={beer.image_url} alt={beer.name} width={"100px"} />

            <div className="beerBox">  
              <h2>{beer.name}</h2>
              <h4>{beer.first_brewed}</h4>
              <p>{beer.description}</p>
              <p>{beer.contributed_by}</p>
            </div>
        </div>
       
        </>
    )
  }
}
export default BeerDetail;