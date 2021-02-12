import React from 'react';
import axios from 'axios';

import Header from './Header';

class RandomBeer extends React.Component {
    state = {
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: '',
        description: '',
        contributed_by: '',
        _id: '',
        image_url: '',
    }

    async componentDidMount() {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random"
            );

            this.setState({ ...response.data });
            console.log(response.data)
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        console.log(this.state.image_url)
        return <div>
            <Header />
            <div className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4">
                <div className="w-25 d-flex flex-column justify-content-center align-items-center mb-3">
                    <img style={{width: '60px', height: "auto"}} src={this.state.image_url} alt={`${this.state.name} beer`} />
                </div>
                <div className='w-75 d-flex justify-content-around align-items-center'>
                    <h2 className='ml-7'>{this.state.name}</h2>
                    <h5 className='d-flex flex-row-reverse mr-10' style={{ color: 'grey' }}>{this.state.attenuation_level}</h5>
                </div>
                <div className='w-100 d-flex justify-content-center align-items-center mb-2'>
                    <p className="w-75 m-0" style={{ color: 'grey'}}>{this.state.tagline}</p>
                    <strong>{this.state.first_brewed}</strong>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="w-75 text-center">{this.state.description}</p>
                </div>
                <div>
                    <span style={{ color: 'grey' }}>{this.state.contributed_by}</span>
                </div>
            </div>
        </div>
    }
}


export default RandomBeer;