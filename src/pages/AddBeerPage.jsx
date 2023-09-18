import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function AddBeerPage() {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("");
    const [tips, setTips] = useState("");
    const [attLevels, setAttLevels] = useState("");    
    const [by, setBy] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (element) => {
        element.preventDefault();

        try {
            const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
                image_url: image,
                name: name,
                tagline: tagline,
                description: description,
                first_brewed: firstBrewed,
                brewers_tips: tips,
                attenuation_level: attLevels,
                contributed_by: by
            });
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
        navigate('/beers')
    }

    return(
        <>
        <h1>Add new Beer </h1>

        <form onSubmit={handleSubmit}>

        <label>
                Name:
            </label>
            <input 
            type="text"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            />
            <br/>

            <label>
                Image:
            </label>
            <input 
            type="text"
            name="image"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => {setImage(e.target.value)}}
            />
            <br/>

            <label>
                Tagline:
            </label>
            <input 
            type="text"
            name="tagline"
            placeholder="Enter Tagline"
            value={tagline}
            onChange={(e) => {setTagline(e.target.value)}}
            />
            <br/>

            <label>
                Description:
            </label>
            <textarea 
            type="text"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => {setDescription(e.target.value)}}
            />
            <br/>

            <label>
            First Brewed:
            </label>
            <input 
            type="text"
            name="first_brewed"
            placeholder="Enter date of First Brew"
            value={firstBrewed}
            onChange={(e) => {setFirstBrewed(e.target.value)}}
            />
            <br/>

            <label>
            Brew's Tips:
            </label>
            <input 
            type="text"
            name="brewers_tips"
            placeholder="Enter Brew's Tips"
            value={tips}
            onChange={(e) => {setTips(e.target.value)}}
            />
            <br/>

            <label>
            Attenuation Levels:
            </label>
            <input 
            type="number"
            name="attenuation_level"
            placeholder="Enter Attenuation Levels"
            value={attLevels}
            onChange={(e) => {setAttLevels(e.target.value)}}
            />
            <br/>

            <label>
            Contributed By:
            </label>
            <input 
            type="text"
            name="contributed_by"
            placeholder="Enter Attenuation Levels"
            value={by}
            onChange={(e) => {setBy(e.target.value)}}
            />
            <br/>

            <button>Add Beer</button>
        </form>
        </>
    )
}

export default AddBeerPage;