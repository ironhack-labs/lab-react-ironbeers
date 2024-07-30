import { useState } from "react";

const AddBeerPage = () => {
 
    const [formData, setFormData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    })
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1 className="add-Beer-Title">Add Beer</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label htmlFor="tagline">Tagline:</label>
                    <input type="text" id="tagline" name="tagline" value={formData.tagline} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" value={formData.description} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label htmlFor="first_brewed">First brewed:</label>
                    <input type="text" id="first_brewed" name="first_brewed" value={formData.first_brewed} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label htmlFor="brewer_tips">Brewer's tips:</label>
                    <input type="text" id="brewer_tips" name="brewers_tips" value={formData.brewers_tips} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label htmlFor="attenuation_level">Attentuation Level:</label>
                    <input type="number" id="attenuation_level" name="attenuation_level" value={formData.attenuation_level} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label htmlFor="contributed_by">Contributed By:</label>
                    <input type="text" id="contributed_by" name="contributed_by" value={formData.contributed_by} onChange={handleInputChange} required/>
                </div>
                <button type="submit">Add Beer</button>
            </form>
        </div>
    )
}

export default AddBeerPage;
