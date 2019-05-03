import React, { Component } from 'react'
import axios from "axios";
import './ListBeers.css';
import { Link } from 'react-router-dom';

export default class ListBeers extends Component {
  constructor(){
    super()
    this.state = {
      ListBeers: []
 }
}

  componentDidMount(){
    axios
        .get("http://localhost:5000/all")
        .then(allBeers => {
            const allBeersPay = allBeers.data
  
            this.setState({
                ...this.state,
                ListBeers: allBeersPay
            })
        })
  }


  render() {
    console.log(this.state.ListBeers)
    return (
      <div>
        <h2>List of Beers</h2>
                        {
                            this.state.ListBeers.map((beer) => {
                                return(
                                  <div className='beer'>
                                  <div>
                                    <img src={beer.image_url}/>
                                    </div>
                                    <div>
                                    <Link className="" to={`/beers/${beer._id}`}>{beer.name}</Link>
                                    
                                    <p>{beer.tagline}</p>
                                       <p>{beer.contributed_by}</p>
                                       </div>
                                       </div>
                                     
                                  
                                )
                            })
                        }
                     
      </div>
    )
  }
}
