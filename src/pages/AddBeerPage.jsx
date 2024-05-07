import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'


function AddBeerPage() {

  const [newBeer, setNewBeer] = useState({
    name: '',
    tagline: '',
    description: '',
    image_url: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  })

  const navigate = useNavigate()

  const handleInputChange = e => {
    const { name, value } = e.target
    setNewBeer({ ...newBeer, [name]: value })
  }


  const submitNewBeer = e => {
    e.preventDefault()

    axios
      .post(`${apiURL}/new`, newBeer)
      .then(() => navigate(`/`))
      .catch((error) => console.log(error))

  }




  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={submitNewBeer}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            value={newBeer.name}
            onChange={handleInputChange}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={newBeer.tagline}
            onChange={handleInputChange}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={newBeer.description}
            onChange={handleInputChange}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="image_url"
            placeholder="Image URL"
            value={newBeer.image_url}
            onChange={handleInputChange}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="first_brewed"
            placeholder="Date - MM/YYYY"
            value={newBeer.first_brewed}
            onChange={handleInputChange}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewers_tips"
            placeholder="..."
            value={newBeer.brewers_tips}
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
              value={newBeer.attenuation_level}
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
            value={newBeer.contributed_by}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
