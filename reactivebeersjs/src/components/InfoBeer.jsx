import React, { Component } from "react";
import Header from "./Header.jsx"
import axios from "axios";
import FullCard from "./FullCard.jsx"
class InfoBeer extends Component {

    constructor() {
        super();
        this.state = {
          oneBeer: {}
        };
     
      }
    
      getOneBeer = () => {
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`).then(e => {
          this.setState({
            oneBeer: e.data
          });
          console.log(this.state.oneBeer);
        });
      };
      
      componentDidMount() {
        this.getOneBeer();
      }
  render() {
    return (

        <div>
        <div>
            <Header></Header>
        </div>
        
      <div>
      <FullCard data={this.state.oneBeer}></FullCard>
      </div>
      </div>
     
    );
  }
}

export default InfoBeer;