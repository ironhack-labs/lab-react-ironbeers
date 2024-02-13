import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const add_API_url = "https://ih-beers-api2.herokuapp.com/beers"

function AddBeerPage() {
  // State variables to store the values of the form inputs. You can leave these as they are.
  // const [name, setName] = useState("");
  // const [tagline, setTagline] = useState("");
  // const [description, setDescription] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  // const [firstBrewed, setFirstBrewed] = useState("");
  // const [brewersTips, setBrewersTips] = useState("");
  // const [attenuationLevel, setAttenuationLevel] = useState(0);
  // const [contributedBy, setContributedBy] = useState("");

  // Handler functions for the form inputs. You can leave these as they are.
  // 
  const navigate = useNavigate()

  const [newBeer, setNewbeer] = useState({

    name: '',
    tagline: '',
    description: '',
    imageUrl: '',
    firstBrewed: '',
    brewersTips: '',
    attenuationLevel: '',
    contributedBy: ''
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setNewbeer({ ...newBeer, [name]: value })
  }

  // TASK:
  // 1. Create a function to handle the form submission and send the form data to the Beers API to create a new beer.


  const handleFormSubmit = e => {

    e.preventDefault()

    axios
      .post(`${add_API_url}/new`, newBeer)
      .then(() => navigate('/beers'))
      .catch(err => console.log(err))

  }
  // 2. Use axios to make a POST request to the Beers API.
  // 3. Once the beer is created, navigate the user to the page showing the list of all beers.



  // Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
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
            name="imageUrl"
            placeholder="Image URL"
            value={newBeer.imageUrl}
            onChange={handleInputChange}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="firstBrewed"
            placeholder="Date - MM/YYYY"
            value={newBeer.firstBrewed}
            onChange={handleInputChange}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewersTips"
            placeholder="..."
            value={newBeer.brewersTips}
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
              value={newBeer.attenuationLevel}
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
            value={newBeer.contributedBy}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
