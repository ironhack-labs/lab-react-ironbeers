import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [brewed, setFirstBrewed] = useState("");
  const [tips, setBrewersTips] = useState("");
  const [attenuation, setAttenuationLevel] = useState(1);
  const [contributed, setContributedBy] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: brewed,
      brewers_tips: tips,
      attenuation_level: attenuation,
      contributed_by: contributed,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(1);
        setContributedBy("");
        navigate("/");
      });
  };

  return (
    <div className="container">
    <h3 className="text-center mt-5 mb-2">Add a Beer</h3>
      <div className="d-flex justify-content-center row">
        <div className="d-flex col-6 justify-content-center">
          <form onSubmit={handleSubmit}>
            <label for="formGroupExampleInput" class="form-label">
              Name
            </label>
            <input
              class="form-control"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <label for="formGroupExampleInput" class="form-label">
              Tagline
            </label>
            <input
              class="form-control"
              type="text"
              name="tagline"
              onChange={(e) => setTagline(e.target.value)}
              value={tagline}
            />

            <label for="formGroupExampleInput" class="form-label">
              Description
            </label>
            <input
              class="form-control"
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />

            <label for="formGroupExampleInput" class="form-label">
              Brewed
            </label>
            <input
              class="form-control"
              type="text"
              name="first_brewed"
              onChange={(e) => setFirstBrewed(e.target.value)}
              value={brewed}
            />

            <label for="formGroupExampleInput" class="form-label">
              Tips
            </label>
            <input
              class="form-control"
              type="text"
              name="brewers_tips"
              onChange={(e) => setBrewersTips(e.target.value)}
              value={tips}
            />

            <label for="formGroupExampleInput" class="form-label">
              Attenuation
            </label>
            <input
              class="form-control"
              type="number"
              name="attenuation_level"
              onChange={(e) => setAttenuationLevel(e.target.value)}
              value={attenuation}
            />

            <label for="formGroupExampleInput" class="form-label">
              Contributed By
            </label>
            <input
              class="form-control"
              id="formGroupExampleInput"
              type="text"
              name="contributed_by"
              onChange={(e) => setContributedBy(e.target.value)}
              value={contributed}
            />

            <div className="d-flex justify-content-center">
              <button
                className=" text-light rounded border-primary bg-primary mt-3"
                type="submit"
              >
                Add a Beer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBeerPage;
