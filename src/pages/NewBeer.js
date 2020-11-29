import Axios from 'axios'
import React from 'react'
import useInput from '../hooks/useInput'
import { Link } from 'react-router-dom'

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

function AddBeer() {

  // const [title, setTitle] = useState('')
  // Cambiamos la propiedad del estado del componente pore el uso de nuestro custom hook que registra su estado internamente y nos devuelve las propiedades necesarias para controlar el input, solo hace falta agregar este objeto destructuraddo al input por controlar {...titleInput}
  const nameInput = useInput('')
  const taglineInput = useInput('')
  const descriptionInput = useInput('')
  const first_brewedInput = useInput('')
  const brewers_tipsInput = useInput('')
  const attenuation_levelInput = useInput('')
  const contributed_byInput = useInput('')


  async function handleFormSubmit(event) {
    event.preventDefault()
    console.log(nameInput, taglineInput, descriptionInput, first_brewedInput, brewers_tipsInput, attenuation_levelInput, contributed_byInput)
    const newBeer = await Axios.post(`${baseURL}/new`, {
      "name": nameInput.value,
      "tagline": taglineInput.value,
      "description": descriptionInput.value,
      "first_brewed": first_brewedInput.value,
      "brewers_tips": brewers_tipsInput.value,
      "attenuation_level": attenuation_levelInput.value,
      "contributed_by": contributed_byInput.value
    })
    console.log(newBeer)
    // setTitle('')
    // setDirector('')
    // setIMDbRating('')
    // setHasOscars(false)
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-text mx-auto">
          <Link to="/">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
            <path fillRule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
          </svg>
          </Link>
        </span>
      </nav>
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="name"
          {...nameInput}
        />
        <br />
        <label>Tagline:</label>
        <input
          type="text"
          name="tagline"
          {...taglineInput}
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          {...descriptionInput}
        />
        <br />
        <label>First Brewed:</label>
        <input
          type="text"
          name="first_brewed"
          {...first_brewedInput}
        />
        <br />
        <label>Brewers Tips:</label>
        <input
          type="text"
          name="brewers_tips"
          {...brewers_tipsInput}
        />
        <br />
        <label>Attenuation Level:</label>
        <input
          type="text"
          name="attenuation_level"
          {...attenuation_levelInput}
        />
        <br />
        <label>Contributed By:</label>
        <input
          type="text"
          name="contributed_by"
          {...contributed_byInput}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddBeer