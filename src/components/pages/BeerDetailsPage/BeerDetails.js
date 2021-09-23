import React from "react";
import BeersService from "../../../services/beers.service"
import BeerItem from "../BeersPage/BeerItem"
import { Container } from "react-bootstrap";


class BeerDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            beer: null,
        }
        this.beersService = new BeersService()
    }

    refreshBeer = (type, id) => {

        if (type==="random") {
            this.beersService.getRandomBeer()
                .then(res => {
                        this.setState({
                        ...this.state,
                        beer: res.data
                    }) 
                })
                .catch(err => console.error(err))
        }
        else if (type==="details") {
            this.beersService.getOneBeer(id)
                .then(res => {
                    this.setState({
                        ...this.state,
                        beer: res.data
                    }) 
                })
                .catch(err => console.error(err))
        }
        }

    componentDidMount() {
        if(this.props.type === "details") {
            const { id } = this.props.match.params;
            this.refreshBeer(this.props.type, id)
        } else {
            this.refreshBeer(this.props.type)
        }
    }

    displayBeer = () => {
        return (
            this.state.beer ?
                <BeerItem random {...this.state.beer} />
            :
            <p>Loading...</p>
        )
    }

    render() {
        return (
            <div>
                <Container>
                    {this.displayBeer()}
                </Container>
            </div>
        )
    }
}

export default BeerDetails;