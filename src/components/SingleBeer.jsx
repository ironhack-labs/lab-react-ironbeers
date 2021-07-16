import React, { Component } from 'react'
import axios from 'axios'

class SingleBeer extends Component {

    state = {
        singleBeer: null
    }

    async componentDidMount(){
        try {
            console.log(this.props)
            let id = this.props.match.params.id
            let response = await axios.get (`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            this.setState({
                singleBeer: response.data
            })
        }
        catch(err) {
            console.log('Single Beer fetch failed', err)
        }
    }

    render() {
        const {singleBeer} = this.state
        if (!singleBeer) {
            return (
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
              </div>
            )
        }
        return (
            <div>
                <div className="card" styles="width: 18rem;">
                    <img src={`${singleBeer.image_url}`} className="card-img-top" alt="..." style={{ width: 100}}/>
                    <div className="card-body">
                        <h5 className="card-title">{singleBeer.name} </h5>
                        <p className="card-text">{singleBeer.tagline}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{singleBeer.first_brewed}</li>
                        <li className="list-group-item">{singleBeer.attenuation_level}</li>
                        <li className="list-group-item">{singleBeer.description}</li>
                    </ul>
                    <div className="card-body">
                        <p>{singleBeer.contributed_by}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleBeer;