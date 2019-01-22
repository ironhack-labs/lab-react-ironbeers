import React from "react";
import Form from "../components/Form";
import { Header } from "../components/Header";

export const NewBeer = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="section">
        <Form />
      </div>
    </React.Fragment>
  );
};
