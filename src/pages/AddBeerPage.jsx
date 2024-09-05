import { useState } from 'react';
import axios from "axios";


function AddBeerPage() {
    const [formInfo, setFormInfo] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
      });

      const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormInfo({
            ...formInfo,
            [name]: value,
        });
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", formInfo)
        .then(response => {
            console.log(response.data);
            alert("Beer has successfully been added!");
          })
          .catch(error => {
            console.error("There was an error while creatin the beer!", error);
          });
      };
    
      return (
            <div>
              <h1>add a new beer</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input 
                    name="name" 
                    type="text" 
                    value={formInfo.name} 
                    onChange={handleInputChange} 
                    required 
                  />
                </label>
                <br />
        
                <label>
                  Tagline:
                  <input 
                    name="tagline" 
                    type="text" 
                    value={formInfo.tagline} 
                    onChange={handleInputChange} 
                    required 
                  />
                </label>
                <br />
        
                <label>
                  Description:
                  <textarea 
                    name="description" 
                    value={formInfo.description} 
                    onChange={handleInputChange} 
                    required 
                  />
                </label>
                <br />
        
                <label>
                  First Brewed:
                  <input 
                    name="first_brewed" 
                    type="text" 
                    value={formInfo.first_brewed} 
                    onChange={handleInputChange} 
                    required 
                  />
                </label>
                <br />
        
                <label>
                  Brewer's Tips:
                  <input 
                    type="text" 
                    name="brewers_tips" 
                    value={formInfo.brewers_tips} 
                    onChange={handleInputChange} 
                    required 
                  />
                </label>
                <br />
        
                <label>
                  Attenuation Level:
                  <input 
                    type="number" 
                    name="attenuation_level" 
                    value={formInfo.attenuation_level} 
                    onChange={handleInputChange} 
                    required 
                  />
                </label>
                <br />
        
                <label>
                  Contributed By:
                  <input 
                    type="text" 
                    name="contributed_by" 
                    value={formInfo.contributed_by} 
                    onChange={handleInputChange} 
                    required 
                  />
                </label>
                <br />
        
                <button type="submit">Add a Beer</button>
              </form>
            </div>
          );
        }

export default AddBeerPage;
