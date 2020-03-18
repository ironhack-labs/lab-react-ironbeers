import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = styled.div`
  margin-bottom: 20px;
`;

const MyButton = ({ path, children }) => {
  return (
    <LinkWrapper>
      <Link to={path}>
        <Button size="lg" className="w-100">
          {children}
        </Button>
      </Link>
    </LinkWrapper>
  );
};

export default MyButton;
