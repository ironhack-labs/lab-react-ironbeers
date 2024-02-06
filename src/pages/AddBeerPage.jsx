import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  // State variables to store the values of the form inputs
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  // React Router hook to navigate after adding beer

  // Handler functions for the form inputs
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make POST request using Axios
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/${beerId}",
        {
          name,
          tagline,
          description,
          image_url: imageUrl,
          first_brewed: firstBrewed,
          brewers_tips: brewersTips,
          attenuation_level: attenuationLevel,
          contributed_by: contributedBy,
        }
      );
      // Log response or handle success as needed
      console.log("Response:", response.data);
      // Navigate to the page showing the list of all beers
      history.push("/beers");
    } catch (error) {
      console.error("Error adding beer:", error);
    }
  };

  // Structure and content of the page showing the form for adding a new beer
  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleSubmit}>
          {/* Form inputs */}
          {/* Input fields */}
          {/* Button for form submission */}
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
