import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'
import Navbar from './Navbar'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';



class BeersList extends React.Component{
    state={
        beers:[],
        filteredBeers: []
    }
    async componentDidMount(){
        const beersList = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
        console.log(beersList.data)
        this.setState({
            beers:beersList.data,
            filteredBeers: beersList.data
        })
    }
    
    handleFilterBeer = (query) => {
        this.setState((previousState) => {
          return {
            filteredBeers: previousState.beers.filter((beer) => {
              return beer.name.toLowerCase().includes(query.toLowerCase());
            }),
          };    
        });
      };


    render(){
        const {filteredBeers} = this.state
        return(
            <>
            <Navbar/>
            <Search filterBeers = {this.handleFilterBeer}/>
            {filteredBeers.map((beer)=>{
                return (
                    
                    <div key ={beer._id}>
                    <Card>
                    <img width="6%" height="140px" src={beer.image_url}  alt="Card image cap" />
                        <CardBody>
                        <NavLink id="rm-txt" to={`/beer-details/${beer._id}`}><CardTitle tag="h5">{beer.name}</CardTitle></NavLink>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{beer.tagline}</CardSubtitle>
                        <CardText><strong>Created By:</strong>  {beer.contributed_by}</CardText>
                        </CardBody>
                        
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                    </div>
                )
            })}
            </>
        )
    }

}
export default BeersList