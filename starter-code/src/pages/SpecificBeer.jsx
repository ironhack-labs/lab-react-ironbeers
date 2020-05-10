import React from 'react';
import axios from "axios";
import '../App.css';
// import logo from '../logo.svg'

class SpecificBeer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            beer: null,
        }
    }

    // this.props.match this.props.history this.props.location sont des props qui vont avec le router
    // ce ne sont pas des props que tu "envoies" comme les props traditionnelles
    // elles sont là pour tous les components qui sont render dans une route i.e.tous ceux qui sont dans ton App entourés d'un "Route"

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(this.props)
        console.log(this.props.match.params.id)
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
            .then((apiResponse) => {
                console.log(id)
                console.log(apiResponse)
                this.setState({beer:apiResponse.data});
            })
            .catch((apiError) => {
                console.log(apiError);
            })
    }
    



    // handleClick = (event) => {
    //     this.props.history.push("/")  // push a path or a state
    // }

    // handleClick2 = (event) => {
    //     this.props.history.goBack("/"); // propriété goBack dans history permet de revenir à la page précédente
    // }
    
    render() {
        if (!this.state.beer) return null;
    return(
        <div>
            {/* <img style={{ height: "50px", verticalAlign:"middle" }} onClick={this.handleClick} src={logo} alt="" />
            <button onClick={this.handleClick}>Go to home page</button>
            <button onClick={this.handleClick2}>Go back to previous page</button> */}
            
            <h1>Beer details!</h1>
            {/* <pre>{JSON.stringify(this.props.match.params.id, null, 2)}</pre> */}
            {console.log(this.state.beer)}
            <img className="img" src={this.state.beer.image_url} alt={this.state.beer.name} />
            <h2>{this.state.beer.name}</h2>
            <h2>{this.state.beer.attenuation_level}</h2>
            <p>{this.state.beer.tagline}</p>
            <p>{this.state.beer.first_brewed}</p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
        </div>
        )
    }
}

export default SpecificBeer
