import React from "react";
import beerAPI from "../api/beerAPI";
import {Link} from "react-router-dom";
import NavMain from './NavMain';
import BeersDetails from './BeersDetails';

console.log(beerAPI);

class Beers extends React.Component {
constructor(props){
    super(props);
    this.state={
        beers: [],
    }
}

componentDidMount() {
    beerAPI.getAllBeers().then((apiResponse) => {
        console.log(apiResponse.data);
        this.setState({ beers: apiResponse.data});
    }).catch(err => console.log(err));
}

    render() {
        return (
            <div>
                <NavMain />
                {this.state.beers.map(beer =>(
                    <BeersDetails key={beer._id} beer={beer} />
                ))}
            </div>
        )
    }
}

export default Beers