import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function NewBeerPage(props) {
    const [formState, setFormState ] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '0',
        contributed_by: '',                                
    });

    const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/new';

    const navigate = useNavigate();     

    const handleSetFormState = event => setFormState({
        ...formState,
        [event.target.name]: event.target.value
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name: formState.name, tagline: formState.tagline, description: formState.description, 
            first_brewed: formState.first_brewed, brewers_tip: formState.brewers_tips, 
            attenuation_level: formState.attenuation_level, contributed_by: formState.contributed_by };
        const postData = async ()=> {
            const responseData = await fetch(apiUrl, {
                method: 'POST', 
                cache: 'no-cache', 
                credentials: 'same-origin',
                headers: {
                  'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer', 
                body: JSON.stringify(data) 
              })
            const responseCall = await responseData.json()
            // console.log(responseCall); 
        }
        postData();
        navigate('/');
    }; 

    return (
        <>
        {props.children}
<div className="container mw-100 m-0 p-0">
      <div className="new-beer-form pl-5 pr-5">
        <form onSubmit={handleSubmit}>
        <div className="new-beer-form form-group pt-4">
            <label>Name</label>
            <input
                type="text"
                className="form-control pb-2 mb-3"
                name="name"
                onChange={handleSetFormState}
                value={formState.name}
            />
            <label>Tagline</label>
            <input
                type="text"
                className="form-control pb-2 mb-3"
                name="tagline"
                onChange={handleSetFormState}
                value={formState.tagline}
            />
        
            <label>Description</label>
            <textarea
                name="description"
                className="form-control pb-2 mb-3"
                onChange={handleSetFormState}
                value={formState.description}
            />
            <label>First Brewed</label>
            <input
                type="text"
                className="form-control pb-2 mb-3"
                name="first_brewed"
                onChange={handleSetFormState}
                value={formState.first_brewed}
            />
        
            <label>Brewers Tips</label>
            <input
                type="text"
                className="form-control pb-2 mb-3"
                name="brewers_tips"
                onChange={handleSetFormState}
                value={formState.brewers_tips}
            />                                              
            <label>Attenuation Level</label>
            <input
                type="number"
                className="form-control pb-2 mb-3"
                name="attenuation_level"
                onChange={handleSetFormState}
                value={formState.attenuation_level}
            />
            <label>Contributed by</label>
            <input
                type="text"
                className="form-control pb-2 mb-3"
                name="contributed_by"
                onChange={handleSetFormState}
                value={formState.contributed_by}
            />              
            <button type="submit" className="btn btn-primary w-100 mt-4">ADD NEW</button>
        </div>    
        </form>
      </div>
</div>
</>
    );
  }
   
  export default NewBeerPage;