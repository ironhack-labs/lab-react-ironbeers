import axios from "axios"
import { Component } from "react"
import { useParams } from "react-router"

export function SingleBeerWrapper() {
    const params = useParams()

    return  <SingleBeer beerId={params.id} />;

}

class SingleBeer extends Component{
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
        
        if (this.state.beer === undefined){
            return <div>Loading...</div>
        }

            return (
                <div>
                 User Detail
                </div>
            )
    }
}

export default SingleBeer