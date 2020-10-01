import React from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SingleBeer.css'

class SingleBeer extends React.Component {

    state = {
        singleBeer: null,
        loading: true
    }

    getSingleBeer() {
        const beerData = this.props.match.params.id
        console.log(beerData)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerData}`)
            .then(response => {
                this.setState({
                    singleBeer: response.data,
                    loading: false
                });
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getSingleBeer()
    }



    render() {

        const beer = this.state.singleBeer

        return (
            <div>
                <Header />
                <div className=' container p-5'>
                    <div className='row'>
                        {this.state.loading && <span>loading...</span>}
                        {!this.state.loading &&
                            <div className='col-12'>
                                <div className='mx-auto text-center'>
                                    <img src={`${beer.image_url}`} className='singleBeer-img' />
                                </div>
                                <div className='singleBeer-container-name'>
                                    <h3>{beer.name}</h3>
                                    <h3 className='text-muted'>{beer.attenuation_level}</h3>
                                </div>
                                <div className='singleBeer-container-name'>
                                    <p className='text-muted'><b>{beer.tagline}</b></p>
                                    <p><b>{beer.first_brewed}</b></p>
                                </div>
                                <div>
                                    <p>{beer.description}</p>
                                    <p className='text-muted'>{beer.contributed_by.split(" ").slice(0, -1).join(" ")}</p>
                                </div>
                            </div>
                        }
                        <Link to='/beers'>
                            <div>
                                <button className="btn btn-primary text-white ml-2">Back to List of Beers</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

};

export default SingleBeer;