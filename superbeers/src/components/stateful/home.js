import React, {Component} from 'react';
import beers from "../../img/beers.png"
import randomBeers from "../../img/random-beer.png"
import newBeers from "../../img/new-beer.png"
import {Link} from 'react-router-dom'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state ={}
  }

  render() {

    return(

    <div>
    <img src={beers} alt="cerveeeeeeeeeeeeeeeeeeeeeeeeezas" />
    <h2>All beers</h2>
    <Link to="/beer/list"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, doloribus? Adipisci architecto sunt, sed numquam omnis itaque laboriosam sint atque expedita sapiente assumenda enim tempora impedit, natus reprehenderit, dolorem beatae!</p></Link> 
    <img src={randomBeers} alt="cerveeeeeeeeeeeeeeeeeeeeeeeeezas" />
    <h2>Random beer</h2>
    <Link to="/beer/random"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, doloribus? Adipisci architecto sunt, sed numquam omnis itaque laboriosam sint atque expedita sapiente assumenda enim tempora impedit, natus reprehenderit, dolorem beatae!</p></Link>
    <img src={newBeers} alt="cerveeeeeeeeeeeeeeeeeeeeeeeeezas" />
    <h3>New Beer</h3>
    <Link to="/add"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, doloribus? Adipisci architecto sunt, sed numquam omnis itaque laboriosam sint atque expedita sapiente assumenda enim tempora impedit, natus reprehenderit, dolorem beatae!</p></Link>
  </div>


    )
  }

}