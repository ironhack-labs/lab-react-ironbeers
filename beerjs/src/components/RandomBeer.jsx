import React, { Component } from 'react';

class RandomBeer extends Component {
    
    componentWillMount() {
        this.props.getRandom()
    }

    render() {
        const {randomBeer} = this.props;
        return (
            <div>
            {randomBeer.image_url 
                ? (<div>
                <img src={randomBeer.image_url} alt={randomBeer.name}/>
                <h2 className='text'>{randomBeer.name}</h2>
                <h4 className='text'>{randomBeer.tagline}</h4>
                <h6 className='text'>{randomBeer.first_brewed}</h6>
                <p className='text'>{randomBeer.attenuation_level}</p>
                <p className='text'>{randomBeer.description}</p>
                <p className='text'>{randomBeer.contributed_by}</p>
                </div>)
                : "Carregando..."
            }
            </div>
        );
    }
}

export default RandomBeer;