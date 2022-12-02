import React, { useState }  from "react";
import { useNavigate }      from "react-router-dom";
import axios                from "axios";

function NewBeer(setShowNav) {
    //setShowNav(true);
    const [name, setName]                 = useState("");
    const [tagline, setTagline]           = useState("");
    const [description, setDescription]   = useState("");
    const [firstBrewed, setFirstBrewed]   = useState("");
    const [brewersTips, setBrewersTips]   = useState("");
    const [attenuation, setAttenuation]   = useState(0);
    const [contributed, setContributed]   = useState("");
    const navigate                         = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const body  = { 
                        name, 
                        tagline, 
                        description, 
                        firstBrewed, 
                        brewersTips, 
                        attenuation,
                        contributed
                    };
    
        axios
          .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
          .then((response) => {
            console.log("New beer: ", body);
            setName("");
            setDescription("");
            setFirstBrewed("");
            setBrewersTips(0);
            setAttenuation("");
            setContributed("")
            navigate("/");
          });
      };

      return (
        <div className="form-group">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={ name }
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="tagline">Tagline</label>
            <input
              className="form-control"
              type="text"
              name="tagline"
              value={ tagline }
              onChange={(e) => {
                setTagline(e.target.value);
              }}
            />
            <label htmlFor="description">Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={ description }
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <label htmlFor="firstBrewed">First Brewed</label>
            <input
              className="form-control"
              type="text"
              name="firstBrewed"
              value={ firstBrewed }
              onChange={(e) => {
                setFirstBrewed(e.target.value);
              }}
            />
            <label htmlFor="brewersTips">Brewer Tips</label>
            <input
              className="form-control"
              type="text"
              name="brewersTips"
              value={ brewersTips }
              onChange={(e) => {
                setBrewersTips(e.target.value);
              }}
            />
            <label htmlFor="attenuation">Attenuation Level</label>
            <input
              className="form-control"
              type="number"
              name="attenuation"
              value={ attenuation }
              onChange={(e) => {
                setAttenuation(e.target.value);
              }}
            />
            <label htmlFor="contributed">Contributed By</label>
            <input
              className="form-control"
              type="text"
              name="contributed"
              value={ contributed }
              onChange={(e) => {
                setContributed(e.target.value);
              }}
            />
            <button type="submit" className="btn btn-primary">ADD NEW</button>
          </form>
        </div>
      );
}

export default NewBeer;