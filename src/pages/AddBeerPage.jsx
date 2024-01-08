import axios from "axios";
import { useState } from "react";

function AddBeerPage() {
  const [beerData, setBeerData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBeerData((prevBeerData) => ({
      ...prevBeerData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(beerData);

    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        beerData
      );

      if (response.status === 200) {
        alert("Data successfully sent!");
      } else {
        alert("Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="newBeer">
        <h1>Add new Beer</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={beerData.name}
          onChange={handleInputChange}
        />

        <br />

        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          id="tagline"
          name="tagline"
          value={beerData.tagline}
          onChange={handleInputChange}
        />

        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={beerData.description}
          onChange={handleInputChange}
        />

        <br />

        <label htmlFor="first_brewed">First Brewed:</label>
        <input
          type="text"
          id="first_brewed"
          name="first_brewed"
          value={beerData.first_brewed}
          onChange={handleInputChange}
        />

        <br />

        <label htmlFor="brewers_tips">Brewer&apos;s Tips:</label>
        <input
          type="text"
          id="brewers_tips"
          name="brewers_tips"
          value={beerData.brewers_tips}
          onChange={handleInputChange}
        />

        <br />

        <label htmlFor="attenuation_level">Attenuation Level:</label>
        <input
          type="number"
          id="attenuation_level"
          name="attenuation_level"
          value={beerData.attenuation_level}
          onChange={handleInputChange}
        />

        <br />

        <label htmlFor="contributed_by">Contributed By:</label>
        <input
          type="text"
          id="contributed_by"
          name="contributed_by"
          value={beerData.contributed_by}
          onChange={handleInputChange}
        />

        <br />
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
