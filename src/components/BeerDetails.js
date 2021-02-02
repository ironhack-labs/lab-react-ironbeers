import React from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

class BeerDetails extends React.Component {

    state = {
        beers: []
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
        .then(response => {
            this.setState({beers: response.data})
        })
    }




    // console.log(props)
    // console.log(props.match.params.beerId)
    // console.log(props.location.beers.beerDetails)
    // console.log(props.beers)
    // getProject = (id) => {
    //     const theProject = oneProject => {
    //       return oneProject.id === id;
    //     }
    //     return this.state.beers.find(theProject)
    //   };

    

    render() {
        console.log(this.props.match.params.beerId)
        console.log(this.state.beers)
        const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.beers;
        // const foundProject = this.getProject(params._id);
        // console.log(foundProject)

    return (
      <div>
        <Navbar />
        <div className='container'>
            <div className='beerDetailImg'>
            <img src={image_url} alt={name} />
            <div className='beerDetail'>
                <h1>{name}</h1>
                <h1 style={{ color: 'gray' }}>{attenuation_level}</h1>
            </div>
            <div className='beerDetail'>
                <h3 style={{ color: 'gray' }}>{tagline}</h3>
                <h3>
                <strong>{first_brewed}</strong>
                </h3>
            </div>
            <p>{description}</p>
            <p style={{ color: 'gray' }}>{contributed_by}</p>
            </div>
            <Link to='/beers'>Back</Link>
        </div>
      </div>
    );
}
}

export default BeerDetails
