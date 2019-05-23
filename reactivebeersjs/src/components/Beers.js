import React, { Component } from 'react';
import Header from "./Header";
import "./Beer.css";
import { Link } from 'react-router-dom';

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedBeers: this.props.beers
    }
  }
  // makeListOfBeers = () => {
  //   let beersWithDetailsArr = this.props.beers.map((beer, index) => <Link  to={`/beers/${beer._id}`} key={index} className="beerDetails">
  //     <div className="img-div"><img src={beer.image_url} alt={index}></img></div>
  //     <div className="description">
  //       <h3>{beer.name}</h3>
  //       <p>{beer.tagline}</p>
  //       <p>{beer.contributed_by}</p>
  //     </div>
  //   </Link>
  //   )
  //   return beersWithDetailsArr;
  // }

  makeListOfBeers = () => {
    console.log(this.state.searchedBeers)
    let beersWithDetailsArr = this.state.searchedBeers.map((beer, index) => <Link to={`/beers/${beer._id}`} key={index} className="beerDetails">
      <div className="img-div"><img src={beer.image_url} alt={index}></img></div>
      <div className="description">
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </Link>
    )
    return beersWithDetailsArr;
  }

  handleChange = (event) => {
    let searchValue = event.target.value;
    let searchedBeers = this.props.beers.filter(item => item.name.toLowerCase().startsWith(searchValue))
    this.setState({
      searchedBeers: searchedBeers
    })
  }

  render() {
    console.log(this.props.beers)
    return (
      <div className="">
        <Header></Header>
        Search: <input type="text" onChange={this.handleChange}></input>
        <div className="Beer">
          {this.makeListOfBeers()}
        </div>
      </div>
    );
  }
}

export default Beers;
