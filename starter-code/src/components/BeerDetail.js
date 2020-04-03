import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


class BeerDetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getSingleBeer();
  }

  getSingleBeer = () => {
    const { params } = this.props.match;
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
    .then( responseFromApi =>{
      const theBeer = responseFromApi.data;
      this.setState(theBeer);
    })
    .catch((err)=>{
        console.log(err)
    })
  }


  


  render(){
    return(
        <div>
      <Navbar/>
      <div className="pt-5">
          
          <img className="beerImg" src={this.state.image_url} alt="" srcset=""/>
        <h1>{this.state.name}</h1>
        <p className="font-weight-light">{this.state.tagline}</p>
        <p className="font-weight-light">{this.state.first_brewed}</p>
        <div className="textDes">
        <p className="text-justify">{this.state.description}</p>
        </div>
        <p className="font-weight-light">{this.state.attenuation_level}</p>
        <p>{this.state.contributed_by}</p>
       
        {/* show the beer heading only if there are beers */}
        { this.state.beers && this.state.beers.length > 0 && <h3>Beers</h3> }
        {/* map through the array of beers and... */}
        { this.state.beers && this.state.beers.map((beer, index) => {
            return(
                <div key={ index }>
                {/* ... make each beer's name a link that goes to the beer details page */}
                    <Link to={`/beers/${beer._id}`}>
                        { beer.name }
                    </Link>
                </div>
            )

        }) }
        </div>
<br/><br/><br/><br/><br/>

        <Link to={'/Beers'}>Back to Beers</Link>
      </div>
    )
  }
}

export default BeerDetail;