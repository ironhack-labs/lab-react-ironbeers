import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import Home from '../home/Home'
import homeBeer from '../../img/homeBeer.png'
import axios from 'axios';


class OneBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
  }
 
  componentDidMount() {
    const { params } = this.props.match;
    console.log(params);
    axios.get (`https://ih-beer-api.herokuapp.com/beers/${params.beerId}`)
    .then(response => {
      this.setState({
        beer: response.data
      });
      console.log(this.state.beer)
    })
  }


  render() {
    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state.beer;
    return (
      <div>
        <div>
            <Link to='/' component={Home}>
              <img src={homeBeer} alt='home-link' />
            </Link>
         </div>
        <div>
          <img src={image_url} alt='beer package'/>
          <h1>{name}</h1>
          <h2>{tagline}</h2>
          <h2>{first_brewed}</h2>
          <h3>{attenuation_level}</h3>
          <p>{description}</p>
          <p>{contributed_by}</p>
        </div>
      </div>
    )

  }
}

export default OneBeer;