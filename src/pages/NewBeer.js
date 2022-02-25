import { useState } from "react";
import axios from "axios";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", postData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form className="mt-5" onSubmit={handleSubmit}>
            <div class="mb-3 d-flex flex-column align-items-start">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="nameInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="mb-3 d-flex flex-column align-items-start">
              <label for="tagline" class="form-label">
                Tagline
              </label>
              <input
                type="text"
                class="form-control"
                id="taglineInput"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
              />
            </div>
            <div class="mb-3 d-flex flex-column align-items-start">
              <label for="description" class="form-label">
                Description
              </label>
              <input
                type="text"
                class="form-control"
                id="descriptionInput"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div class="mb-3 d-flex flex-column align-items-start">
              <label for="firstBrewed" class="form-label">
                First Brewed
              </label>
              <input
                type="date"
                class="form-control"
                id="firstBrewedInput"
                value={firstBrewed}
                onChange={(e) => setFirstBrewed(e.target.value)}
              />
            </div>
            <div class="mb-3 d-flex flex-column align-items-start">
              <label for="brewersTips" class="form-label">
                Brewers Tips
              </label>
              <input
                type="text"
                class="form-control"
                id="brewersTipsInput"
                value={brewersTips}
                onChange={(e) => setBrewersTips(e.target.value)}
              />
            </div>
            <div class="mb-3 d-flex flex-column align-items-start">
              <label for="attenuationLevel" class="form-label">
                Attenuation Level
              </label>
              <input
                type="text"
                class="form-control"
                id="attenuationLevelInput"
                value={attenuationLevel}
                onChange={(e) => setAttenuationLevel(e.target.value)}
              />
            </div>
            <div class="mb-3 d-flex flex-column align-items-start">
              <label for="contributedBy" class="form-label">
                Contributed by
              </label>
              <input
                type="text"
                class="form-control"
                id="contributedByInput"
                value={contributedBy}
                onChange={(e) => setContributedBy(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column align-items-start">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default NewBeer;
