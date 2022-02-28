import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { Form } from "react-bootstrap";


function NewBeer() {
    const [beerName, setBeerName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState('')
    const [contributedBy, setContributedBy] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        // send the data from the state as a post request to the backend
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', { beerName, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy })
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err))
        // reset the form
        setBeerName('')
        setTagline('')
        setDescription('')
        setFirstBrewed('')
        setBrewersTips('')
        setAttenuationLevel('')
        setContributedBy('')
        // refresh the list of Beers
    }


    return (
        <div>
            <Header />
            <h1 style={{margin: '0 auto', textAlign: "center", paddingTop: '50px'}}>New Beer</h1>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="beerName">Name</Form.Label>
                        <Form.Control type="text" id={beerName} value={beerName} onChange={(e) => setBeerName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="tagline">Tagline</Form.Label>
                        <Form.Control type="text" id={tagline} value={tagline} onChange={(e) => setTagline(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="description">Description</Form.Label>
                        <Form.Control type="text" id={description} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="firstBrewed">First Brewed</Form.Label>
                        <Form.Control type="text" id={firstBrewed} value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="brewersTips">Brewers Tips</Form.Label>
                        <Form.Control type="text" id={brewersTips} value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="attenuationLevel">Attenuation Level</Form.Label>
                        <Form.Control type="text" id={attenuationLevel} value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="contributedBy">Contributed By</Form.Label>
                        <Form.Control type="text" id={contributedBy} value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} />
                    </Form.Group>
                    <button type='submit'>Add New</button>
                </Form>
            </div>
        </div>
    )
}


export default NewBeer;
