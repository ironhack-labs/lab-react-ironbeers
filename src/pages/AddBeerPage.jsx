import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AddBeerPage() {
  // State variables to store the values of the form inputs. You can leave these as they are.
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  // React Router hook for navigation
  const navigate = useNavigate();

  // Function to handle the form submission and add a new beer
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      image_url: imageUrl,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    try {
      console.log("Submitting new beer:", newBeer);
      const response = await fetch(`${API_URL}/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBeer),
      });

      if (!response.ok) {
        throw new Error(`Failed to add beer: ${response.status}`);
      }

      const data = await response.json();
      console.log("New beer added:", data);

      // Navigate to the page showing the list of all beers after successful submission
      navigate("/beers");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handler functions for the form inputs
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            value={name}
            onChange={handleName}
            required
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={tagline}
            onChange={handleTagline}
            required
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={description}
            onChange={handleDescription}
            required
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            onChange={handleImageUrl}
            required
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="firstBrewed"
            placeholder="Date - MM/YYYY"
            value={firstBrewed}
            onChange={handleFirstBrewed}
            required
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewersTips"
            placeholder="..."
            value={brewersTips}
            onChange={handleBrewersTips}
            required
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
              value={attenuationLevel}
              onChange={handleAttenuationLevel}
              min={0}
              max={100}
              required
            />
          </div>

          <label>Contributed By</label>
          <input
            className="form-control mb-4"
            type="text"
            name="contributedBy"
            placeholder="Contributed by"
            value={contributedBy}
            onChange={handleContributedBy}
            required
          />
          <button type="submit" className="btn btn-primary btn-round">
            Add Beer
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
