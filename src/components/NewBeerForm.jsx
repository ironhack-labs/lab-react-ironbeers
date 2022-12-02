import React from 'react'
import {useState} from "react"
import axios from "axios";

const NewBeerForm = (props) => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [contributor, setContributor] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleName = e => setName(e.target.value);
  const handleTagline = e => setTagline(e.target.value);
  const handleDescription = e => setDescription(e.target.value);
  const handleContributor = e => setContributor(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, tagline, description, contributor};
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        // Reset the state
        setName("");
        setTagline("");
        setDescription("");
        setContributor("");
      });
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
      }, 4000);
  }

  return (
    <div>
    <h4>Add a Beer</h4>
    <form className='form-group' onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={handleName}
      />

      <label>Tagline: </label>
      <input
          type="text"
          name="tagline"
          value={tagline}
          placeholder="tagline"
          onChange={handleTagline}
      />

      <label>Description: </label>
      <input
          type="text"
          name="description"
          value={description}
          placeholder="description"
          onChange={handleDescription}
      />

      <label>Contributed by: </label>
      <input
          type="text"
          name="contributor"
          value={contributor}
          placeholder="your name"
          onChange={handleContributor}
      />

      <button type="submit">Add a Beer</button>
      {submitted && <p>Your beer was added to the collection!</p>}
    </form>
    </div>
  )
}

export default NewBeerForm
