import { useState } from "react"; 
import axios from 'axios';
import NavBar from './NavBar';  

function NewBeer() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [brewed, setBrewed] = useState(''); 
    const [tips, setTips] = useState(''); 
    const [level, setLevel] = useState(0); 
    const [contr, setContr] = useState('');  

    const handleSubmit = (e) => {               
        e.preventDefault();
        const body = { name: name, tagline: tagline, description: description, first_brewed: brewed, brewers_tips: tips, attenuation_level: level, contributed_by: contr };
        
        axios
          .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
          .then((response) => {
            // Reset the state
            setName('');
            setTagline('');
            setDescription('');
            setBrewed('');
            setTips('');
            setLevel(0);
            setContr('');
          });
      };
    return (
        <>
            <NavBar />
            <h2>New Beer</h2>
            <form onSubmit={handleSubmit} className="formNewBeer">
            
                <label htmlFor="name">Name</label>
                <input  onChange={(e) => setName(e.target.value)}
          value={name} type="text" name="name" />

                <label htmlFor="tagline">Tagline</label>
                <input  onChange={(e) => setTagline(e.target.value)}
          value={tagline} type="text" name="tagline"/>

                <label htmlFor="description">Description</label>
                <input onChange={(e) => setDescription(e.target.value)}
          value={description} type="text" name="description"/>

                <label htmlFor="brewed">First Brewed</label>
                <input onChange={(e) => setBrewed(e.target.value)}
          value={brewed} type="text" name="brewed"/>

                <label htmlFor="tips">Brewers Tips</label>
                <input onChange={(e) => setTips(e.target.value)}
          value={tips} type="text" name="tips"/>

                <label htmlFor="level">Attenuation Level</label>
                <input onChange={(e) => setLevel(e.target.value)}
          value={level} type="number" name="level"/>

                <label htmlFor="contr">Contributed By</label>
                <input onChange={(e) => setContr(e.target.value)}
          value={contr} type="text" name="contr"/>

                <button type="submit">ADD NEW</button>
            </form>
        </>
    )
}

export default NewBeer;