import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

class SingleBeer extends Component {
    constructor(props){
        super(props);
        this.state = {
                    beer:''
                    };
    }
  
    getBeer = (random) =>{
        let id = this.props.match ? this.props.match.params.id : ""
        console.log("ID", id)
        let endpoint= random ? 'https://ironbeer-api.herokuapp.com/beers/random' : `https://ironbeer-api.herokuapp.com/beers/single/`+id
        console.log("END", endpoint)
      axios.get(endpoint)
      .then(response => {
          console.log(response.data)
          let copy = random ? response.data[0] : response.data
        this.setState({
          beer: copy
        })
        console.log(this.state)
      })
    }
  
    componentDidMount() {
        this.getBeer(this.props.random);
    }
  
    render(){
        let b = this.state.beer
        console.log(b)
      return(
        <div>
        <Header />
        <div style={{width: '80%', display:'flex', flexDirection: 'column'}}>
            <img style={{width: 400}}src={b.image_url} alt="" />

            <h3 style={{display:'inline-block'}}>{b.name}</h3>
            <h4 style={{display:'inline-block'}}>{b.tagline}</h4>
            <h4 style={{display:'inline-block'}}>{b.first_brewed}</h4>
            <h4 style={{display:'inline-block'}}>{b.attenuation_level}</h4>
            <h4 style={{display:'inline-block'}}>{b.description}</h4>
            <h4 style={{display:'inline-block'}}>{b.contributed_by}</h4>
             
        </div>
        </div>
      )
    }
  }
  
  export default SingleBeer;