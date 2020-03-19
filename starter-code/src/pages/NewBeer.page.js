import React, { useState } from "react";
import { CreateBeerForm } from "../components/Form.js";
//import { doLogin, useUserSetter } from "../../lib/auth.api";
import { withRouter } from "react-router-dom";
import { addBeer } from "../../lib/loading.api.js";
import { Layout } from "../layouts/Layout.js";

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
        attenuation_level === 0 ||
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
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <CreateBeerForm {...{ handleSubmit }} />
    </Layout>
  );
});
