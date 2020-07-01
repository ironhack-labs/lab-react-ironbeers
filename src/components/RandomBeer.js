import React, {Component} from 'react';
import Header from '../components/header/Header';
import axios from 'axios';

class RandomBeer extends Component{
  state={}

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then((response)=> {
      this.setState(response.data)
    })
  }

  render(){
    return(
  
      <div>
            <Header/>
            {/* If statement to check if var exists due to async */}
              <div className="card" style={{flexDirection: "row",textAlign: "left"}} >
                  <img className="card-img-left" src={this.state.image_url} alt="Card cap" style={{ minWidth: "200px", maxHeight:"200px", objectFit: "contain"}}/>
                  <div className="card-body">
                      <h5 className="card-title">{this.state.name}</h5>
                      <p className="card-text">{this.state.tagline}
                      <br/>- Contributed by:{this.state.contributed_by}</p>
                  </div>
              </div>
      </div>  
    )
  }
}


export default RandomBeer;