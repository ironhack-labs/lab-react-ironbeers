import React, { Component } from 'react'
import Header from '../Header/Header';
import BeerService from "../beerService/BeerService"


export default class NewBeers extends Component {
  constructor(props){
    super(props)
    this.state={
      beer:[],
      name:'',
      description:''
    }
    this.BeerService = new BeerService();
  }
  handlerChange = e =>{
    let inputName=e.target.name; 
    let inputValue=e.target.value;
    this.setState({...this.state,[inputName]:inputValue})
  }

  handlerSubmit = e => {
    e.preventDefault();
    let {name,description} = this.state;
    this.BeerService.newBeer({name,description})
    .then(beer=>{
      this.setState({...this.state,name:'',description:''},()=>{
        this.BeerService.getBeer()
        .then(data =>console.log(data))

      })
    
    })
    .catch(err=>console.log(err))

  }









  render() {
    
    return  this.state.beer?(
      <div>
        <form onSubmit={e=>this.handlerSubmit(e)}>
          <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={e=>this.handlerChange(e)}/>
          <input type="text" placeholder="Description" value={this.state.description} name="description" onChange={e=>this.handlerChange(e)}/>
          <button type="submit">New Beer</button>
        </form>
      </div>
    ):<div>Gift load</div>

    // return this.state.butterfly ? <div>mi butterfly</div> : <p>Load</p>
  }
}
       
       