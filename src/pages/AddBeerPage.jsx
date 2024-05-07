import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const api_URL = "https://ih-beers-api2.herokuapp.com/beers/new"


function AddBeerPage() {

  const navigate = useNavigate()

  const [beerData, setBeerData] = useState({
    name: "",
    tagline: "",
    description: "",
    imageUrl: "",
    firstBrewed: "",
    brewersTips: "",
    attenuationLevel: 0,
    contributedBy: "",
  });


  const handleInpuChange = e => {
    const { name, value } = e.target
    setBeerData({ ...beerData, [name]: value })
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    axios
      .post(`${api_URL}`, beerData)
      .then(() => navigate(`${api_URL}`))
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
            value={beerData.name}
            onChange={handleInpuChange}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={beerData.tagline}
            onChange={handleInpuChange}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={beerData.description}
            onChange={handleInpuChange}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={beerData.imageUrl}
            onChange={handleInpuChange}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="firstBrewed"
            placeholder="Date - MM/YYYY"
            value={beerData.firstBrewed}
            onChange={handleInpuChange}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewersTips"
            placeholder="..."
            value={beerData.brewersTips}
            onChange={handleInpuChange}
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
              value={beerData.attenuationLevel}
              onChange={handleInpuChange}
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
            value={beerData.contributedBy}
            onChange={handleInpuChange}
          />
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;


