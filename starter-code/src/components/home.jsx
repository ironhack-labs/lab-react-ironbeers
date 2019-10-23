import React , {Component} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component{
  constructor(){
    super()

    this.state ={
      beers:[],
    }
    this.getAllBeers = this.getAllBeers.bind(this)
  }

  getAllBeers() {
    axios.get(`https://ih-beers-api.herokuapp.com/beers`)
    .then(responseFromApi => {
      this.setState({
        beers: responseFromApi.data
      })
      console.log(this.state.beers)
    })
  }

  componentDidMount() {
    this.getAllBeers();
  }



  render(){
  return (
    <div className = "container">
      <div className = "home-card">
      <Link to={"/beers"} style={{ textDecoration: 'none' }} beers={this.state.beers}>
        
        <div className= "img-card">
        <img src='/images/beers.png' />
        </div>
        <h3>All Beers</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque, quo molestiae cum at et cupiditate officia non repellat quos aperiam sunt dolor animi ex illo qui voluptatum nam provident!</p>
       </Link>
      </div> <div className = "home-card">
      <Link to={"/random-beer"} style={{ textDecoration: 'none' }}>
        <img src='/images/random-beer.png' />
        <h3>Random Beer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque, quo molestiae cum at et cupiditate officia non repellat quos aperiam sunt dolor animi ex illo qui voluptatum nam provident!</p>
       </Link>
      </div>
      <div className = "home-card">
      <Link to={"/new-beer"} style={{ textDecoration: 'none' }}>
        <img src='/images/new-beer.png' />
        <h3>New Beer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque, quo molestiae cum at et cupiditate officia non repellat quos aperiam sunt dolor animi ex illo qui voluptatum nam provident!</p>
       </Link>
      </div>
    </div>
  );
  }
};

export default Home;
