import axios from 'axios'
import React from 'react'

class DetailsBeer extends React.Component {

    state = {
        beer: null,
    }

    componentDidMount() {
        const beerId = this.props.match.params.beerID
        console.log(beerId)

        axios.get(`http://localhost:3000/beers/${beerId}`)
        .then((resp) => {
            this.setState({beer : resp.data});
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        console.log(this.state.beer)

        if (this.state.beer === null) {
            return <div>Wait for it...</div>
        }

    return (
        <div>
            <h1>Details</h1>
            <ul>
                <li>{this.state.beer.name}</li>
                {/* <li>{this.state.beer.</li> */}
            </ul>
        </div>
    )
}
}

export default DetailsBeer
