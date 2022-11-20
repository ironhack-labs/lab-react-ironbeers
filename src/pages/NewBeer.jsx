import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function NewBeer() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [attenuationLevel, setAttenuationlevel] = useState(0);
    const [contributedBy, setContributedBy] = useState('');


    const handleName = (e) => setName(e.target.value);
    const handleTagline = (e) => setTagline(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
    const handleBrewersTips = (e) => setBrewersTips(e.target.value);
    const handleAttenuationLevel = (e) => setAttenuationlevel(e.target.value);
    const handleContributedBy = (e) => setContributedBy(e.target.value);

    const navigate = useNavigate;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy };

            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);
            setName('');
            setTagline('');
            setDescription('');
            setFirstBrewed('');
            setBrewersTips('');
            setAttenuationlevel('');
            setContributedBy('');
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            <Header/>
            <h3>Add New Beer</h3>

            <Form onSubmit={handleSubmit} className="ms-auto me-auto pt-2" style={{ width: '80%' }}>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleName} />

                
                <Form.Label htmlFor="tagline">Tagline</Form.Label>
                <Form.Control type="text" value={tagline} onChange={handleTagline} />

                
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control type="text" value={description} onChange={handleDescription} />

                
                <Form.Label htmlFor="firstBrewed">First Brewed</Form.Label>
                <Form.Control type="text" value={firstBrewed} onChange={handleFirstBrewed} />

                
                <Form.Label htmlFor="brewersTips">Brewers Tips</Form.Label>
                <Form.Control type="text" value={brewersTips} onChange={handleBrewersTips} />

                
                <Form.Label htmlFor="attenuationLevel">Attenuation Level</Form.Label>
                <Form.Control type="text" value={attenuationLevel} onChange={handleAttenuationLevel} />

                
                <Form.Label htmlFor="contributedBy">Contributed By</Form.Label>
                <Form.Control type="text" value={contributedBy} onChange={handleContributedBy} />

                <Button variant="outline-info" className="mt-5" type="submit">Add</Button>
            </Form>

        </div>
    )
}

export default NewBeer