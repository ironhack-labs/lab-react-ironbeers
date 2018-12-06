import React, { Component } from 'react'
import ViewsFromTheSix from "../ViewsFromTheSix/ViewsFromTheSix"
import Axios from 'axios';

export default class Allbeers extends Component {
  constructor(props){
    super(props)
      this.state={
        beers:[]
      }
      Axios.get('https://ironbeer-api.herokuapp.com/beers/all').then(data=>{
        this.setState({beers:data.data})
      }).catch(e=>console.log(e));
    }
  
  render() {
    let {beers} = this.state
    return (
      <div>
        {beers.map(e=>{
          return(
            <div key={e._id} style={{border:"2px solid purple"}}>
            <ViewsFromTheSix {...e}/>
            </div>
          )
        })}
      </div>
    )
  }
}

