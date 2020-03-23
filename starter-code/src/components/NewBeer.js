import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Container, Row, Col } from "react-bootstrap";
import { postNewBeer } from "../service/api";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setBrewed] = useState("");
  const [brewers_tips, setTips] = useState("");
  const [attenuation_level, setAttenuation] = useState(0);
  const [contributed_by, setContributed] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = data => {
    postNewBeer(data)
      .then(res => {
        setSuccess("New beer added!");
        handleClear();
      })
      .catch(res => {
        setError("There was an error, no beer added. Try again.");
      });
  };

  const handleClear = () => {
    setName("");
    setTagline("");
    setTips("");
    setAttenuation(0);
    setBrewed("");
    setContributed("");
    setDescription("");
  };

  return (
    <Layout>
      <Container className="cont-form mt-5 mb-5">
        <Row>
          <Col xs={12}>
            <form
              action=""
              onSubmit={e => {
                e.preventDefault();
                handleSubmit({
                  name,
                  tagline,
                  description,
                  first_brewed,
                  brewers_tips,
                  attenuation_level,
                  contributed_by
                });
              }}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="input input-form"
                placeholder="Name"
              />
              <input
                type="text"
                id="tagline"
                name="tagline"
                value={tagline}
                onChange={e => setTagline(e.target.value)}
                className="input input-form"
                placeholder="Tagline"
              />
              <textarea
                name="description"
                id="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                cols="30"
                rows="10"
                className="input text-area-form"
                placeholder="Description"
              ></textarea>
              <input
                type="text"
                id="first_brewed"
                name="first_brewed"
                value={first_brewed}
                onChange={e => setBrewed(e.target.value)}
                className="input input-form"
                placeholder="First Brewed"
              />
              <input
                type="text"
                id="brewers_tips"
                name="brewers_tips"
                value={brewers_tips}
                onChange={e => setTips(e.target.value)}
                className="input input-form"
                placeholder="Brewers Tips"
              />
              <input
                type="text"
                id="attenuation_level"
                name="attenuation_level"
                value={attenuation_level}
                onChange={e => setAttenuation(e.target.value)}
                className="input input-form"
                placeholder="Attenuation Level"
              />
              <input
                type="text"
                id="contributed_by"
                name="contributed_by"
                value={contributed_by}
                onChange={e => setContributed(e.target.value)}
                className="input input-form"
                placeholder="Contributed by"
              />
              <input type="submit" value="ADD NEW" className="input submit" />
              <p>{success || error}</p>
            </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default NewBeer;
