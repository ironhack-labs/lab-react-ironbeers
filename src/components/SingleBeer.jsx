import React, { Component } from 'react'
import Header from './Header'

export class SingleBeer extends Component {
    render() {
        const beer = this.props.location.state
        console.log(beer)
        return (
            <div>
                <Header />
                <div className='d-flex flex-column'>
                    <div>
                        <img src={beer.image_url} alt={beer.name} />
                    </div>    
                </div> 
            </div>
        )
    }
}

export default SingleBeer
