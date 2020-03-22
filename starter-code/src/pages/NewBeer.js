import React, { useState } from 'react';
import { newBeer } from '../service'
import { FormMessage } from '../components/FormMessage';

export const NewBeer = () => {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [brewed, setBrewed] = useState('');
    const [tips, setTips] = useState('');
    const [attenuation, setAttenuation] = useState(0);
    const [contributed, setContributed] = useState('');

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (data) => {
        newBeer(data).then(res => {
            setSuccess(res.message);
            handleClear();
        }).catch(res => {
            setError('There was an error, please try again');
        })
    }

    const handleClear = () => {
        setName('');
        setTagline('');
        setDescription('');
        setBrewed('');
        setAttenuation('');
        setContributed('');
    }

    return (
        <form id="newBeerForm" className="new-beer-form" onSubmit={e => {
            e.preventDefault();
            handleSubmit({
                name,
                tagline,
                description,
                brewed,
                tips,
                attenuation,
                contributed
            });
        }}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="tagline">Tagline</label>
                <input type="text" className="form-control" id="tagline" value={tagline} onChange={e => setTagline(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" rows="3" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="first-brewed">First Brewed</label>
                <input type="text" className="form-control" id="first-brewed" value={brewed} onChange={e => setBrewed(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="brewers-tips">Brewers Tips</label>
                <input type="text" className="form-control" id="brewers-tips" value={tips} onChange={e => setTips(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="attenuation-level">Attenuation Level</label>
                <input type="number" className="form-control" id="attenuation-level" value={attenuation} onChange={e => setAttenuation(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="contributed-by">Contributed by</label>
                <input type="text" className="form-control" id="contributed-by" value={contributed} onChange={e => setContributed(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary btn-submit">Add New</button>

            {success && <FormMessage message={success} type="success" />}
            {error && <FormMessage message={error} type="danger" />}
        </form>
    )
}