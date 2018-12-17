import React, { Component } from 'react'
import {All} from '../services/beersApi'

class AllB extends Component {
    state = {
        beers: []
    }

    componentDidMount(){
        All()
            .then(beers => {
                this.setState({beers})
            })
            .catch(e=>console.log(e))
    }

    render() {
        const {beers} = this.state
        return (
            <div className="page-container">
                <div>{beers.map((beer, index)=>{
                    return <div key={index}>
                                <div>
                                    <img style={{width:"150px"}} src={beer.image_url} alt="beer"/>
                                    <div>
                                        <div>
                                            <h2>{beer.name}</h2>
                                            <p>{beer.description}</p>
                                            <small>{beer.contributed_by}</small>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                })}</div>
            </div>
        )
    }
}

export default AllB