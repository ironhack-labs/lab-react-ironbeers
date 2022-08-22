import axios from "axios";

import { useState } from "react";

const beerLink = "https://ih-beers-api2.herokuapp.com/beers/new";

function NewBeer() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage_url] = useState("");
  const [tagline, setTagline] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImage = (e) => setImage_url(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);

  //This handles the submit of the whole form
  const handleSubmit = (e) => {
    e.preventDefault();

    const NewBeer = { name, image_url, tagline, description };
    console.log(NewBeer);

    const createBeer = async () => {
      try {
        const response = await axios.post(beerLink, NewBeer);
        console.log(response);
        setName("");
        setDescription("");
        setTagline("");
        setImage_url("");
      } catch (error) {
        console.log(error);
      }
    };
    createBeer();
  };

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-center">
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleName}
                />

                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={handleDescription}
                />

                <label htmlFor="image_url">Image</label>
                <input
                  type="url"
                  name="image_url"
                  value={image_url}
                  onChange={handleImage}
                />

                <label htmlFor="tagline">Tagline</label>
                <input
                  type="text"
                  name="tagline"
                  checked={tagline}
                  onChange={handleTagline}
                />

                <button type="submit">Add beer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBeer;
