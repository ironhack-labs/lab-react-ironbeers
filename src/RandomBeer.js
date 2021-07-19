import React from 'react';
import NavBar from './NavBar';
import axios from 'axios';

class RandomBeer extends React.Component {
    state = {
        beer: null,
        image: '',
        name: '',
        tagline: '',
        firstBrewed: '',
        attenuationLevel: 0,
        description: '',
        contributedBy: ''

    }
    componentDidMount() {
        
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(res => {
                console.log('getting random beer: ', res.data.name)
                this.setState({
                    beer: res.data,
                    image: res.data.image_url,
                    name: res.data.name,
                    tagline: res.data.tagline,
                    firstBrewed: res.data.first_brewed,
                    attenuationLevel: res.data.attenuation_level,
                    description: res.data.description,
                    contributedBy: res.data.contributed_by,
                })
            })
            .catch(err => console.log(err))
    }
    render () {
        if (!this.state.beer) return <></>
        return (
            <>
                <NavBar />
                <div className="SingleBeer">
                    <img src={this.state.image} />
                    <div className="labels">
                        <div className="words">
                            <h3>{this.state.name}</h3>
                            <span>{this.state.tagline}</span>
                        </div>
                        <div className="nums">
                            <p>{this.state.attenuationLevel}</p>
                            <h4>{this.state.firstBrewed}</h4>
                        </div>
                    </div>
                    <p className="description">
                        {this.state.description}
                    </p>
                    <span>{this.state.contributedBy}</span>

                </div>
            </>
        )
    }
}
export default RandomBeer;