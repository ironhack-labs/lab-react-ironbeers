import React from 'react';
import { NavLink } from 'react-router-dom';
import beersImage from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Homepage = () => {
    return (
        <>
            <Card>
                <img top width="100%" src={beersImage} alt="beers" />
                <CardContent>
                    <NavLink className="card-link" to={'/beers'}><Typography tag="h3">All Beers</Typography></NavLink>

                    <Typography className="card-text">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages
                        , and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.</Typography>

                </CardContent>
            </Card>
            <Card>
                <img top width="100%" src={randomBeer} alt="new-beer" />
                <CardContent>
                    <Typography tag="h3"><NavLink className="card-link" to={'/random-beer'}>Random Beer</NavLink></Typography>

                    <Typography className="card-text">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages
                        , and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.</Typography>

                </CardContent>
            </Card>
            <Card>
                <img top width="100%" src={newBeer} alt="new-beer" />
                <CardContent>
                    <Typography tag="h3"><NavLink className="card-link" to={'/new-beer'}>New Beer</NavLink></Typography>

                    <Typography className="card-text">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages
                        , and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.</Typography>

                </CardContent>
            </Card>


        </>
    );
}

export default Homepage;