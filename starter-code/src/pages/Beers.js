import React from "react";
import { AllBeer } from "../services/GetBeer";
import { Header } from "../components/Header";

export const Beer = () => {
  return (
    <div>
      <Header></Header>
      <AllBeer></AllBeer>;
    </div>
  );
};
