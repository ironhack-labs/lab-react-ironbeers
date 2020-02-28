import React from "react";
import Beers from '../Beers/Beers.js'
import Nav from '../Nav/Nav.js';


export default class ListOfBeers extends React.Component {

    // componentDidMount = () =>{
    //    console.log(this.props.beers)
    //   }

    render() {
        return (
            <div className="list">
                <div>
                    {this.props.beers.map((beer) => (
                        <Beers _id={beer._id} image_url={beer.image_url} name={beer.name} tagline={beer.tagline}></Beers>
                    ))}
                </div>
            </div>
        )
    }
}



