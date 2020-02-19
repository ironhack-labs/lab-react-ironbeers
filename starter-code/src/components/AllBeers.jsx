import React, { Component } from 'react';
import NavBar from '../NavBar'
import {Link} from 'react-router-dom'
// import axios from 'axios'

class AllBeers extends Component {

    // state = {
    //     beers: [], //fill this array of beers with beers from the api 
    //     // dogs : []
    //   }
    
    // async componentDidMount(){
    //     //console.log('happens once on mount')

    //     //.then promise 
    //     let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/`) //This takes some time by the time it gets back 
    //         console.log(response.data)
    //         this.setState({
    //           beers:response.data 
    //     })
    // }
    


    showBeerDetails = () => {
        return this.props.beers.map((eachBeer,i)  => {
          return <ul className = 'list-style none'key={i}>
          <Link to={`/single-beer/${eachBeer.name}`}>
          <div className="d-flex flex-row">
          <img className="w-25 h-25 p-3 img-fluid" src={eachBeer.image_url} alt =''/>
            
            <div className="col- d-flex flex-column justify-content-center img-fluid">
            <li><h1>{eachBeer.name}</h1></li>
            <li><h3>{eachBeer.tagline}</h3></li>
            <li><h5>Created By: {eachBeer.contributed_by}</h5></li>
            
            </div>

            </div>
            </Link>
            <hr />
            </ul>
        })
    }
    
 
    
    render() {
        // let showBeers = this.showBeerDetails;
        return (
            <div>
            <NavBar />
            {/* (props.ready) ? (<div> {showBeers} </div>) : (<div>Loading...</div>)  */}
            {this.props.ready? (this.showBeerDetails()) : ("Loading....")}
                {/* <div >
                {this.showBeerDetails()}  
                </div> */}
            </div>
        );
    }
}

export default AllBeers;