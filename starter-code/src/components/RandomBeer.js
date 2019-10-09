import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

export default class RandomBeer extends Component {

  constructor(props){
    super(props)
    this.state = {
        randomBeer:{},
        ready:false,
    }
  }

  componentDidMount(){
    this.getRandomBeer();
  }

getRandomBeer () {
    axios.get('https://ih-beer-api.herokuapp.com/beers/random')
          .then(response =>{
            this.setState({
              randomBeer: response.data,
              ready:true,
            })
          })
          .catch(err=>console.log(err))
  }

      render(){
        return (
          <div>
            <Header/>
            {this.state.ready &&
                                <div>
                                  <img src={this.state.randomBeer.image_url} alt=""/>
                                  <p>{this.state.randomBeer.name}</p> 
                                </div>
            }
            {!this.state.ready &&
                                  <div>
                                  Loading .....
                                  </div>
            }
          </div>
        )
  
}
}
