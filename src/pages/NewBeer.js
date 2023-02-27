import { Button, Col, Divider, Input, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { createNewBeer } from "../service/services";

function NewBeer() {
  const navigate = useNavigate();
  async function createBeer(e) {
    e.preventDefault();

    const name = e.target[0].value;
    const tagline = e.target[1].value;
    const description = e.target[2].value;
    const first_brewed = e.target[3].value;
    const brewers_tips = e.target[4].value;
    const attenuation_level = e.target[5].value;
    const contributed_by = e.target[6].value;

    await createNewBeer({
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    });

    navigate("/");
  }
  return (
    <Row justify="center">
      <Col span={20}>
        <Divider orientation="center">Create a new beer</Divider>
        <form onSubmit={createBeer}>
          <label htmlFor="name">
            Name:
            <Input type="text" name="name" id="name" />
          </label>
          <label htmlFor="tagline">
            Tagline:
            <Input type="text" name="tagline" id="tagline" />
          </label>
          <label htmlFor="description">
            Description:
            <Input type="text" name="description" id="description" />
          </label>
          <label htmlFor="first_brewed">
            First brewed:
            <Input type="text" name="first_brewed" id="first_brewed" />
          </label>
          <label htmlFor="brewers_tips">
            Brewer Tips:
            <Input type="text" name="brewers_tips" id="brewers_tips" />
          </label>
          <label htmlFor="attenuation_level">
            Attenuation level:
            <Input
              type="number"
              name="attenuation_level"
              id="attenuation_level"
              min={0}
            />
          </label>
          <label htmlFor="contributed_by ">
            Contributed by:
            <Input type="text" name="contributed_by " id="contributed_by " />
          </label>
          <Button
            htmlType="submit"
            type="primary"
            block
            style={{ marginTop: "1rem" }}
          >
            Create
          </Button>
        </form>
      </Col>
    </Row>
  );
}

export default NewBeer;
