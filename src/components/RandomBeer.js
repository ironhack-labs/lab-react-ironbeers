
import React from "react";
import axios from "axios";

//get a random beer from the API (the API does the work for us when we query 'random' to it)

class RandomBeer extends React.Component {
    state = {
        image: "",
        name: "",
        tagline: "",
        first_brewed: "",
        attenuation_level: "",
        description: "",
        contributed_by: "",
    };

    //compontentDidMount is ALLWAYS where we call APIs
    async componentDidMount() {
        
        // const _id = this.props.match.params.id;
        const element = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`
        );
        
        this.setState({
          image: element.data.image_url,
          name: element.data.name,
          tagline: element.data.tagline,
          first_brewed: element.data.first_brewed,
          attenuation_level: element.data.attenuation_level,
          description: element.data.description,
          contributed_by: element.data.contributed_by,
        });

    }

    //PURPOSE is to have the link update superfast (reactive!) 🏎 ...without needing to do a refresh page
    async componentDidUpdate(prevProps){
        // 🚨 We can do the setState() immediately in componentDidUpdate(), but MUST wrap in IF-statement to prevent infinite loop
        // const _id = this.props.match.params.id
        const element = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random}`)
        if (this.props !== prevProps){
            this.setState({
                image: element.data.image_url,
                name: element.data.name,
                tagline: element.data.tagline,
                first_brewed: element.data.first_brewed,
                attenuation_level: element.data.attenuation_level,
                description: element.data.description,
                contributed_by: element.data.contributed_by,
            })
            console.log("try")
        }
        console.log("component did update")
    }

    render() {
        console.log("IN render");
        const { image, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state;
        return (
        <section className="detail-beer-horizontal">
                <img className="list-beer-img" src={image} alt="placeholder" />
            <div>
                <h3>This is a random beer from the API:</h3>
                <h4>{name}</h4>
                <p>{tagline}</p>
                <p>Inception: {first_brewed}</p>
                <p>Attenuation: {attenuation_level}</p>
                <p>{description}</p>
                <p>{contributed_by}</p>
            </div>
        </section>
        );
    }

};

export default RandomBeer;