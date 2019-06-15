import React, { Component } from 'react';

class SingleBeer extends Component {

    componentWillMount() {
        this.props.getOne(this.props.match.params.id)
    }

    render() {
        const {singleBeer} = this.props;
        return (
            <div className='text'>
                {singleBeer.image_url
                    ? (<div>
                        <img src={singleBeer.image_url} alt={singleBeer.name}/>
                        <h2 className='text'>{singleBeer.name}</h2>
                        <h4 className='text'>{singleBeer.tagline}</h4>
                        <h6 className='text'>{singleBeer.first_brewed}</h6>
                        <p className='text'>{singleBeer.attenuation_level}</p>
                        <p className='text'>{singleBeer.description}</p>
                        <p className='text'>{singleBeer.contributed_by}</p>
                    </div>)
                    : "Carregando..."
                }
            </div>
        );
    }
}

export default SingleBeer;