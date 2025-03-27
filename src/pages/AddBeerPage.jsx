import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [form, setForm] = useState({ name: "", tagline: "", description: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", form)
      .then(() => alert("Beer added!"))
      .catch(error => console.error("Error adding beer:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <button type="submit">Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
