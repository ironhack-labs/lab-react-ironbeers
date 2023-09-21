import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
 
function NewBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(1);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {name, description, tagline, first_brewed: firstBrewed, brewers_tip: brewerTips, contributed_by: contributedBy, attenuation_level:attenuationLevel}
    try{
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      navigate("/")
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
    <Header />
      <form onSubmit={handleSubmit} className="mx-auto w-50 my-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onBlur={(e) => {
              setName(e.target.value);
            }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tagline" className="form-label">
            TagLine
          </label>
          <input
            type="text"
            className="form-control"
            id="tagline"
            onBlur={(e) => {
              setTagline(e.target.value);
            }}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            onBlur={(e) => {
              setDescription(e.target.value);
            }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="firstBrewed" className="form-label">
            First Brewed
          </label>
          <input
            type="text"
            className="form-control"
            id="firstBrewed"
            onBlur={(e) => {
              setFirstBrewed(e.target.value);
            }}
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brewersTip" className="form-label">
            Brewers Tips
          </label>
          <input
            type="text"
            className="form-control"
            id="brewersTip"
            onBlur={(e) => {
              setBrewerTips(e.target.value);
            }}
            onChange={(e) => {
              setBrewerTips(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="attenuation" className="form-label">
            Atttenuation Level
          </label>
          <input
            type="number"
            className="form-control"
            id="attenuation"
            onBlur={(e) => {
              setAttenuationLevel(e.target.value);
            }}
            onChange={(e) => {
              setAttenuationLevel(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contributedBy" className="form-label">
            Contributed By
          </label>
          <input
            type="text"
            className="form-control"
            id="contributedBy"
            onBlur={(e) => {
              setContributedBy(e.target.value);
            }}
            onChange={(e) => {
              setContributedBy(e.target.value);
            }}
          />
        </div>

        <button className="btn btn-primary">ADD NEW</button>
      </form>
    </>
  );
}

export default NewBeerPage;
