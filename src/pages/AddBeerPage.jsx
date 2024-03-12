import { useState } from "react";

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



  // TASK:
  // 1. Create a function to handle the form submission and send the form data to the Beers API to create a new beer.
  // 2. Use axios to make a POST request to the Beers API.
  // 3. Once the beer is created, navigate the user to the page showing the list of all beers.

const handleForSubmit = (newBeer) => {
    newBeer.preventDefault()

    axios
      .post(`${api_base_url}/new-beer`, newBeer)
      .then(() => navigate("/beers"))
      .catch(err => console.log(err))
  }

  const handleInputChange = elm => {
    const { value, name } = elm.target
    setNewBeer({ ...newBeer, [name]: value })
  }

  // Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form>
        <form onSubmit={handleForSubmit}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            value={name}
            onChange={handleName}
            value={newBeer.name}
            onChange={handleInputChange}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={tagline}
            onChange={handleTagline}
            value={newBeer.tagline}
            onChange={handleInputChange}
          />

          <label className="form-label">Description</label>
@@ -61,8 +65,8 @@ function AddBeerPage() {
            name="description"
            placeholder="Description"
            rows="3"
            value={description}
            onChange={handleDescription}
            value={newBeer.description}
            onChange={handleInputChange}
          ></textarea>

          <label>Image</label>
@@ -71,8 +75,8 @@ function AddBeerPage() {
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            onChange={handleImageUrl}
            value={newBeer.imageUrl}
            onChange={handleInputChange}
          />

          <label>First Brewed</label>
@@ -81,8 +85,8 @@ function AddBeerPage() {
            type="text"
            name="firstBrewed"
            placeholder="Date - MM/YYYY"
            value={firstBrewed}
            onChange={handleFirstBrewed}
            value={newBeer.firstBrewed}
            onChange={handleInputChange}
          />

          <label>Brewer Tips</label>
@@ -91,8 +95,8 @@ function AddBeerPage() {
            type="text"
            name="brewersTips"
            placeholder="..."
            value={brewersTips}
            onChange={handleBrewersTips}
            value={newBeer.brewersTips}
            onChange={handleInputChange}
          />

          <label>Attenuation Level</label>
@@ -106,8 +110,8 @@ function AddBeerPage() {
              className="form-control mb-4"
              type="number"
              name="attenuationLevel"
              value={attenuationLevel}
              onChange={handleAttenuationLevel}
              value={newBeer.attenuationLevel}
              onChange={handleInputChange}
              min={0}
              max={100}
            />
@@ -119,14 +123,14 @@ function AddBeerPage() {
            type="text"
            name="contributedBy"
            placeholder="Contributed by"
            value={contributedBy}
            onChange={handleContributedBy}
            value={newBeer.contributedBy}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
  )
}

export default AddBeerPage;
export default AddBeerPage
