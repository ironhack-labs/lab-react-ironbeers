import React from "react"
import axios from "axios";
import {Link} from "react-router-dom"
import NavBar from "./NavBar";

class Detail extends React.Component {
    state = {
        beer: null
    }

getBeerDetail() {
    console.log("GET BEER DETAIL");
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
        console.log(response.data);
        const beers = response.data;
        console.log(beers);
        const findBeer = id => {
            return beers.find(beer => {
                if(beer._id === props.match.params.id) return true;
            });
        };

        const props= this.props;

        const beer = findBeer(props.match.params._id);
        this.setState({
            beer: beer
        })
    })
.catch(err => {
    console.log(err);
});
}

componentDidMount() {
    this.getBeerDetail();
}


    render() {
if(this.state.beer === null) {
    return <div />
}

        const beer = this.state.beer;

        console.log("1:", beer)
        
        return (
            <div>
            <NavBar />
            <div>
                <img src={beer.image_url} alt="beer" height="200vh"/>
                </div>
                <div>
                    <h1>{beer.name}</h1>
                    <div>
                    <h3>{beer.tagline}</h3>
                    <p>{beer.first_brewed}</p>
                    </div>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
                <Link to="/Beers">Back to the List of Beers</Link>
            </div>
        )
    }
}

export default Detail;