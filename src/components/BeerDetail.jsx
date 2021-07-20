import React, { Component } from 'react';
import axios from 'axios';

class BeerDetail extends Component {
    state = {
        beer: null
    }

    getBeer = () => {
        console.log('this is this.props.match.params.id: ', this.props.match.params._id)
        const beerId = this.props.match.params._id;
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(resp => {
            console.log(resp);
            this.setState({
                beer: resp.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentDidMount() {
        this.getBeer();
    }

    // componentDidUpdate(prevProps) {
    //     console.log('updated');
    //     // when the component is updated then we need to check if the props are 
    //     // different to the props before and get the new country
    //     if (prevProps !== this.props) {
    //       this.getBeer();
    //     }
    // }
    
    render() {
        const { beer } = this.state;
        console.log('this.state.beer inside the render: ', beer)
        if (!beer) return <></>;
        return (
            <>
                <img src={beer.image_url} alt={beer.name} height="250px" />
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>{beer.attenuation_level}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </>
        );
    }
}
 
export default BeerDetail;