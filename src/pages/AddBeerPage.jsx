import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const apiURL = "https://ih-beers-api2.herokuapp.com"


function AddBeerPage() {

  const [beer, setBeerData] = useState({
    name: '',
    tagline: '',
    description: '',
    imageUrl: '',
    firstBrewed: '',
    brewersTips: '',
    attenuationLevel: 0,
    contributedBy: '',
  }
  )

  const navigate = useNavigate()

  const handleInputChange = e => {
    const { name, value } = e.target
    setBeerData({ ...beer, [name]: value })
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    axios
      .post(`${apiURL}/beers/new`, beer)
      .then(() => navigate('/beers'))
      .catch(err => console.log(err))
  }




  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            value={beer.name}
            onChange={handleInputChange}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={beer.tagline}
            onChange={handleInputChange}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={beer.description}
            onChange={handleInputChange}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={beer.imageUrl}
            onChange={handleInputChange}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="firstBrewed"
            placeholder="Date - MM/YYYY"
            value={beer.firstBrewed}
            onChange={handleInputChange}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewersTips"
            placeholder="..."
            value={beer.brewersTips}
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
              name="attenuationLevel"
              value={beer.attenuationLevel}
              onChange={handleInputChange}
              min={0}
              max={100}
            />
          </div>

          <label>Contributed By</label>
          <input
            className="form-control mb-4"
            type="text"
            name="contributedBy"
            placeholder="Contributed by"
            value={beer.contributedBy}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
