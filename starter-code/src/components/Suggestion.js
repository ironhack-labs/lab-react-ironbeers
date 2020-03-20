import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = styled.li`
  padding: 5px 0;
`;

const Sub = styled.span`
  color: #6c7a89;
`;

export const Suggestions = props => {
  return (
    <Link
      to={`/beer/${props._id}`}
      style={{ textDecoration: "none", color: "#2f2f2f" }}
    >
      <Item>
        {props.name} <Sub>-{props.tagline}</Sub>
      </Item>
    </Link>
  );
};
