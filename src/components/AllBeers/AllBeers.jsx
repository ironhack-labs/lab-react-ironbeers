import axios from 'axios'
import { Component } from 'react/cjs/react.development'



class AllBeers extends Component {

    state = {
        beers: undefined,
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                this.setState({
                    beers: response.data
                });
            });
    }

    render() {
        return (
            <div className='allBeers'>
                {this.state.beers !== undefined
                    ? this.state.beers.map((beer) => (
                        <div className='d-flex mt-4' key={beer.name}>
                            <div className=''>
                                <img className='img-responsive' style={{width:'50px'}} src={beer.image_url} alt={beer.name} />
                            </div>
                            <div className='justify-content-start ms-5'>
                                <h5>{beer.name}</h5>
                                <p style={{color:'grey'}}>{beer.tagline}</p>
                                <small><strong>Created by:</strong> {beer.contributed_by}</small>
                            </div>

                        </div>
                    )) : "Loading"}
                <hr />
            </div>
        )
    }
}

export default AllBeers