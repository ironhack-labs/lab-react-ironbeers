import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const NewBeer = () =>{


    const[formData,setFormData] = useState({

        name: "",
        tagline: "",
        description: "",
        first_brewed:"",
        brewers_tips:"",
        attenuation_level:0,
        contributed_by : "",

     })

     let history = useHistory()


     const handleChange = (e)=>{
        
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
        history.push("/beers")
     }

     

    return(
        <div className="formContainer">
            <form  action="https://ih-beers-api2.herokuapp.com/beers/new"  method="POST" >

                <label htmlfor="name">Name:</label>
                <input type="text" name="name" value={formData.name} onChange= {handleChange}/>

                <label htmlfor="tagline">Tagline:</label>
                <input type="text" name="tagline" value={formData.tagline} onChange= {handleChange}/>

                <label htmlfor="description">Description:</label>
                <input type="text" name="description" value={formData.description} onChange= {handleChange}/>

                <label htmlfor="first_brewed">First Brewed:</label>
                <input type="text" name="first_brewed" value={formData.first_brewed} onChange= {handleChange}/>

                <label htmlfor="brewers_tips">Brewer tips:</label>
                <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange= {handleChange}/>

                <label htmlfor="attenuation_level">Attenuation level:</label>
                <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange= {handleChange}/>

                <label htmlfor="contributed_by">Contributedby:</label>
                <input type="text" name="contributed_by" value={formData.contributed_by} onChange= {handleChange}/>

                <button type="submit" id="submit-btn">Create Beer</button>
            </form>
        </div>
        
    )
}

export default NewBeer