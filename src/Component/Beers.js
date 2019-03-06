import React, {Component} from 'react';
import axios from "axios";
import AllBeers from "./AllBeers";
import Navbar from "./Home";

class Beers extends Component{

  state={
    beer:[]
  }

  componentWillMount() {

    axios.get('https://ironbeer-api.herokuapp.com/beers/all')
      .then(res=>{
        this.setState({beer: res.data})
      });
  }


  render() {
    const chelas = this.state.beer

    return(
      <div >
        <Navbar/>
        <div className="row alinear">
           {
            chelas.map((el, i) => {
            return(
              <AllBeers
                key={i}
                beer={el}
              />)
            })
           }
        </div>
      </div>
    )
  }
}

export default Beers