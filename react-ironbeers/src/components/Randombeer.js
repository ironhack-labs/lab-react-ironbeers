import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Randombeer extends Component {
    constructor(props){
        super(props);
        this.state = {};
      }
    
      componentDidMount(){
        this.getRandomBeer();
      }
    
      getRandomBeer = () => {
        const { params } = this.props.match;
        axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
        .then( responseFromApi =>{
          const theBeer = responseFromApi.data[0];
          this.setState(theBeer);
          console.log(this.state)
        })
        .catch((err)=>{
            console.log(err)
        })
      }
  render(){
    return(
        <div className="box">
                <article class="media">
                     <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.state.image_url}></img>
                        </figure>
        </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{this.state.name}</strong>
          <br></br>
          {this.state.description}
          <br></br>
          <strong>Brewer tips :</strong>
          {this.state.brewers_tips}
          <br></br>
          <strong>Discovered by :</strong>
          {this.state.contributed_by}
        </p>
      </div>
    </div>
  </article>
</div>
    )
  }
}

export default Randombeer;