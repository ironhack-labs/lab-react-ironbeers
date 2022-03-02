import axios from "axios"
import { Component } from "react"
import { useParams } from "react-router"

export function SingleBeerWrapper() {
    const params = useParams()

    return <SingleBeer beerId={params.id} />;

}

class SingleBeer extends Component {
    state = {
        beer: undefined
    }
    componentDidMount() {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.beerId}`)
            .then((response) => {
                this.setState({
                    beer: response.data
                })
            })
    }

    render() {
        const { beer } = this.state
        if (this.state.beer === undefined) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <div className='d-flex mt-4' key={beer.name} style={{ width: 'auto' }}>
                    <div className='w-25'>
                        <img className='img-responsive' style={{ width: '50px' }} src={beer.image_url} alt={beer.name} />
                    </div>
                    <div className='w-75 ms-5 d-flex'>
                        <div className="w-50 justify-content-start">
                            <h5>{beer.name}</h5>
                            <p style={{ color: 'grey' }}>{beer.tagline}</p>
                        </div>
                        <div className="w-50">
                            <h5 style={{ color: 'grey' }}>{beer.attenuation_level}</h5>
                            <small className="fw-bold"> {beer.first_brewed}</small>
                        </div>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <p>{beer.description}</p>
                </div>
            </div>
        )
    }
}

export default SingleBeer