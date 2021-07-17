import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";



import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';


class BeersList extends React.Component {
    state = {
        beers: [],
    };

    async componentDidMount() {

        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        this.setState({
            beers: response.data,
        });
    }

    componentDidUpdate(prevProps) {

        if (this.props._id !== prevProps) {
        }
    }

    render() {
        const { beers } = this.state;
        return (
            <>
                <h1>Beers list</h1>
                <ul style={{height:"600px", overflow:"scroll"}}>
                    {beers && beers.length ? (
                        this.state.beers.map((beer) => {
                            return (
                                <>
                                    <div className="cards" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                        <Card key={beer._id}>
                                        <Link to={`/${beer._id}`}>{beer.name}<CardImg top width="20%" src={beer.image_url} alt="Card image cap" /></Link>
                                            <CardBody>
                                                <CardTitle tag="h5">{beer.name}</CardTitle>
                                                <CardText>Created by: {beer.contributed_by}</CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </>
                            )
                        })
                    ) : (
                        <p style={{ color: "red" }}>Loading...</p>
                    )}
                </ul>
            </>
        );
    }
}
export default BeersList;
