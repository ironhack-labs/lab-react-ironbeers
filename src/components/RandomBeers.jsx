
import React from 'react'
import axios from 'axios';
import Header from './Header'
import { Link } from 'react-router-dom'

class RandomBeer extends React.Component {

    state = {
        randomBeer: null,
        loading: true
    }


    getRandomBeer = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {
                // console.log('this is response' ,response.data);
                this.setState({
                    randomBeer: response.data,
                    loading: false
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getRandomBeer()
    }

    render() {

        const randomBeer = this.state.randomBeer
         return (
            <div>
                <Header />
                <div className=' container p-5'>
                    <div className='row'>
                    {this.state.loading && <span>loading...</span>}
                        {!this.state.loading && 
                            <div className='col-12'>
                                <div className='mx-auto text-center'>
                                    <img src={`${randomBeer.image_url}`} className='singleBeer-img' />
                                </div>
                                <div className='singleBeer-container-name'>
                                    <h3>{randomBeer.name}</h3>
                                    <h3 className='text-muted'>{randomBeer.attenuation_level}</h3>
                                </div>
                                <div className='singleBeer-container-name'>
                                    <p className='text-muted'><b>{randomBeer.tagline}</b></p>
                                    <p><b>{randomBeer.first_brewed}</b></p>
                                </div>
                                <div>
                                    <p>{randomBeer.description}</p>
                                    <p className='text-muted'>{randomBeer.contributed_by.split(" ").slice(0, -1).join(" ")}</p>
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
        )
    }
}

export default RandomBeer