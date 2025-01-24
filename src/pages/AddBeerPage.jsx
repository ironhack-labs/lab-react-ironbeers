/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

function AddBeerPage() {
  const emptyBeer = {
    _id: "",
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  };

  const [beer, setBeer] = useState(emptyBeer);
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);
  const [selectedMonth, setSelectedMonth] = useState("");

  //Convert First Brewed date to MM/YYYY format
  function convertDateFormat(dateString) {
    // Split the input date string by the hyphen
    const [year, month] = dateString.split("-");
    return `${month}/${year}`;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeer({ ...beer, [name]: value });
    if (name === "first_brewed") setSelectedMonth(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Adding form validation check
    if (formRef.current.checkValidity()) {
      // Submit form or handle valid case
      console.log("Form validated successfully!");
      setSelectedMonth();
      // Add a new unique _id when submitting the form
      const formattedBeer = {
        ...beer,
        _id: uuidv4(),
        first_brewed: convertDateFormat(selectedMonth),
      };

      axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", formattedBeer)
        .then((response) => {
          console.log(response.data.message);
          setBeer(emptyBeer);
          // navigate("/beers")
        })
        .catch((error) => console.log(error));
    } else {
      // Trigger validation messages
      setValidated(true);
    }
  };

  // Functions to show placeholder on first_brewed input field
  function handleFocus(event) {
    if (!event.target.value) event.target.placeholder = "MM/YYYY";
  }

  function handleBlur(event) {
    event.target.placeholder = "";
  }

  return (
    <form
      ref={formRef}
      className={`d-flex flex-column container-fluid mt-3 needs-validation ${
        validated ? "was-validated" : ""
      }`}
      noValidate
      onSubmit={handleFormSubmit}
    >
      <div className="form-floating">
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          value={beer.name}
          placeholder=""
          onChange={handleChange}
          required
        />
        <label className="form-label fw-semibold" htmlFor="name">
          Name:
        </label>
        <div className="invalid-feedback">Please provide a name.</div>
      </div>
      <br />

      <div className="form-floating">
        <input
          className="form-control"
          type="text"
          name="tagline"
          id="tagline"
          value={beer.tagline}
          placeholder=""
          onChange={handleChange}
          required
        />
        <label className="form-label fw-semibold" htmlFor="tagline">
          Tagline:
        </label>
        <div className="invalid-feedback">Please provide a Tagline.</div>
      </div>
      <br />

      <div className="form-floating">
        <textarea
          style={{ height: "10rem" }}
          className="form-control"
          rows={3}
          type="text"
          name="description"
          id="description"
          value={beer.description}
          placeholder=""
          onChange={handleChange}
          required
        />
        <label className="form-label fw-semibold" htmlFor="description">
          Description:
        </label>
        <div className="invalid-feedback">Please provide a Description.</div>
      </div>
      <br />

      <div className="form-floating">
        <input
          className="form-control"
          type="month"
          name="first_brewed"
          id="first_brewed"
          value={beer.first_brewed}
          placeholder=""
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <label className="form-label fw-semibold" htmlFor="first_brewed">
          First Brewed:
        </label>
        <div className="invalid-feedback">Please provide a valid date.</div>
      </div>
      <br />

      <div className="form-floating">
        <input
          className="form-control"
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          value={beer.brewers_tips}
          placeholder=""
          onChange={handleChange}
          required
        />
        <label className="form-label fw-semibold" htmlFor="brewers_tips">
          Brewer Tips:
        </label>
        <div className="invalid-feedback">Please provide a tip.</div>
      </div>
      <br />

      <div className="input-group">
        <div className="form-floating">
          <input
            className="form-control"
            type="number"
            name="attenuation_level"
            id="attenuation_level"
            value={beer.attenuation_level}
            placeholder=""
            onChange={handleChange}
            required
          />
          <label className="form-label fw-semibold" htmlFor="attenuation_level">
            <i className="bi bi-percent"></i>
            Attenuation level:
          </label>
          <div className="invalid-feedback">Please provide a valid number.</div>
        </div>
      </div>
      <br />

      <div className="form-floating">
        <input
          className="form-control"
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={beer.contributed_by}
          placeholder=""
          onChange={handleChange}
          required
        />
        <label className="form-label fw-semibold" htmlFor="contributed_by">
          Created By:
        </label>
        <div className="invalid-feedback">
          Please provide a name and username. <br /> e.g: {"Sam Mason <samjbmason>"}
        </div>
      </div>
      <br />

      <div>
        <button className="btn btn-primary fw-semibold">Add beer</button>
      </div>
      <br />
    </form>
  );
}

export default AddBeerPage;
