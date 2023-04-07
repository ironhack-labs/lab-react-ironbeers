import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBeer = (props) => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [attenuationLevel, setAttenuationLevel] = useState('');
    const [contributedBy, setContributedBy] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the page from reloading

        const newBeer = {
            name,
            tagline, 
            description,
            first_brewed: firstBrewed, 
            brewers_tips: brewersTips, 
            attenuation_level: attenuationLevel, 
            contributed_by: contributedBy,
            image_url: 'https://via.placeholder.com/100x390/61dafb/000000?text=BEER'
        };

        axios.post(`${process.env.REACT_APP_APIURL}/new`, newBeer)
            .then( response => {
                props.callbackToLoadBeers();
                navigate('/beers');
            })
            .catch( error => {
                console.error('The beer could not be created: ', error)
            });
    }

    return(
        <section>
            <h1>🍺 ADD A NEW BEER 🍺</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-group mt-3">
                    <label className="text-light text-start" style={{width:'60%'}}>
                        Name:
                        <input type="text" className="form-control" name="name" value={name} onChange={(event) => { setName(event.target.value); }} />
                    </label>
                </div>

                <div className="form-group mt-3">
                    <label className="text-light text-start" style={{width:'60%'}}>
                        Tagline:
                        <input type="text" className="form-control" name="tagline" value={tagline} onChange={(event) => { setTagline(event.target.value); }} />
                    </label>
                </div>

                <div className="form-group mt-3">
                    <label className="text-light text-start" style={{width:'60%'}}>
                        Description:
                        <textarea className="form-control" name="description" value={description} onChange={(event) => { setDescription(event.target.value); }} />
                    </label>
                </div>

                <div className="form-group mt-3">
                    <label className="text-light text-start" style={{width:'60%'}}>
                        First Brewed:
                        <input placeholder="06/1999" type="text" className="form-control" name="first_brewed" value={firstBrewed} onChange={(event) => { setFirstBrewed(event.target.value); }} />
                    </label>
                </div>

                <div className="form-group mt-3">
                    <label className="text-light text-start" style={{width:'60%'}}>
                        Brewers Tips:
                        <textarea className="form-control" name="brewers_tips" value={brewersTips} onChange={(event) => { setBrewersTips(event.target.value); }} />
                    </label>
                </div>

                <div className="form-group mt-3">
                    <label className="text-light text-start" style={{width:'60%'}}>
                        Attenuation Level:
                        <input type="number" min={0} className="form-control" name="attenuation_level" value={attenuationLevel} onChange={(event) => { setAttenuationLevel(event.target.value); }} />
                    </label>
                </div>

                <div className="form-group mt-3">
                    <label className="text-light text-start" style={{width:'60%'}}>
                        Contributed By:
                        <input type="text" className="form-control" name="contributed_by" value={contributedBy} onChange={(event) => { setContributedBy(event.target.value); }} />
                    </label>
                </div>

                <button className="btn btn-info mt-5">ADD IT!!!</button>

            </form>
        </section>
    )

};

export default AddBeer;