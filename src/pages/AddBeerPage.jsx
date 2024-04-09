import { useState } from "react";


import { useNavigate } from "react-router-dom";



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

  // Handler functions for the form inputs. You can leave these as they are.
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const navigate = useNavigate();


  // TASK:
  // 1. Create a function to handle the form submission and send the form data to the Beers API to create a new beer.
  // 2. Use axios to make a POST request to the Beers API.
  // 3. Once the beer is created, navigate the user to the page showing the list of all beers.

  const onAdd = (event) => {
    event.preventDefault();
    addNewBear();
  
  }

  const addNewBear = async() => {
    const payLoad = {
      name:name,
      tagline:tagline,
      description:description,
      image_url: imageUrl,
      first_brewed:firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: parseInt(attenuationLevel),
      contributed_by:contributedBy
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payLoad)
  };

    try{
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/new", requestOptions);
      if(response.status===200){
        navigate("/");
      }
      else{
        console.log("Response status is not 200");
      }
    }
    catch(error){
      console.log(error,"catch error");
    }
  }

  // Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={onAdd}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            value={name}
            required
            onChange={handleName}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={tagline}
            required
            onChange={handleTagline}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={description}
            required
            onChange={handleDescription}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            required
            onChange={handleImageUrl}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="firstBrewed"
            placeholder="Date - MM/YYYY"
            value={firstBrewed}
            required
            onChange={handleFirstBrewed}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewersTips"
            placeholder="..."
            value={brewersTips}
            required
            onChange={handleBrewersTips}
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
              required
              onChange={handleAttenuationLevel}
              min={0}
              max={100}
            />
          </div>

          <label>Contributed By</label>
          <input
            className="form-control mb-4"
            type="text"
            name="contributedBy"
            placeholder="Contributed by"
            value={contributedBy}
            required
            onChange={handleContributedBy}
          />
          <button type="submit" className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
