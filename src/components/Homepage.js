import React from 'react';
import { NavLink } from 'react-router-dom';
import beersImage from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const Homepage = () => {
    return (
        <>
            <Card>
                <CardImg top width="100%" src={beersImage} alt="beers" />
                <CardBody>
                    <NavLink className="card-link" to={'/beers'}><CardTitle tag="h3">All Beers</CardTitle></NavLink>

                    <CardText className="card-text">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages
                        , and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.</CardText>

                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={randomBeer} alt="new-beer" />
                <CardBody>
                    <CardTitle tag="h3"><NavLink className="card-link" to={'/random-beer'}>Random Beer</NavLink></CardTitle>

                    <CardText className="card-text">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages
                        , and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.</CardText>

                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={newBeer} alt="new-beer" />
                <CardBody>
                    <CardTitle tag="h3"><NavLink className="card-link" to={'/new-beer'}>New Beer</NavLink></CardTitle>

                    <CardText className="card-text">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages
                        , and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.</CardText>

                </CardBody>
            </Card>
           

        </>
    );
}

export default Homepage;
