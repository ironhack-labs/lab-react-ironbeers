import axios from 'axios'
import { useState} from 'react'
import { Form, Input, Button, InputNumber } from 'antd'

function AddBeerPage() {

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then(() => {
            alert('New Beer has been added!')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className='form-div'>
            <Form onSubmit={handleSubmit}>
                <Form.Item>
                    Name
                    <Input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </Form.Item>
                <Form.Item>
                    Tagline
                    <Input type="text" value={tagline} onChange={(e) => {setTagline(e.target.value)}}/>
                </Form.Item>
                <Form.Item>
                    Description
                    <Input.TextArea type="text" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </Form.Item>
                <Form.Item>
                    First Brewed
                    <Input type="text" value={firstBrewed} onChange={(e) => {setFirstBrewed(e.target.value)}}/>
                </Form.Item>
                <Form.Item>
                    Brewers Tips
                    <Input type="text" value={brewersTips} onChange={(e) => {setBrewersTips(e.target.value)}}/>
                </Form.Item>
                <Form.Item>
                    Attenuation level
                    <InputNumber type="number" value={attenuationLevel} onChange={(e) => {setAttenuationLevel(e.target.value)}}/>
                </Form.Item>
                <Form.Item>
                    Contributed By
                    <Input type="text" value={contributedBy} onChange={(e) => {setContributedBy(e.target.value)}}/>
                </Form.Item>
                <Form.Item>
                    <Button>Add Beer</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddBeerPage;
