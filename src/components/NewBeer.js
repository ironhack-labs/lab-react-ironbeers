import Header from "./Header";
import { useState } from "react";
import { Input, Row, Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer(props) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //prevent page reload on submit
    e.preventDefault();
    //create body for post request
    const newBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };
    console.log("Submitted: ", newBeer);

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        //reset state
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");

        //navigate to the '/beers' page
        navigate('/beers');
      });
  };

  return (
    <div>
      <Header />
      <Row className="form-field">
        <h1 className="form-field">Create new beer:</h1>
        <form onSubmit={handleSubmit} style={{ fontSize: 26 }}>
          <div className="form-field">
            <label style={{ marginTop: 8 }}>Name</label>
            <br />
            <Input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              allowClear
              className="form-field"
            />
          </div>

          <div className="form-field">
            <label>Tagline</label>
            <br />
            <Input
              type="text"
              name="tagline"
              onChange={(e) => setTagline(e.target.value)}
              value={tagline}
            />
          </div>

          <div className="form-field">
            <label>Description</label>
            <br />
            <Input
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>

          <div className="form-field">
            <label>Brew Date</label>
            <br />
            <Input
              rows={4}
              type="text"
              name="firstBrewed"
              onChange={(e) => setFirstBrewed(e.target.value)}
              value={firstBrewed}
            />
          </div>

          <div className="form-field">
            <label>Brewer Tips</label>
            <br />
            <Input
              rows={4}
              type="text"
              name="brewersTips"
              onChange={(e) => setBrewersTips(e.target.value)}
              value={brewersTips}
            />
          </div>

          <div className="form-field">
            <label>Attenuation Level</label>
            <br />
            <Input
              rows={4}
              type="number"
              name="attenuationLevel"
              onChange={(e) => setAttenuationLevel(e.target.value)}
              value={attenuationLevel}
            />
          </div>

          <div className="form-field">
            <label>Contributed By</label>
            <br />
            <Input
              rows={4}
              type="text"
              name="contributedBy"
              onChange={(e) => setContributedBy(e.target.value)}
              value={contributedBy}
            />
          </div>

          <button className="submit-btn" type="submit">
            Create Beer
          </button>
        </form>
      </Row>
    </div>
  );
}

export default NewBeer;