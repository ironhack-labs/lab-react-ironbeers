import React from 'react';
import { NavLink } from 'react-router-dom'
class Beer extends React.Component{

    render(){
        return(
            <div className="list-group-item list-group-item-action theBeerContainer">
<NavLink to={`/beers/${this.props.theId}`} >
<span className="theBeerImg"> <img src={`${this.props.beerImg}`} alt="theBeer" width="60px" height="100px"></img></span>
            <span className="theBeerText">
                <h2>{this.props.beerName}</h2> 
                <p>{this.props.beerTag}</p>
                <p>Created by: {this.props.beerCreator}</p>
            </span>
</NavLink>
</div>

            // <div className="theBeerContainer">

            //     <span className="theBeerImg">
                   
            //     </span>
            // <span className="theBeerText">
            // <div>
       
            // <p>{this.props.beerTag}</p>
            // <p>Created by: {this.props.beerCreator}</p>
            // </div>
            // </span>

            // </div>
        )
    }
}

export default Beer;