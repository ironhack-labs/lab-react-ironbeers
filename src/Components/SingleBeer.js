import React from 'react';
import axios from 'axios';

import Header from './Header';

class SingleBeer extends React.Component {
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
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params._id}`
            );

            this.setState({ ...response.data });
            console.log(response.data)
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        console.log('Single Beer')
        console.log(this.state.image_url)
        return <div>
            <Header />
            <div>
                <div>
                    <img src={this.state.image_url} />
                </div>
                <div className='d-flex'>
                    <h2 className='ml-7'>{this.state.name}</h2>
                    <h5 className='d-flex flex-row-reverse mr-10' style={{ color: 'grey' }}>{this.state.attenuation_level}</h5>
                </div>
                <div className='d-flex'>
                    <p style={{ color: 'grey' }}>{this.state.tagline}</p>
                    <strong>{this.state.first_brewed}</strong>
                </div>
                <div>
                    <p>{this.state.description}</p>
                </div>
                <div>
                    <span style={{ color: 'grey' }}>{this.state.contributed_by}</span>
                </div>
            </div>
        </div>
    }
}


export default SingleBeer;