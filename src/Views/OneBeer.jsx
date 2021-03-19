import React from 'react';
import axios from 'axios';
import OneBeerComp from './../Components/OneBeerComp';

class OneBeer extends React.Component {
    state = {
        beer: null
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
        .then(res => this.setState({beer : res.data}))
        .catch(err => console.log(err))
    }

    render() {
        const {beer} = this.state;

        return (
            <>
                {beer && 
                    <OneBeerComp beer={beer}/>
                } 
                
            </>
        )
    }

}

export default OneBeer
