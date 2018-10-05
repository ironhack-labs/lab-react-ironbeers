import React, {Component} from 'react'
import axios from 'axios'

const url = 'https://ironbeer-api.herokuapp.com/beers/all'

class List extends Component{
  
  state={
    data:[]
  }

  componentWillMount =()=> {
    this.getList()
  }

  getList= ()=>{
    let data = []
    axios.get(url)
      .then(beers=>{
        beers.data.forEach(beer => {
          data.push(beer)
        })
        this.setState({data})
      })
      .catch(e=>console.log(e))

  }

  render(){  
    const beers = this.state.data
    return(
      <div>
        <h2>Beers</h2>
        <div>
          {
            beers.map((beer,index)=>{
              return (<div key={index}>
                <h2>{beer.name}</h2>
                <img src={beer.image_url} alt={beer.name}/>
                <p>{beer.tagline}</p>
              </div>)
            })
          }
        </div>
        
      </div>
    )
  }
}

export default List