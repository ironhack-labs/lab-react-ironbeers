import React from 'react';
import Navbar from './Navbar';
import Beer from './Beer'

class AllBeers extends React.Component{

displayAllBeers = () =>{
    let theList = this.props.beerList

   return theList.map(eachBeer => {
     return (<Beer key={eachBeer._id} beerName={eachBeer.name} beerImg={eachBeer.image_url} beerTag={eachBeer.tagline} beerCreator={eachBeer.contributed_by} theId={eachBeer.id}/>)
    })
}


    render(){
        return(
            <div>
            <Navbar/>
   
            {this.displayAllBeers()}
            </div>
        )
    }
}

export default AllBeers