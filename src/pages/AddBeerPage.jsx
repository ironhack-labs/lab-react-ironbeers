import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function AddBeerPage() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [brewed, setBrewed] = useState('');
    const [tips, setTips] = useState('');
    const [attenuation, setAttenuation] = useState(0);
    const [contributed, setContributed] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const body = {name: name, tagline: tagline, description: description, first_brewed: brewed, brewers_tips: tips, attenuation_level: attenuation, contributed_by: contributed};
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
        .then(()=>{
            setName('');
            setTagline('');
            setDescription('');
            setBrewed('');
            setTips('');
            setAttenuation(0);
            setContributed('');
            navigate('/beers');
        });
    };
    return(
        <div className='form-beer'>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="name">Name
                        <input type="text" class="form-control"  name="name" id="name" onChange={(e)=>{setName(e.target.value)}} value={name}/>
                    </label>
                </div>
                <div class="form-group">
                    <label for="tagline">Tagline
                        <input type="text" class="form-control"  name="tagline" id="tagline" onChange={(e)=>{setTagline(e.target.value)}} value={tagline}/>
                    </label>
                </div>
                <div class="form-group">
                    <label for="description">Description
                        <textarea type='text' class="form-control" name='description' id="description" rows="3" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
                    </label>
                </div>
                <div class="form-group">
                    <label for="brewed">First Brewed
                        <input type="text" class="form-control" name="first_brewed" id="brewed" onChange={(e)=>{setBrewed(e.target.value)}} value={brewed}/>
                    </label>
                </div>
                <div class="form-group">
                    <label for="tips">Brewer's Tips
                        <input type="text" class="form-control" name="brewers_tips" id="tips" onChange={(e)=>{setTips(e.target.value)}} value={tips}/>
                    </label>
                </div>
                <div class="form-group">
                    <label for="attenuation">Attenuation Level
                        <input type="number" class="form-control" name="attenuation_level" id="attenuation" onChange={(e)=>{setAttenuation(e.target.value)}} value={attenuation}/>
                    </label>
                </div>
                <div class="form-group">
                    <label for="contributed">Contributed By
                        <input type="text" class="form-control" name="contributed_by" id="contributed" onChange={(e)=>{setContributed(e.target.value)}} value={contributed}/>
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Add Beer</button>
            </form>
        </div>
    )

}

export default AddBeerPage;