import { useState, useEffect } from "react";
import Axios from 'axios'

function AddBeerPage() {
    const [form, setForm] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
    })

    const handleSubmit = (ev) => {
        ev.preventDefault();

        Axios.post('https://ih-beers-api2.herokuapp.com/beers/new', form)
        .then(response => {
            console.log('Beer Add', response.data);
            setForm({
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: '',
            });
        })
        .catch(error => {
            console.error(error);
        });
    }

    const handleChange = (ev) => {
        setForm({
            ...form,
            [ev.target.name]: ev.target.value,
        });
    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor='name' className="form-label font-weight-bold text-dark">Name</label>
                    <input type="text" name="name" className="form-control rounded-pill" value={form.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor='tagline' className="form-label font-weight-bold text-dark">Tagline</label>
                    <input type="text" name="tagline" className="form-control rounded-pill" value={form.tagline} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor='description' className="form-label font-weight-bold text-dark">Description</label>
                    <textarea name="description" className="form-control rounded-pill" value={form.description} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor='first_brewed' className="form-label font-weight-bold text-dark">First Brewed</label>
                    <input type="text" name="first_brewed" className="form-control rounded-pill" value={form.first_brewed} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor='brewers_tips' className="form-label font-weight-bold text-dark">Brewer's Tips</label>
                    <input type="text" name="brewers_tips" className="form-control rounded-pill" value={form.brewers_tips} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor='attenuation_level' className="form-label font-weight-bold text-dark">Attenuation Level</label>
                    <input type="number" name="attenuation_level" className="form-control rounded-pill" value={form.attenuation_level} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor='contributed_by' className="form-label font-weight-bold text-dark">Contributed By</label>
                    <input type="text" name="contributed_by" className="form-control rounded-pill" value={form.contributed_by} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-info rounded-pill text-white ">Add New Beer</button>
                </div>
            </form>
        </div>
    );
}

export default AddBeerPage;
