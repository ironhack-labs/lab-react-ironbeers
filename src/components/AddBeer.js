import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setbrewersTips] = useState("");
  const [attenuationLevel, setattenuationLevel] = useState(0);
  const [contributedBy, setcontributedBy] = useState("");

  const url = "https://ih-beers-api2.herokuapp.com/beers/new";

  const navigate = useNavigate();

  const postBeer = (e) => {
    e.preventDefault();
    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post(url, newBeer)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setbrewersTips("");
        setattenuationLevel(0);
        setcontributedBy("");
        navigate("/beers");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={postBeer}>
        <div className="mb-4">
          <label>Name</label>
          <input
            className="form-control"
            value={name}
            name="name"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>Tagline</label>
          <input
            className="form-control"
            value={tagline}
            name="tagline"
            type="text"
            onChange={(event) => {
              setTagline(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <input
            className="form-control"
            value={description}
            name="description"
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>First Brewed</label>
          <input
            className="form-control"
            value={firstBrewed}
            name="firstBrewed"
            type="text"
            onChange={(event) => {
              setFirstBrewed(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>Brewer's Tips</label>
          <input
            className="form-control"
            value={brewersTips}
            name="brewersTips"
            type="text"
            onChange={(event) => {
              setbrewersTips(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Attenuation Level</label>
          <input
            className="form-control"
            value={attenuationLevel}
            name="attenuationLevel"
            type="number"
            onChange={(event) => {
              setattenuationLevel(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Contributed By</label>
          <input
            className="form-control"
            value={contributedBy}
            name="contributedBy"
            type="text"
            onChange={(event) => {
              setcontributedBy(event.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddBeer;
