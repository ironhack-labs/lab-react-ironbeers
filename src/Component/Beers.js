import React, {Component} from 'react';
import axios from "axios";
import AllBeers from "./AllBeers";
import Navbar from "./Home";



class Beers extends Component{

  state={
    beer:[],
    cargarCervezas: ()=>{
      axios.get('https://ironbeer-api.herokuapp.com/beers/all')
        .then(res=>{
          this.setState({beer: res.data})
        });
  //let data = this.state.beer.data;
      console.log("Data", this.state.beer.length)
    },
    terminado:''
  }

  componentWillMount() {

    this.state.cargarCervezas()
  //   console.log('componentWillMount')
  //
  //   axios.get('https://ironbeer-api.herokuapp.com/beers/all')
  //     .then(res=>{
  //       //let {beer}=this.state
  //       //beer=res;
  //       this.setState({beer: res.data})
  //       console.log(this.state.beer)
  //     })
  //
  //     .catch(err=>{
  //       console.log(err)
  //     })
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


export default Beers