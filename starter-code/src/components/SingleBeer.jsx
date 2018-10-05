import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class  SingleBeer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount(){
    this.retrieveSingleBeer();
}

  retrieveSingleBeer = () => {
    const { params } = this.props.match;
      axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
      .then( res =>{
          const singleBeer = res.data;
          this.setState(singleBeer);
          console.log(singleBeer);
      })
      .catch((err)=>{
          console.log(err)
      })
  }
  render() {
    return(
      <React.Fragment>
      <div>
        <img src={this.state.image_url} alt="single-beer" style={{maxWidth:400, maxHeight:400}}></img>
        </div>
        <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.tagline}</p>
        <p>{this.state.first_brewed}</p>
        <p>{this.state.attenuation_level}</p>
        <p>{this.state.description}</p>
        <p>{this.state.contributed_by}</p>
        </div>
        </React.Fragment>
     
    )
  }
  }
