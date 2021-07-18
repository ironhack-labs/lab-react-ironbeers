import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
class RandomBeer extends React.Component {
    state = {
    image: [],
    name: [],
    tagline: [],
    first_brewed: [],
    attenuation_level: [],
    description: [],
    contributed_by: [],
    }


    async componentDidMount() {

        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');

        this.setState({
            image: response.data.image_url,
            name: response.data.name,
            tagline: response.data.tagline,
            first_brewed: response.data.first_brewed,
            attenuation_level: response.data.attenuation_level,
            description: response.data.description,
            contributed_by: response.data.contributed_by,

        })
    }



    render() {
        const { image, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state;
        return (

            <>
                <Navbar />
            <Card className="card">
                <img className="card-img" top width="100%" src={image} alt="picsbeer" />
                <CardContent>
                    <CardContent tag="h5">{name}</CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{tagline}</Typography>
                    <Typography className="card-text">{first_brewed}</Typography>
                    <Typography className="card-text">{attenuation_level}</Typography>
                    <Typography className="card-text">{description}</Typography>
                    <Typography className="card-text">{contributed_by}</Typography>

                </CardContent>
            </Card>

            </>

        )
    }
}

export default RandomBeer;