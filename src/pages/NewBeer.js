import NavHome from "../components/NavHome";
import { Input, Label, Form, Row, Col, Button } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBeer } from "../api";

function NewBeer() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState('')
    const [contributedBy, setContributedBy] = useState('')

    function handleNameInput(event) {
        setName(event.target.value)
    }
    function handleTaglineInput(event) {
        setTagline(event.target.value)
    }
    function handleDescriptionInput(event) {
        setDescription(event.target.value)
    }
    function handleFirstBrewedInput(event) {
        setFirstBrewed(event.target.value)
    }
    function handleBrewersTipsInput(event) {
        setBrewersTips(event.target.value)
    }
    function handleAttenuationLevelInput(event) {
        setAttenuationLevel(event.target.value)
    }
    function handleContributedByInput(event) {
        setContributedBy(event.target.value)
    }


    async function handleFormSubmit(event) {
        event.preventDefault()

        const newBeer = {
            name, 
            tagline,
            description,
            first_brewed :firstBrewed ,
            brewers_tips : brewersTips,
            attenuation_level : attenuationLevel,
            contributed_by : contributedBy
        }

        const response = await createBeer(newBeer)
        console.log(response.data)

        navigate('/')

    }

    return (
        <>
            <NavHome />
            <Form onSubmit={handleFormSubmit}>
                <Row style={{ dispay: 'flex', justifyContent: 'center', textAlign: 'left', marginTop: '10px' }}>
                    <Col sm={6} >
                        <Label for="name"><strong>Name</strong></Label>
                        <Input onChange={handleNameInput} style={{ borderRadius: '25px' }} bsSize="sm" id='name' value={name} />
                    </Col>
                </Row>
                <Row style={{ dispay: 'flex', justifyContent: 'center', textAlign: 'left', marginTop: '10px' }}>
                    <Col sm={6} >
                        <Label for="tagline"><strong>Tagline</strong></Label>
                        <Input onChange={handleTaglineInput} style={{ borderRadius: '25px' }} bsSize="sm" id='tagline' value={tagline} />
                    </Col>
                </Row>
                <Row style={{ dispay: 'flex', justifyContent: 'center', textAlign: 'left', marginTop: '10px' }}>
                    <Col sm={6} >
                        <Label for="description"><strong>Description</strong></Label>
                        <Input onChange={handleDescriptionInput} style={{ borderRadius: '25px' }} type="textarea" bsSize="sm" id='description' rows="5" value={description} />
                    </Col>
                </Row>
                <Row style={{ dispay: 'flex', justifyContent: 'center', textAlign: 'left', marginTop: '10px' }}>
                    <Col sm={6} >
                        <Label for="firstBrewed"><strong>First Brewed</strong></Label>
                        <Input onChange={handleFirstBrewedInput} style={{ borderRadius: '25px' }} bsSize="sm" id='firstBrewed' value={firstBrewed} />
                    </Col>
                </Row>
                <Row style={{ dispay: 'flex', justifyContent: 'center', textAlign: 'left', marginTop: '10px' }}>
                    <Col sm={6} >
                        <Label for="brewersTips"><strong>Brewers Tips</strong></Label>
                        <Input onChange={handleBrewersTipsInput} style={{ borderRadius: '25px' }} bsSize="sm" id='brewersTips' value={brewersTips} />
                    </Col>
                </Row>
                <Row style={{ dispay: 'flex', justifyContent: 'center', textAlign: 'left', marginTop: '10px' }}>
                    <Col sm={6} >
                        <Label for="attenuationLevel"><strong>Attenuation Level</strong></Label>
                        <Input onChange={handleAttenuationLevelInput} type='number' style={{ borderRadius: '25px' }} bsSize="sm" id='attenuationLevel' value={attenuationLevel} />
                    </Col>
                </Row>
                <Row style={{ dispay: 'flex', justifyContent: 'center', textAlign: 'left', marginTop: '10px' }}>
                    <Col sm={6} >
                        <Label for="contributedBy"><strong>Contributed by</strong></Label>
                        <Input onChange={handleContributedByInput} style={{ borderRadius: '25px' }} bsSize="sm" id='contributedBy' value={contributedBy} />
                    </Col>
                </Row>
                <Row style={{ dispay: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <Col sm={6} >
                        <Button style={{backgroundColor : '#00BFFF', width:'100%', borderRadius: '25px', border:'none'}}>Add New</Button>
                    </Col>
                </Row>
            </Form>

        </>
    )
}

export default NewBeer;