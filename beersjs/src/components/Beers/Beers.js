import React, { Component } from 'react'
import { Link, Switch, Route  } from "react-router-dom";
import axios from 'axios';

export default class Beers extends Component {

constructor(props) {
  super(props)

  this.state = {
     beers: null
  }
}

componentDidMount() {
  axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
    .then(res => {
      this.setState({ beers: res.data });
    })
}


  render() {

    if(this.state.beers !== null){
      return ( 
        <div>
          <header> <Link className="navbar-brand" to="/">HOME</Link></header>
          <h1><Link className="navbar-brand" to="/beers">ALL BEERS</Link></h1>
          <h1>BEERS</h1>

          <div>
          <h1>estrcutra< y mapeo/h1>


          </div>
          


          </h1>

        </div>
      )
    }
    else{
      <h1>Loading...</h1>
    }
    
  }
}


// this.props.match.params.id
// en la sencilla hago peticion axio con la url hago la peticion a
// props para coger el id de url , para coger un chorrazo... p
