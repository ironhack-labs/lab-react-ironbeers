import axios from "axios";
import { useState } from "react";

const initialValue = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
};

function AddBeerPage() {
    const [beer, setBeer] = useState(initialValue);
    const handleSubmit = e => {
        e.preventDefault();
        const bodyRequest = { ...beer }
        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", bodyRequest)
            .then((response) => {
                console.log(response);
                setBeer(initialValue);
            })
            .catch(err => console.error(err));
    }
    const handleChange = e => {
        const value = e.target.value;
        setBeer({ ...beer, [e.target.name]: value });
    }
    return (
        <form className="d-flex flex-column col-10" onSubmit={e => handleSubmit(e)}>
            <label className="fw-bold ps-3" htmlFor="name">Name</label>
            <input
                className="border rounded-5 mb-4 p-2"
                name="name"
                id="name"
                value={beer.name}
                onChange={e => handleChange(e)}
            />
            <label className="fw-bold ps-3" htmlFor="tagline">Tagline</label>
            <input
                className="border rounded-5 mb-4 p-2"
                name="tagline"
                id="tagline"
                value={beer.tagline}
                onChange={e => handleChange(e)}
            />
            <label className="fw-bold ps-3" htmlFor="description">Description</label>
            <textarea className="border rounded-5 mb-4 p-2"
                rows={10}
                name="description"
                id="description"
                value={beer.description}
                onChange={e => handleChange(e)}
            >
            </textarea>
            <label className="fw-bold ps-3" htmlFor="first_brewed">First Brewed</label>
            <input
                className="border rounded-5 mb-4 p-2"
                name="first_brewed"
                id="first_brewed"
                value={beer.first_brewed}
                onChange={e => handleChange(e)}
            />
            <label className="fw-bold ps-3" htmlFor="brewers_tips">Brewer&apos;s Tips</label>
            <input
                className="border rounded-5 mb-4 p-2"
                name="brewers_tips"
                id="brewers_tips"
                value={beer.brewers_tips}
                onChange={e => handleChange(e)}
            />
            <label className="fw-bold ps-3" htmlFor="attenuation_level">Attenuation Level</label>
            <input
                className="border rounded-5 mb-4 p-2"
                type="number"
                name="attenuation_level"
                id="attenuation_level"
                value={beer.attenuation_level}
                onChange={e => handleChange(e)}
            />
            <label className="fw-bold ps-3" htmlFor="contributed_by">Contributed By</label>
            <input
                className="border rounded-5 mb-4 p-2"
                name="contributed_by"
                id="contributed_by"
                value={beer.contributed_by}
                onChange={e => handleChange(e)}
            />
            <button className="btn btn-primary rounded-5 fs-2" type="submit">Add Beer</button>
        </form>
    );
}

export default AddBeerPage;
