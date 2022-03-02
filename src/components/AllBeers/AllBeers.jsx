import axios from 'axios'
import { Link } from 'react-router-dom';
import { Component } from 'react/cjs/react.development'



class AllBeers extends Component {

    state = {
        beers: undefined,
    }

    componentDidMount() {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                this.setState({
                    beers: response.data
                });
            });
    }

    render() {
        return (
            <>
                <div className='allBeers'>
                    {this.state.beers !== undefined
                        ? this.state.beers.map((beer) => (
                            <div className='d-flex mt-4' key={beer.name} style={{ width: 'auto' }}>
                                <div className=''>
                                    <img className='img-responsive' style={{ width: '50px' }} src={beer.image_url} alt={beer.name} />
                                </div>
                                <div className='justify-content-start ms-5'>
                                    <h5>{beer.name}</h5>
                                    <p style={{ color: 'grey' }}>{beer.tagline}</p>
                                    <small><strong>Created by:</strong> {beer.contributed_by}</small>
                                    <div className='mt-2'>
                                        <Link to={`/beers/${beer._id}`} className="btn btn-info">Detail: <small>{beer.name}</small></Link>
                                    </div>
                                </div>
                            </div>
                        )) : "Loading"}
                </div>
            </>
        )
    }
}

export default AllBeers