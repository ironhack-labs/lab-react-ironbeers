import React, { Component } from 'react'
import Axios from 'axios';
import Header from './Header.js';
import {Link} from 'react-router-dom';

export class Beers extends Component {

constructor(props){
    super(props);
    this.state = {
    allBeers:[]
        }  
    }
componentDidMount() {
        Axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
          this.setState({ allBeers:response.data });
        })
        .catch(error => {
          console.log(error);
        });
      }

      showBeers = () =>{
          return this.state.allBeers.map(beer =>{
              return <> 
                    <Link to={`/beers/${beer._id}`} style={{textDecoration:"none"}}>
                    <div style={{margin:"100px",width:"350px", height:"165", display:"flex", justifyContent:"space-between"}}>
                    <img style={{width:"80px"}}src={beer.image_url}/>
                    <div style={{width:"250px"}}><h2 style={{fontSize:"20px"}}>{beer.name}</h2>
                    <h4 style={{color:"grey", fontSize:"15px"}}>{beer.tagline}</h4>
                    <span style={{fontSize:"10px"}}>Created by: {beer.contributed_by}</span>
                    </div>
                    </div></Link>
                     <hr/>
                     </>
          })
      }

    render() {
        return (
            <>
            <Header/>
                {this.showBeers()}
            </>
            
        )
    }
}

export default Beers
