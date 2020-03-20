import React from "react";
import { Link } from "react-router-dom";
import { HeaderSection } from "../../public/styles/Layout";

export const Header = () => {
  return (
    <HeaderSection>
      <Link to="/">
        <i className="fa fa-home"></i>
      </Link>
    </HeaderSection>
  );
};
