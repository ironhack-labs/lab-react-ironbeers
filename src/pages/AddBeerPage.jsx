import { useState } from "react";

export default function AddBeerPage() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    first_brewed: "",
    attenuation_level: "",
    description: "",
    contributed_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post("https://ih-beers-api2.herokuapp.com/new", form)
      .then((response) => {
        alert("new beer added");
      })
      .catch((error) => console.error(error));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-white shadow-md rounded"
    >
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={form.tagline}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description:</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">First Brewed:</label>
        <input
          type="text"
          name="first_brewed"
          value={form.first_brewed}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Brewer's Tips:</label>
        <input
          type="text"
          name="brewers_tips"
          value={form.brewers_tips}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Attenuation Level:</label>
        <input
          type="number"
          name="attenuation_level"
          value={form.attenuation_level}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contributed By:</label>
        <input
          type="text"
          name="contributed_by"
          value={form.contributed_by}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add Beer
      </button>
    </form>
  );
}
