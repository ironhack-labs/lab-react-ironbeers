import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';


function NewBeer(props) {

    const [foundBeer, setFoundBeer] = useState(null);

    const { beerId } = useParams();
    console.log('beedId', beerId);

    useEffect(() => {
        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new")
            .then((response) => {
                console.log('response.data', response.data);
                setFoundBeer(response.data)
            })
    }, [beerId] );


    return (
        <div>
        <Header />
        <h1>Beer Details</h1>

                    <div>
                        <img src={foundBeer.image_url} alt='beer' style={{ height: '200px'}} />
                    </div>
                    <div>
                        <h2>{foundBeer.name}</h2>
                        <h3>{foundBeer.tagline}</h3>
                    </div>
                    <div>
                        <h2>{foundBeer.attenuation_level}</h2>
                        <p>{foundBeer.first_brewed}</p>
                    </div>
                    <div>
                        <p>{foundBeer.description}</p>
                        <h5>{foundBeer.contributed_by}</h5>

                        {/* image, name, tagline, 
                        first_brewed, attenuation_level, 
                        description, contributed_by */}
                    </div>

                    <form >
                        <label>Name</label>
                        <input
                        type="text"
                        name="beerName"
                        onChange={(e) => setName(e.target.value)}
                        value={beerName}
                        />
                
                        <label>Tagline</label>
                        <input
                        type="text"
                        name="tagline"
                        onChange={(e) => setTagline(e.target.value)}
                        value={tagline}
                        />

                        <label>Description</label>
                        <input
                        type="text"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        />

                        <label>First Brewed</label>
                        <input
                        type="text"
                        name="firstBrewed"
                        onChange={(e) => setfirstBrewed(e.target.value)}
                        value={firstBrewed}
                        />

                        <label>Brewer Tips</label>
                        <input
                        type="text"
                        name="brewerTips"
                        onChange={(e) => setBrewerTips(e.target.value)}
                        value={brewerTips}
                        />

                        <label>Attenuation Level</label>
                        <input
                        type="number"
                        name="tagline"
                        onChange={(e) => setAttenuationLevel(e.target.value)}
                        value={attenuationLevel}
                        />
                        
                        <label>Contributed By</label>
                        <input
                        type="text"
                        name="tagline"
                        onChange={(e) => setContributedBy(e.target.value)}
                        value={contributedBy}
                        />                        
                        {/* name: String, 
                            tagline: String,
                            description: String,
                            first_brewed: String,
                            brewer_tips: String,
                            attenuation_level: Number,
                            contributed_by: String
                         */}
                        
                        <button type="submit">Create Apartment</button>
        
                    </form>

        </div>
    );
}

export default NewBeer;