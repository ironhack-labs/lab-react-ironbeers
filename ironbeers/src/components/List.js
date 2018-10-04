import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

export class List extends Component {
    constructor(){
        super();
        this.state = { listOfBeers: [] };
    }
  
    getAllBeers = () =>{
      axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(response => {
          console.log(response.data)
        this.setState({
          listOfBeers: response.data
        })
      })
    }
  
    componentDidMount() {
      this.getAllBeers();
    }
  
    render(){
      return(
        <div>
        <Header />
        <div style={{width: '80%', float:"left"}}>
            { this.state.listOfBeers.map((b) => {
                return (
                    <div style={{display: 'flex'}} key={b._id}>
                    <div style={{width: '20%'}}>
                        <img src={b.image_url} alt="" />
                    </div>
                    <div>
                        <h3>{b.name}</h3>
                        <h4>{b.tagline}</h4>
                        <h4>{b.contributed_by}</h4>
                    </div>
                </div>
              )})
            }
        </div>
        </div>
      )
    }
  }
  
  //export default List;