import { useState } from 'react';

function AddBeerPage() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert("Beer successfully added");
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Añadir Nueva Cerveza</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {Object.keys(form).map((field) => (
          <div key={field}>
            <label className="block text-sm font-bold mb-2 capitalize">{field.replace("_", " ")}</label>
            <input
              type={field === "attenuation_level" ? "number" : "text"}
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Añadir Cerveza</button>
      </form>
    </div>
  );
}

export default AddBeerPage;

