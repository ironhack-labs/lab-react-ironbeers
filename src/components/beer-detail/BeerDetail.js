import React from 'react';
import Header from "../header/Header";
import service from "../../services/beer-services"

class BeerDetail extends React.Component {

    state = {
        beer: {}
    }

    componentDidMount() {
        service.get().then(beers => this.setState({ beers })).catch(error => console.error(error))
    }

    render(props){

        const { beer } = props;

        return (
            <div>
                <Header />
                <div className="card card-custom-width" >
                    <img className="img-thumbnail" src={beer.image_url} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{beer.name}</h5>
                        <p className="card-text">{beer.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{beer.tagline}</li>
                        <li className="list-group-item">{beer.contributed_by}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BeerDetail