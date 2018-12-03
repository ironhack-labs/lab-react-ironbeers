import React from 'react';
import BeerCard from "./BeerCard";
import Header from "./Header";

const Beers = (props) => {
    let {beers} = props.location.state;
    console.log(beers);
    return (
       <div>
           <Header/>
           <div className="columns is-multiline" style={{marginTop:50}}>

               {beers.map(beer => <div className="column is-one-third"><BeerCard beer={beer}/></div>)}
           </div>

       </div>
    );
};

export default Beers;