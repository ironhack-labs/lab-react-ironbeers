import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");
  
  const navigate = useNavigate()

  const manageSubmit = (e) => {
    e.preventDefault();
    console.log("entered in submit")
    const body = {
      name: name,
      tagline: tagline,
      description: description,
      firstBrewed: firstBrewed,
      brewersTips: brewersTips,
      attenuationLevel: attenuationLevel,
      contributedBy: contributedBy,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        console.log("this is the body-->",body)
        setName("")
        setTagline("")
        setDescription("")
        setFirstBrewed("")
        setBrewersTips("")
        setAttenuationLevel(0)
        setContributedBy("")

        navigate("/beers")
      });
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form
            className="bg-light p-4 rounded shadow-sm"
            onSubmit={manageSubmit}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="tagline" className="form-label">
                Tagline
              </label>
              <input
                type="text"
                className="form-control"
                id="tagline"
                name="tagline"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="firstBrewed" className="form-label">
                First Brewed
              </label>
              <input
                type="text"
                className="form-control"
                id="firstBrewed"
                name="firstBrewed"
                value={firstBrewed}
                onChange={(e) => setFirstBrewed(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="brewersTips" className="form-label">
                Brewer's Tips
              </label>
              <input
                type="text"
                className="form-control"
                id="brewersTips"
                name="brewersTips"
                value={brewersTips}
                onChange={(e) => setBrewersTips(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="attenuationLevel" className="form-label">
                Attenuation Level
              </label>
              <input
                type="number"
                className="form-control"
                id="attenuationLevel"
                name="attenuationLevel"
                value={attenuationLevel}
                onChange={(e) => setAttenuationLevel(Number(e.target.value))}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contributedBy" className="form-label">
                Contributed By
              </label>
              <input
                type="text"
                className="form-control"
                id="contributedBy"
                name="contributedBy"
                value={contributedBy}
                onChange={(e) => setContributedBy(e.target.value)}
              />
            </div>

            <button className="btn btn-primary w-100 py-2">
              Create new beer!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBeerPage;
