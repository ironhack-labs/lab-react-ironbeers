import React from 'react';
import axios from "axios";
import '../App.css';

class NewBeer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tagline: "",
            description: "",
            firstBrewed: "",
            brewersTips: "",
            attenuationLevel: "",
            contributedBy: "",
            image: "",
            imagePreview: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        console.log(event.target.value, event.target.name)
        // console.log(event.target.files[0])
        // Ici pour uploader l'image
        // let value = event.target.type === "file" ? event.target.files[0] : event.target.value
        // Même chose en ternaire que ci-dessous :
        let value = 0;
        if (event.target.type === "file") {
            value = event.target.files[0];
            // on ajoute le preview de l'image avant submitting
            if (typeof value === 'object') {
                const objectURL = URL.createObjectURL(event.target.files[0])
                this.setState({ imagePreview: objectURL })
            } else {
                // Important to do this, otherwise we cannot reset it when cancelling
                this.setState({ imagePreview: "" })
            }

        } else {
            value = event.target.value;
        }
        // let value = event.target.value;
        let key = event.target.name
        this.setState({ [key]: value })
    }

    handleSubmit(event) {
        event.preventDefault();
        // On renvoie le nouvel objet créé au parent ListBeers.jsx grâce à une callback
        // this.props.callback(this.state);
        const newBeer = this.state;
        console.log(newBeer)
        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then((apiResponse) => {
                console.log(apiResponse);
                // On revient à la page des bières
                this.props.history.push("/beers");
            })
            .catch((apiError) => {
                console.log(apiError)
            })
    }



    render() {
        return (
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>

                <div>
                    <label htmlFor="tagline">Tagline</label>
                    <input type="text" id="tagline" name="tagline" />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" />
                </div>

                <div>
                    <label htmlFor="firstBrewed">First Brewed</label>
                    <input type="text" id="firstBrewed" name="firstBrewed" />
                </div>

                <div>
                    <label htmlFor="brewersTips">Brewers Tips</label>
                    <input type="text" id="brewersTips" name="brewersTips" />
                </div>

                <div>
                    <label htmlFor="attenuationLevel">Attenuation Level</label>
                    <input type="number" id="attenuationLevel" name="attenuationLevel" placeholder="Must be a number" />
                </div>

                <div>
                    <label htmlFor="contributedBy">Contributed By</label>
                    <input type="text" id="contributedBy" name="contributedBy" />
                </div>

                <div>
                    <label htmlFor="image">Image</label>
                    <input type="file" id="image" name="image" />
                    {/* Preview of the image */}
                    <p>
                        <img style={{ height: "100px" }} src={this.state.imagePreview} alt="Beer" />
                    </p>
                </div>

                <button>Submit</button>

            </form>
        )
    }
}

export default NewBeer
