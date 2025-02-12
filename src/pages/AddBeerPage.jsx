import { useState } from "react";
import axios from "axios";  // Import axios for making the POST request

function AddBeerPage() {
  // State variables for each form input
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");
  const [successMessage, setSuccessMessage] = useState("");  // For success message after submission
  const [errorMessage, setErrorMessage] = useState("");  // For error message

  // Submit handler function for form
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload on form submission

    // Create the beer object to send to the API
    const newBeer = {
      name,
      tagline,
      description,
      image_url: imageUrl,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: Number(attenuationLevel), // Make sure it's a number
      contributed_by,
    };

    // Make the POST request to the Beers API
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        setSuccessMessage("Beer added successfully!");  // Show success message
        setErrorMessage("");  // Clear any previous error messages
      })
      .catch((err) => {
        setErrorMessage("There was an error adding the beer.");  // Show error message
        setSuccessMessage("");  // Clear any previous success messages
      });
  };

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      <h2>Add New Beer</h2>

      {/* Form to add a new beer */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            id="tagline"
            className="form-control"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstBrewed">First Brewed</label>
          <input
            type="text"
            id="firstBrewed"
            className="form-control"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="brewersTips">Brewer's Tips</label>
          <input
            type="text"
            id="brewersTips"
            className="form-control"
            value={brewersTips}
            onChange={(e) => setBrewersTips(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="attenuationLevel">Attenuation Level</label>
          <input
            type="number"
            id="attenuationLevel"
            className="form-control"
            value={attenuationLevel}
            onChange={(e) => setAttenuationLevel(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contributedBy">Contributed By</label>
          <input
            type="text"
            id="contributedBy"
            className="form-control"
            value={contributedBy}
            onChange={(e) => setContributedBy(e.target.value)}
            required
          />
        </div>

        {/* Success or error messages */}
        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}

        {/* Submit button */}
        <button type="submit" className="btn btn-primary mt-3">
          Add Beer
        </button>
      </form>
    </div>
  );
}

export default AddBeerPage;
