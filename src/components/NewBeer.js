import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function NewBeer(){

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [fistBrewed, setFirstBrewed] = useState("");
    const [brewerTips, setBrewerTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState("");
    const [contributedBy, setContributedBy] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();

            const newBeer = {
                name: name,
                tagline: tagline,
                description: description,
                first_brewed: fistBrewed,
                brewers_tips: brewerTips,
                attenuation_level: attenuationLevel,
                contributed_by: contributedBy,
            }

            axios
            .post(process.env.REACT_APP_BASE_URL + "/new", newBeer)
            .then()
            .catch( err => console.log("error creating new beer", err));
            
            setName("");
            setTagline("");
            setDescription("");
            setFirstBrewed("");
            setBrewerTips("");
            setAttenuationLevel("");
            setContributedBy("");
        }

    return(
        <>
            <Header />
                <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name
                            <input type="text" name="name" value={name} className="form-control" onChange={ e => setName(e.target.value)} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tagline
                            <input type="text" name="tagline" value={tagline} className="form-control" onChange={ e => setTagline(e.target.value)} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description
                            <input type="text" name="description" value={description} className="form-control" onChange={ e => setDescription(e.target.value)} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">First Brewed
                            <input type="text" name="firstBrewed" value={fistBrewed} className="form-control" onChange={ e => setFirstBrewed(e.target.value)} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Brewer Tips
                            <input type="text" name="brewerTips" value={brewerTips} className="form-control" onChange={ e => setBrewerTips(e.target.value)} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Attenuational Level
                            <input type="number" name="attenuationalLevel" value={attenuationLevel} className="form-control" onChange={ e => setAttenuationLevel(e.target.value)} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contributed By
                            <input type="text" name="contributedBy" value={contributedBy} className="form-control" onChange={ e => setContributedBy(e.target.value)} />
                        </label>
                    </div>
                    <Link to="/beers">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Link>
                </form>
            </div>
        </>


    )
}

export default NewBeer;