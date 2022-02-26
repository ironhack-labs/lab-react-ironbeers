import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [ibu, setIbu] = useState(0);
    const [contributed, setContributed] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { name: name, tagline: tagline, description: description, firstBrewed: firstBrewed, brewersTips: brewersTips, ibu: ibu, contributed: contributed };

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            .then((response) => {
                setName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setBrewersTips("");
                setIbu(0);
                setContributed("");
                navigate('/beers')
            });
    };


    return (
        <div className="row">
            <header className='medium-padding cyan5'>
                <Link to='/'><i>home</i></Link>
            </header>
            <div className="center">
                <div class="medium-margin">
                    <h3 className="center-align">Add New Beer</h3>

                    <form onSubmit={handleSubmit}>

                        <label>Name</label>
                        <div class="field label round fill">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <label>Tagline</label>
                        <div class="field label round fill">
                        <input
                            className="form-control"
                            type="text"
                            name="tagline"
                            onChange={(e) => setTagline(e.target.value)}
                            value={tagline}
                        />
                        </div>

                        <label>Description</label>
                        <div class="field label round fill">
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                        </div>

                        <label>First Brewed</label>
                        <div class="field label round fill">
                        <input
                            className="form-control"
                            type="date"
                            name="firstBrewed"
                            onChange={(e) => setFirstBrewed(e.target.value)}
                            value={firstBrewed}
                        />
                        </div>

                        <label>Brewers Tips</label>
                        <div class="field label round fill">
                        <input
                            className="form-control"
                            type="text"
                            name="brewersTips"
                            onChange={(e) => setBrewersTips(e.target.value)}
                            value={brewersTips}
                        />
                        </div>

                        <label>IBU</label>
                        <div class="field label round fill">
                        <input
                            className="form-control"
                            type="number"
                            name="ibu"
                            onChange={(e) => setIbu(e.target.value)}
                            value={ibu}
                        />
                        </div>

                        <label>Contributed By:</label>
                        <div class="field label round fill">
                        <input
                            className="form-control"
                            type="text"
                            name="contributed"
                            onChange={(e) => setContributed(e.target.value)}
                            value={contributed}
                        />
                        </div>

                        <button type="submit" className="responsive large medium-margin">Create Beer</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewBeer;
