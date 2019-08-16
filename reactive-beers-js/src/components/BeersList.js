import React, {Component} from 'react'
import Services from '../services/BeerServices'
import BeerCard from './BeerCard'

class BeersList extends Component{
    constructor() {
        super()
        this.state = { beers: [] }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <div className="container">

                    <h1>Beer's List</h1>

                    <div className="row ">

                        {this.state.beers.map(beer => <BeerCard key={beer._id} {...beer} />)}

                    </div>
                </div>
            </>
        )
    }
}
 


export default BeersList