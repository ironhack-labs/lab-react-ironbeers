import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'


const EditBeerPage = () => {

  const [beerData, setBeerData] = useState({
    name: '',
    tagline: '',
    description: '',
    image_url: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  })

  const { beerId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    loadBeerData()
  }, [])

  const loadBeerData = () => {
    axios
      .get(`${apiURL}/${beerId}`)
      .then(({ data }) => setBeerData(data))
      .catch((error) => console.log(error))

  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setBeerData({ ...beerData, [name]: value })
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    alert('NOT ALLOWED')
    navigate('/')
  }


  return (
    <div className="EditBeerPage">
      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
          className="form-control mb-4"
          type="text"
          name="name"
          placeholder="Beer Name"
          value={beerData.name}
          onChange={handleInputChange}
        />
        <label>Tagline</label>
        <input
          className="form-control mb-4"
          type="text"
          name="tagline"
          placeholder="Beer Tagline"
          value={beerData.tagline}
          onChange={handleInputChange}
        />

        <label className="form-label">Description</label>
        <textarea
          className="form-control mb-4"
          type="text"
          name="description"
          placeholder="Description"
          rows="3"
          value={beerData.description}
          onChange={handleInputChange}
        ></textarea>

        <label>Image</label>
        <input
          className="form-control mb-4"
          type="text"
          name="image_url"
          placeholder="Image URL"
          value={beerData.image_url}
          onChange={handleInputChange}
        />

        <label>First Brewed</label>
        <input
          className="form-control mb-4"
          type="text"
          name="first_brewed"
          placeholder="Date - MM/YYYY"
          value={beerData.first_brewed}
          onChange={handleInputChange}
        />

        <label>Brewer Tips</label>
        <input
          className="form-control mb-4"
          type="text"
          name="brewers_tips"
          placeholder="..."
          value={beerData.brewers_tips}
          onChange={handleInputChange}
        />

        <label>Attenuation Level</label>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              %
            </span>
          </div>
          <input
            className="form-control mb-4"
            type="number"
            name="attenuation_level"
            value={beerData.attenuation_level}
            onChange={handleInputChange}
            min={0}
            max={100}
          />
        </div>

        <label>Contributed By</label>
        <input
          className="form-control mb-4"
          type="text"
          name="contributed_by"
          placeholder="Contributed by"
          value={beerData.contributed_by}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-round">Add Beer</button>
      </form>
    </div>
  )
}

export default EditBeerPage