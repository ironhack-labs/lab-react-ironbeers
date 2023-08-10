import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/constants";
import Header from "../components/Header";

const initialForm = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by:'',
}

const NewBeer = () => {
    const [ formData, setFormData] = useState(initialForm) 
    
    const navigate = useNavigate()

    const handleForm = (inputName, value) => {
        setFormData((prevData) => ({...prevData, [inputName]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = formData
        const submitForm = async () => {
            await axios.post(baseUrl + "/new", body)
            setFormData(initialForm)
            navigate("/beers")
        }
        submitForm()
    }

    return (
        <div>
            <Header />
            <h3 style={{textAlign: "center"}}> Add a new Beer! </h3>

            <form onSubmit={handleSubmit} className="beer-form">
                <div className="form-group"><label>Name </label>
                    <input 
                    onChange={(e) => handleForm('name', e.target.value)}
                    type="text" 
                    name="name"
                    id="name"
                    value={formData.name}/>
                </div>
                <br />

                <div className="form-group">
                    <label>Tagline </label>
                    <input 
                    onChange={(e) => handleForm('tagline', e.target.value)}
                    type="text" 
                    name="tagline"
                    id="tagline"
                    value={formData.tagline}/>
                </div>

                <br />
                <div className="form-group">
                <label>Description </label>
                    <input 
                    onChange={(e) => handleForm('description', e.target.value)}
                    type="text" 
                    name="description"
                    id="description"
                    value={formData.description}
                    className="description-input"
                    />
                </div>

                <br />
                <div className="form-group">
                <label>First brewed </label>
                <input 
                onChange={(e) => handleForm('first_brewed', e.target.value)}
                type="text" 
                name="first_brewed"
                id="first_brewed"
                value={formData.first_brewed}/>
                </div>

                <br />

                <div className="form-group">
                <label>Brewers tips: </label>
                <input 
                onChange={(e) => handleForm('brewers_tips ', e.target.value)}
                type="text" 
                name="brewers_tips "
                id="brewers_tips "
                value={formData.brewers_tips }/>
                </div>

                <br />
                <div className="form-group">
                <label>Attenuation level </label>
                <input 
                onChange={(e) => handleForm('attenuation_level', e.target.value)}
                type="text" 
                name="attenuation_level"
                id="attenuation_level"
                value={formData.attenuation_level}/>
                </div>
                <br />

                <div className="form-group"> 
                <label>Contributed by </label>
                <input 
                onChange={(e) => handleForm('contributed_by', e.target.value)}
                type="text" 
                name="contributed_by"
                id="contributed_by"
                value={formData.contributed_by}/>
                </div>

                <br />
                <button type="submit" className="submit-button">
                    Add Beer
                </button>
                
            </form>
        </div>
    )
}

export default NewBeer;