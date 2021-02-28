import React from 'react';
import { Link } from "react-router-dom";

class Beers extends React.Component {
 

constructor(props){
    super(props);
    this.state = {
        beers: this.props.location.state.beers
    }
}


    render(){
        console.log(this.state.beers)
        
    

      const beersMaped = this.props.location.state.beers.map((beer) => {
        
        
        return(
                       <div key={beer._id}>

                           <h2>{beer.name}</h2>
                          <img src={beer.image_url}></img>
                           <h3>Created by: {beer.contributed_by}</h3>
                           <Link to={{
    pathname:`/beers/${beer._id}`,
    state: {
        beers: this.state.beers
    }
}}>
                           <h3>More about this Beer</h3></Link>
                           </div>
                   )
        })
        
        return(
            <>
               <h1> All Beer</h1>
               {beersMaped}
            </>
        )
    }
}

export default Beers;

