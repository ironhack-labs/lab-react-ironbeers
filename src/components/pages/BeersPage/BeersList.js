import React from "react";
import BeersService from "../../../services/beers.service"
import BeerItem from "../../../components/pages/BeersPage/BeerItem"
import { Container, Col, Row, CardGroup } from "react-bootstrap";


class BeersList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            beers: null
        }
        this.beersService = new BeersService()
    }

    refreshBeers = () => {
        this.beersService.getBeers()
        .then(res => {
            this.setState({
                ...this.state,
                beers: res.data
            })
        })
        .catch(err => console.error(err))
    }

    componentDidMount() {
        this.refreshBeers()
    }

    componentDidUpdate() {
        this.beersService.searchBeer(this.props.searchedTerm)
        .then((res) => {
            this.setState({
                ...this.state,
                beers: res.data
            })
        })
        .catch(err => console.error(err))
    }

    displayBeers = () => {
        return (
            this.state.beers?.length > 0 ?
                this.state.beers.map(beer => {
                    return (
                        <Col sm={"12"} md={"3"}>
                            <CardGroup>
                                <BeerItem allBeers key={beer._id} {...beer}/>
                            </CardGroup>
                        </Col>
                    )
                }) :
                <p>Loading...</p>
        )
    }

    render() {
        return ( 
            <div>
                <Container>
                    <Row>
                    {this.displayBeers()}
                    </Row>
                </Container>
            </div>
         )
    }
}

export default BeersList;