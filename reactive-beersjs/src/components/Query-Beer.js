import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class QueryOfBeers extends Component {
    constructor(props){
      super(props);
      this.state = {
          beers:[]
      };
    }

    getBeer = () => {
        const { params } = this.props.match;
        console.log(params)
        axios.get(`https://ironbeer-api.herokuapp.com/beers/search?q=${params.query}`/*, {withCredentials:true}*/)
        .then( responseFromApi =>{
          const theBeer = responseFromApi.data;
          this.setState({beers: theBeer});
          console.log(this.state)
        })
        .catch((err)=>{
            console.log(err)
        })
      }

  
    filteredBeers;

    render(){
        console.log(Object.keys(this.state.beers).length)
        
            if( Object.keys(this.state.beers).length <= 0) {
                this.getBeer()
            }
        
        //console.log(this.state.beers)
        this.filteredBeers = this.state.beers.filter((ele, index)=>{return index <= 30})
        console.log(this.filteredBeers)

      return(
        <div>
          <h1>I'm here working dude with dem Queries</h1>
          
          {
              this.filteredBeers.map((beer, index) => {
                  
                return (
                      <div key={beer._id}> 
                          <h3>{beer.name}</h3> <br />
                          <img src={beer.image_url} style={{width: "100px", height:"150px"}}/> <br />
                          <p>
                            {beer.tagline} <br />
                            {beer.contributed_by}<br />
                          </p>
                          <Link to={`/beer/${beer._id}`}> Check it out!</Link>
                      </div>
                  )
              })
          }
          
          {/* {this.state.title}
          <p>{this.state.description}</p>
          <div >
            {this.ownershipCheck(this.state)}
          </div>
           
           <Link to={'/beers'}>Back to beers</Link>
           */}
        </div>
      )
    }
}  


export default QueryOfBeers;