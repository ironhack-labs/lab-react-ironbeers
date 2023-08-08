import axios from "axios"
import Header from "../components/Header"
import { useState } from "react"
import { baseUrl } from "../utils/constants"
import { useNavigate } from "react-router-dom"

const initialState = {
  name: "",
  tagline: "",
  description: "",
  first_brewed: "",
  brewers_tips: "",
  attenuation_level: 0,
  contributed_by: "",
}

function NewBeerPage() {
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate()

  const handleOnChange = (fieldName, value) => {
    setFormData((prevData => ({...prevData, [fieldName]: value})))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const body = formData
    const submitForm = async () => {
      await axios.post(baseUrl + '/new', body)
      setFormData(initialState)
      navigate('/beers')
    }
    submitForm()
  }

  return (
    <div>
      <Header />
      <form className="row g-3" onSubmit={handleOnSubmit}>
        <div className="col-12">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => handleOnChange("name", e.target.value)}
            value={formData.name}
          />
        </div>

        <div className="col-12">
          <label htmlFor="tagline" className="form-label">
            Tagline
          </label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            className="form-control"
            onChange={(e) => handleOnChange("tagline", e.target.value)}
            value={formData.tagline}
          />
        </div>

        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            rows={3}
            onChange={(e) => handleOnChange("description", e.target.value)}
            value={formData.description}
          />
        </div>

        <div className="col-12">
          <label htmlFor="first_brewed" className="form-label">
            First Brewed
          </label>
          <input
            type="text"
            name="first_brewed"
            id="first_brewed"
            className="form-control"
            onChange={(e) => handleOnChange("first_brewed", e.target.value)}
            value={formData.first_brewed}
          />
        </div>

        <div className="col-12">
          <label htmlFor="brewers_tips" className="form-label">
            Brewers Tips
          </label>
          <input
            type="text"
            name="brewers_tips"
            id="brewers_tips"
            className="form-control"
            onChange={(e) => handleOnChange("brewers_tips", e.target.value)}
            value={formData.brewers_tips}
          />
        </div>

        <div className="col-12">
          <label htmlFor="attenuation_level" className="form-label">
            Attenuation Level
          </label>
          <input
            type="number"
            min={0}
            name="attenuation_level"
            id="attenuation_level"
            className="form-control"
            onChange={(e) =>
              handleOnChange("attenuation_level", e.target.value)
            }
            value={formData.attenuation_level}
          />
        </div>

        <div className="col-12">
          <label htmlFor="contributed_by" className="form-label">
            Contributed By
          </label>
          <input
            type="text"
            name="contributed_by"
            id="contributed_by"
            className="form-control"
            onChange={(e) => handleOnChange("contributed_by", e.target.value)}
            value={formData.contributed_by}
          />
        </div>

        <div className="col-12 btn-container">
          <button type="submit" className="btn btn-primary">
            ADD NEW
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewBeerPage