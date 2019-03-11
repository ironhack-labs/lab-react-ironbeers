import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Home extends Component {



  render(){
  
    return(
      <div className="home">
      <Link to="/AllBeers"><img src="../img/allBeer.png" ></img></Link>
      <Link to="/RandomBeer"><img src="../img/randomBeer.jpg"></img></Link>
      <Link to="/new-beer"><img src="../img/addBeer.jpg"></img></Link>
    </div>
    )
  }
}


export default Home