import React, {Component} from 'react'
import Services from '../services/beer.services'
import Card from  './beer-card'
import { Link } from 'react-router-dom'

class RandomBeer extends Component {
    constructor () {
        super()
        this.state = {beer: {}}
        this.services = new Services()
    }

    // componentDidMount(){
    //     this.services.getRandomBeer()
    //     .then(response => {
    //         console.log(response.data)
    //         this.setState({ beer: response.data })})
    //     .catch(err => console.log('err', err))
    // }

    render(){
        return (
            <div>
                <h1>hola</h1>
            <Link to={`/${this.state.beer._id}`}><Card {...this.state.beer}/></Link>
            </div>

        )
    
    }
}

export default RandomBeer