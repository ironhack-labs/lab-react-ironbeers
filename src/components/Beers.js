import React from 'react';
import { Link } from "react-router-dom";

class Beers extends React.Component {
 

constructor(props){
    super(props);
    this.state = {
        beers: this.props.location.state.beers,
        search: ''
    }
}

handleTyping = event => {
    let searchVal = event.target.value
    this.setState((props,state) => ({
        search: searchVal
    }))
}



    render(){

        const filteredBeer = this.props.location.state.beers.filter((dasBeer) => {
                return dasBeer.name.toLowerCase().includes(this.state.search.toLowerCase());
        })

      const beersMaped = filteredBeer.map((beer) => {  
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
               <form>
               <label htmlFor="search ">Filter Beers</label>
                    <input
                    type="search"
                    id="search"
                    name="search "
                    value={this.state.search}
                    onChange={this.handleTyping}
                    />
               </form>
               {beersMaped}
            </>
        )
    }
}

export default Beers;

