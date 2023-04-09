import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, InputNumber, Button } from "antd";

export default function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");
  const navigate = useNavigate();
  const { TextArea } = Input;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      firstBrewed: firstBrewed,
      brewersTips: brewersTips,
      attenuationLevel: attenuationLevel,
      contributedBy: contributedBy,
    };

    axios
      .post(`${process.env.REACT_APP_APIURL}/new`, newBeer)
      .then((response) => {
        console.log("this is my response", response);
      })

      .catch((err) => console.log("error creating new beer", err));

    //clear the form
    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel("");
    setContributedBy("");
    navigate("/beers"); //redirect to the route
  };

  return (
    <Form onSubmit={handleSubmit} 
    
    style={{ display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin:"50px"
   }}>
      <Form.Item label="Name">
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item label="Tagline">
        <Input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(e) => {
            setTagline(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item label="Description">
        <TextArea
          rows={3}
          type="text"
          name="description "
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item label=" First Brewed:">
        <Input
          type="text"
          name="firstBrewed"
          value={firstBrewed}
          onChange={(e) => {
            setFirstBrewed(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item label=" Brewers Tips:">
        <Input
          type="text"
          name="brewersTips"
          value={brewersTips}
          onChange={(e) => {
            setBrewersTips(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item label="Attenuation Level:">
        <InputNumber
          type="number"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={(value) => {
            setAttenuationLevel(value);
          }}
        />
      </Form.Item>

      <Form.Item label="Contributed By:">
        <Input
          type="text"
          name="contributedBy"
          value={contributedBy}
          onChange={(e) => {
            setContributedBy(e.target.value);
          }}
        />
      </Form.Item>

    
        <Button htmlType="submit" onClick={handleSubmit}>Add Beer</Button>
     
    </Form>
  );
}
