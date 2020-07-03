import React, { PureComponent } from 'react'
import axios from 'axios'
import './SingleBeer.css'

class SingleBeer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            beers: {}
        }
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.props.match.params.id}`).then(res => {
            this.setState(
                { beers: res.data }
            )
            console.log(this.state.beers)
        })
    }

    render() {
        return (
            <div className='sb'>
                <img src={this.state.beers[0]?.image_url} alt='picture' className='b-img' />
                <h1>{this.state.beers[0]?.name}</h1>
                <p>{this.state.beers[0]?.tagline}</p>
                <article>{this.state.beers[0]?.description}</article>
                <p>{this.state.beers[0]?.contributed_by}</p>
            </div>
        )
    }
}

export default SingleBeer