import React, {Component} from 'react'
import Axios from 'axios'
var url = 'https://ironbeer-api.herokuapp.com/beers/all'

class Beers extends Component {
  state = {
    beers: []
  }
  componentWillMount(){
    Axios.get(url)
      .then(r=>{
        this.setState({beers:r.data})
        console.log(this.state.beers)
      })
  }

  showBeer = (beer,index) => {
    return <div key={index}>
      <h3>{beer.name}</h3>
      <img src={beer.image_url} style={{width:'50px'}} alt={beer.name}/>
      </div>

  }

  render(){
    const {beers} = this.state
    return (
      <div>
        {beers.map((b,i)=>this.showBeer(b,i))}
      </div>
    )
  }

}

export default Beers