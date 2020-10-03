import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class Beers extends React.Component {

    state = {
        beers: []
    }

    componentDidMount() {
        Axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            const data = [...response.data]
            this.setState({
                beers: data
            })
            
        })        
    }

    render(){

        if(this.state.beers.length>0) {
            
            return this.state.beers.map((beer) => {
                return (
                    <Link to={`/show/${beer._id}`}>
                        <div className="card mb-3" style={{maxWidth: 540}}>
                            <div className="row no-gutters">
                                <div className="col-4" >
                                    <img src={beer.image_url} className="card-img" style={{maxHeight: 265}}alt={beer.name}/>
                                </div>
                                <div className="col-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{beer.name}</h5>
                                        <p className="card-text text-muted">{beer.tagline}</p>
                                        <p className="card-text"><small><strong>Contributed by:</strong> {beer.contributed_by}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })           
        } else {
            return (<div>Loading</div>)
        }
    }
}

export default Beers;