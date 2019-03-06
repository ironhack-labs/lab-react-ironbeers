import React, {Component} from 'react';
import axios from "axios";
import AllBeers from "./AllBeers";
import Navbar from "./Home";



class RandomBeers extends Component{

  state={
    beer:[],
    cargarCervezas: ()=>{
      axios.get('https://ironbeer-api.herokuapp.com/beers/random')
        .then(res=>{
          this.setState({beer: res.data})
        });
      //let data = this.state.beer.data;
      console.log("Data", this.state.beer.length)
    },
    terminado:''
  }

  componentWillMount() {
    console.log('will')
    this.state.cargarCervezas()

  }


  render() {
    const chelas = this.state.beer

    return(
      <div >
        <Navbar/>
        <div className="row alinear">
          <div className="col m4 l4 ">
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
      </div>
    )
  }
}


export default RandomBeers