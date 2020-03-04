import React from "react";
import HomeLink from "./HomeLink";
import { linkOptions } from "../utils/linkOptions";

const Home = props => {
  return (
    <div>
      {linkOptions.map((e, i) => {
        return <HomeLink key={i + "-option"} {...e} />;
      })}
    </div>
  );
};

export default Home;
