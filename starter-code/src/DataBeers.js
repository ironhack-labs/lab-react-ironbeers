import React from "react";
import Data from "./components/UI/Data";
import FlexContainer from "./components/UI/FlexContainer";

const DataBeers = ({
  image,
  name,
  tagline,
  first_brewed,
  attenuation_level,
  description,
  contributed_by
}) => (
  <FlexContainer>
    <Data title="Name" name={name} />
    <Data title="tagline" tagline={tagline} />
    <Data title="description" description={description} />
  </FlexContainer>
);

export default DataBeers;
