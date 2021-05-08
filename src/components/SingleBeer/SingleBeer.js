import React from 'react'
import axios from 'axios'

import NavBar from '../NavBar'

class SingleBeer extends React.Component{
    
    state = {
        beer: 0
    }

    componentDidMount(){
        if(this.props.random){
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((result) => {
                this.setState({...this.state, beer: result.data})
                console.log(result.data)
            })
            .catch((err) => {
                console.log(err)
            })
        } else {
            const id = this.props.match.params._id
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((result) => {
                this.setState({...this.state, beer: result.data})
                console.log(result.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
      }

    getSingleBeer(){
        const beer = this.state.beer
        if (beer !== 0){
            return (
                <div>
                    <div className="beer">
                        <div className="beer-img beer-details"><img src={beer.image_url} alt={beer.name+'-img'} /></div>
                        <div className="beer-data">
                            <h2>{beer.name}</h2>
                            <h4>{beer.tagline}</h4>
                            <h4>{beer.first_brewed}</h4>
                            <h4>{beer.attenuation_level}</h4>
                            {beer.description}
                            <h6><strong>Created by: </strong>{beer.contributed_by}</h6>
                        </div>
                    </div>
                    <hr />
                </div>
            )
        } else {
            return <div><i className="material-icons loading-icon">sync</i>Loading</div>
        }
    }

    render() {
        return(
            <div className="Beers">
                <NavBar />
                <div className="body">
                    {this.getSingleBeer()}
                </div>
            </div>
        )
    }
}

export default SingleBeer
