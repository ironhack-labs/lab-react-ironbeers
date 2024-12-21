import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const navigate = useNavigate()
  // State variables to store the values of the form inputs. You can leave these as they are.
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  // Handler functions for the form inputs. You can leave these as they are.
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);


const handleNewBeer = (e) =>{
  e.preventDefault();
  const newbeer ={
    name: handleName(e),
    tagline: handleTagline(e),
    description: handleDescription(e),
    imageUrl: handleImageUrl(e),
    firstBrewed: handleFirstBrewed(e),
    brewersTips: handleBrewersTips(e),
    attenuationLevel: handleAttenuationLevel(e),
    contributedBy: handleContributedBy(e)
  }

  postBeer(newbeer)
}
async function handleSubmit(event){
  event.preventDefault();
  const newbeer ={
    name,
    tagline,
    description,
    image_url: imageUrl,
    first_brewed: firstBrewed,
    brewers_tips: brewersTips,
    attenuation_level: attenuationLevel,
    contributed_by: contributedBy
  }
  try{
    const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newbeer),
    })
    if(response.ok){
      navigate("/beers")
    }
  }catch(error){
    console.log(error)
  }
}
  // TASK:
  // 1. Create a function to handle the form submission and send the form data to the Beers API to create a new beer.
  // 2. Use axios to make a POST request to the Beers API.
  // 3. Once the beer is created, navigate the user to the page showing the list of all beers.



  // Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleSubmit}>
          <label>Name
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            value={name}
            onChange={handleName}
          /></label>
          <label>Tagline
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={tagline}
            onChange={handleTagline}
          /></label>

          <label className="form-label">Description
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={description}
            onChange={handleDescription}
          ></textarea>
          </label>
          <label>Image
          <input
            className="form-control mb-4"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            onChange={handleImageUrl}
          /></label>

          <label>First Brewed
          <input
            className="form-control mb-4"
            type="text"
            name="firstBrewed"
            placeholder="Date - MM/YYYY"
            value={firstBrewed}
            onChange={handleFirstBrewed}
          /></label>

          <label>Brewer Tips
          <input
            className="form-control mb-4"
            type="text"
            name="brewersTips"
            placeholder="..."
            value={brewersTips}
            onChange={handleBrewersTips}
          /></label>

          <label>Attenuation Level
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
            />
          </div></label>

          <label>Contributed By
          <input
            className="form-control mb-4"
            type="text"
            name="contributedBy"
            placeholder="Contributed by"
            value={contributedBy}
            onChange={handleContributedBy}
          /></label>
          <button className="btn btn-primary btn-round" type="submit">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
