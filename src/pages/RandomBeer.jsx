import React from 'react';
import Header from "../components/Header";
import beersAPI from "../api/beersApi";
import "../styles/random-beer.css"


class RandomBeer extends React.Component {

    state = {
        randomBeer: null,
    }

    componentDidMount() {
        beersAPI
            .getRandom()
            .then((apiResponse) => {
                console.log(apiResponse);
                this.setState({ randomBeer: apiResponse.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }



    render() {
        return (
            <div>
                <Header />
                <div id="main-random-beer">
                {this.state.randomBeer && (
                    <div className="container-random-beer">
                    <img src={this.state.randomBeer.image_url} alt=""/>
                    <div className="text-random-beer">
                        <div className="divtext1">
                            <h2>{this.state.randomBeer.name}</h2>
                            <p>{this.state.randomBeer.attenuation_level}</p>
                        </div>
                        <br/>
                        <div className="divtext1">
                            <p>{this.state.randomBeer.tagline}</p>
                            <p>{this.state.randomBeer.first_brewed}</p>
                        </div>
                        <br/>
                        <p>{this.state.randomBeer.description}</p>
                        <br/>
                        <p>{this.state.randomBeer.contributed_by}</p>
                    </div>
                </div>
            )}
                </div>
            </div>
        )
    
    }
}

export default RandomBeer;
