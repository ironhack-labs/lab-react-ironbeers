import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewBeer = () => {
    const [name, setName] = React.useState("");
    const [tagline, setTagline] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [firstBrewed, setFirstBrewed] = React.useState("");
    const [tips, setTips] = React.useState("");
    const [attLvl, setAttLvl] = React.useState(0);
    const [contribution, setContribution] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            name: name,
            tagline: tagline,
            description: description,
            firstBrewed: firstBrewed,
            tips: tips,
            attLvl: attLvl,
            contribution: contribution
        };
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', body)
            .then((response) => {
                setName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setTips("");
                setAttLvl(0);
                setContribution("");
            });
    };

        return (

        <div>
            <header className='homepage'>
                <Link to='/'>Home</Link>
            </header>
            <h2>New Beer</h2>
            <div className="center">
                <div>
                    <h3>Add New Beer</h3>

                    <form onSubmit={handleSubmit}>

                        <label>Name</label>
                        <div>
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <label>Tagline</label>
                        <div>
                        <input
                            className="form-control"
                            type="text"
                            name="tagline"
                            onChange={(e) => setTagline(e.target.value)}
                            value={tagline}
                        />
                        </div>

                        <label>Description</label>
                        <div>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                        </div>

                        <label>First Brewed</label>
                        <div>
                        <input
                            className="form-control"
                            type="date"
                            name="firstBrewed"
                            onChange={(e) => setFirstBrewed(e.target.value)}
                            value={firstBrewed}
                        />
                        </div>

                        <label>Brewers Tips</label>
                        <div>
                        <input
                            className="form-control"
                            type="text"
                            name="brewersTips"
                            onChange={(e) => setTips(e.target.value)}
                            value={tips}
                        />
                        </div>

                        <label>Attenuation Level</label>
                        <div>
                        <input
                            className="form-control"
                            type="number"
                            name="ibu"
                            onChange={(e) => setAttLvl(e.target.value)}
                            value={attLvl}
                        />
                        </div>

                        <label>Created By:</label>
                        <div>
                        <input
                            className="form-control"
                            type="text"
                            name="contributed"
                            onChange={(e) => setContribution(e.target.value)}
                            value={contribution}
                        />
                        </div>

                        <button type="submit" className="responsive large medium-margin">Create Beer</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewBeer;