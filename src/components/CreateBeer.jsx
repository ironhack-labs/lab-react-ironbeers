import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { postBeer } from '../api/beers'
import Header from './Header'

const CreateBeer = () => {
  const beerSchema = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  }
  const [newBeer, setNewBeer] = useState(beerSchema)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      await postBeer(newBeer)
      navigate('/beers')
    } catch (e) {
      console.log('Error posting the new beer...', e)
    }
  }
  return (
    <>
      <Header />
      <Form>
        <label>Name</label>
        <input
          type="text"
          value={newBeer.name}
          onChange={(ev) => setNewBeer({ ...newBeer, name: ev.target.value })}
        />
        <label>Tagline</label>
        <input
          type="text"
          value={newBeer.tagline}
          onChange={(ev) =>
            setNewBeer({ ...newBeer, tagline: ev.target.value })
          }
        />
        <label>Description</label>
        <textarea
          rows={5}
          value={newBeer.description}
          onChange={(ev) =>
            setNewBeer({ ...newBeer, description: ev.target.value })
          }
        ></textarea>
        <label>First Brewed</label>
        <input
          type="text"
          value={newBeer.first_brewed}
          onChange={(ev) =>
            setNewBeer({ ...newBeer, first_brewed: ev.target.value })
          }
        />
        <label>Brewers Tips</label>
        <input
          type="text"
          value={newBeer.brewers_tips}
          onChange={(ev) =>
            setNewBeer({ ...newBeer, brewers_tips: ev.target.value })
          }
        />
        <label>Attenuation level</label>
        <input
          type="number"
          min={0}
          placeholder={0}
          value={newBeer.attenuation_level}
          onChange={(ev) =>
            setNewBeer({ ...newBeer, attenuation_level: ev.target.value })
          }
        />
        <label>Contributed By</label>
        <input
          type="text"
          value={newBeer.contributed_by}
          onChange={(ev) =>
            setNewBeer({ ...newBeer, contributed_by: ev.target.value })
          }
        />
        <Button onClick={handleSubmit}>ADD NEW</Button>
      </Form>
    </>
  )
}

export default CreateBeer
const Form = styled.div`
  min-width: 200px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  label {
    margin-left: 1rem;
  }
  input,
  textarea {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 30px;
    resize: none;
    border: 1px solid #afafaf;
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
    border-radius: 1rem;
  }
`
const Button = styled.button`
  width: 100%;
  align-self: center;
  padding: 0.5rem 0;
  border-radius: 2rem;
  border: none;
  background-color: #3dc4fc;
  color: white;
  :hover {
    cursor: pointer;
  }
  :active {
    box-shadow: inset 0px 0px 5px 2px #e0e0e0;
  }
`
