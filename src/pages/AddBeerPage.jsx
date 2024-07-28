import { useState } from "react";

export default function AddBeerPage() {
  const [formData, setFormData] = useState({
    image_url: '',
    name: '',
    tagline: '',
    first_brewed: '',
    description: '',
    attenuation_level: '',
    brewers_tips: '',
    contributed_by: '',
    expireAt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          attenuation_level: Number(formData.attenuation_level)  
        }),
    });
      const finalRes = await res.json();
      console.log(finalRes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add a new beer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image_url">Image URL</label>
        <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} /><br />
   
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} /><br />

        <label htmlFor="tagline">Tagline</label>
        <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} /><br />

        <label htmlFor="description">Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} /><br />
        
        <label htmlFor="first_brewed">First Brewed</label>
        <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} /><br />

        <label htmlFor="brewers_tips">Brewer&#39;s Tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={formData.brewers_tips}
          onChange={handleChange}
        /><br />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} /><br />

        <label htmlFor="contributed_by">Contributed By</label>
        <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} /><br />

        <label htmlFor="expireAt">Expire At</label>
        <input type="text" name="expireAt" value={formData.expireAt} onChange={handleChange} /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
