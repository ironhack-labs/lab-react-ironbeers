import React from 'react';
import axios from "axios";
import Header from './Header';

class RandomBeer extends React.Component {
    state = {
        image: "",
        name: "",
        tagline: "",
        firstBrewed: "",
        attenuationLevel: "",
        description: "",
        contributedBy: "",
    }


    async componentDidMount() {
        const res = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
        const targedBeer = res.data;

        this.setState({
            image: targedBeer.image_url,
            name: targedBeer.name,
            tagline: targedBeer.tagline,
            firstBrewed: targedBeer.first_brewed,
            attenuationLevel: targedBeer.attenuation_level,
            description: targedBeer.description,
            contributedBy: targedBeer.contributed_by,
        })

    }

    render() {
        const { image, name, tagline, firstBrewed, attenuationLevel, description, contributedBy } = this.state;
        return (
            <>
                <Header />
                {this.state.name ? (
                    <div className="card singleBeer" >
                        <div className="d-flex justify-content-center">
                            <img className="card-img-top " src={image} alt={image} />
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">{name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{attenuationLevel}</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="card-subtitle mb-2 text-muted">{tagline}</h6>
                                <h6>{firstBrewed}</h6>
                            </div>
                            <h6>{description}</h6>
                            <p className="card-text">{contributedBy}</p>
                        </div>
                    </div>
                )
                    : (<h5>Loading Random Beer...</h5>)}

            </>
        )
    };

}




export default RandomBeer;