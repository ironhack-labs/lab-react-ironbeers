import React, { useState } from "react";
import { CreateBeerForm } from "../components/Form.js";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { addBeer } from "../../lib/loading.api.js";
import { Layout } from "../layouts/Layout.js";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80vh;
  padding: 40px 0;
  margin: 50px auto 0;
  @media (max-width: 768px) {
  }
`;

export const NewBeer = withRouter(({ history }) => {
  const [error, setError] = useState();
  //const setUser = useUserSetter();
  const handleSubmit = async (
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by
  ) => {
    // Handle errors
    try {
      // CLIENT VALIDATION LOGIC
      if (
        name === "" ||
        tagline === "" ||
        description === "" ||
        first_brewed === "" ||
        brewers_tips === "" ||
        attenuation_level <= 0 ||
        contributed_by === ""
      ) {
        throw new Error("Oye, rellena todos los campos");
      }
      await addBeer(
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by
      );
      // Redirige el router a la HOME
      history.push("/beers");
      //setUser(user);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };
  return (
    <Layout>
      <Container>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <CreateBeerForm {...{ handleSubmit }} />
      </Container>
    </Layout>
  );
});
