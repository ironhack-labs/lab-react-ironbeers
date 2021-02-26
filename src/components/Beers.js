import React from 'react';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            loaded: false
        };
    }

    async componentDidMount() {
        const response = await fetch('https://ih-beers-api2.herokuapp.com/beers');
        const json = await response.json();
        this.setState(() => ({beers: json, loaded: true}));
    }


    render() {
        const beersRender = this.state.beers.map(beer => {
            return(
                <div key={beer._id}>
                <div className="d-flex mb-3">
                    <div className="beerImg-container">
                        <img className="beer-img" src={beer.image_url} alt={beer.name} />
                    </div>
                    <div className="ml-1 text-left d-flex flex-column justify-content-center">
                        <Link to={`/beers/${beer._id}`}><h4 className="m-0 pb-3">{beer.name}</h4></Link>
                        <h5 className="m-0 text-muted font-weight-normal pb-1">{beer.tagline}</h5>
                        <p className="m-0"><b>Created by:</b> {beer.contributed_by ? beer.contributed_by.replace(/\s*\<.*?\>\s*/g, "") : "Unknown"}</p>
                    </div>
                </div>
                <hr/>
                </div>
            )
        })
        return(
            <div>
                <div>
                    {beersRender}
                </div>
            </div>
        )
    }
}

export default Beers;