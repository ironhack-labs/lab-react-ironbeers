import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

class BeerDetail extends React.Component {
state = {
image: '',
name: '',
tagline: '',
first_brewed: '',
attenuation_level: '',
description: '',
contributed_by: '',
}

    async componentDidMount() {
        const beerId = this.props.match.params.id
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        console.log('checking', response.data)

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


render(){
    const { image, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state;
    return (
        <>
        <Navbar />
        


            <Card className="card">
                <CardImg className="card-img" top width="100%" src={image} alt="beer" />
                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{tagline}</CardSubtitle>
                    <CardText className="card-text">{first_brewed}</CardText>
                    <CardText className="card-text">{attenuation_level}</CardText>
                    <CardText className="card-text">{description}</CardText>
                    <CardText className="card-text">{contributed_by}</CardText>

                </CardBody>
            </Card>




        </>
    )
}




}

export default BeerDetail;