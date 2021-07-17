import React from "react";
import axios from "axios";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

class BeerDetails extends React.Component {
    state = {
        image: "",
        name: "",
        tagline: "",
        first_brewed: "",
        attenuation_level: "",
        description: "",
        contributed_by: "",
    };

    
    async componentDidMount() {
        
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params._id}`
        );
        
        this.setState({
            image: response.data.img_url,
            name: response.data.name,
            tagline: response.data.tagline,
            first_brewed: response.data.first_brewed,
            attenuation_level: response.data.attenuation_level,
            description: response.data.description,
            contributed_by: response.data.contributed_by
        });

    }

    async componentDidUpdate(prevProps){
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params._id}`)
        if (this.props !== prevProps){
            this.setState({
                image: response.data.img_url,
                name: response.data.name,
                tagline: response.data.tagline,
                first_brewed: response.data.first_brewed,
                attenuation_level: response.data.attenuation_level,
                description: response.data.description,
                contributed_by: response.data.contributed_by
            })
            console.log("try")
        }

    }

    render() {
        console.log("IN render");
        const { name, tagline, first_brewed, attenuation_level, description, contributed_by, image } = this.state;
        return (
            <div>
            <Card>
              <CardImg top width="100%" src={image} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{tagline}</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{first_brewed}</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{attenuation_level}</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{contributed_by}</CardSubtitle>

                <CardText>{description}</CardText>
              </CardBody>
            </Card>
          </div>
            

        );
    }

};

export default BeerDetails;