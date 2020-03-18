import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ModuleSectionCol = styled.section`
  display: block;
  width: 100%;
  margin: 20px 0 50px;
  a {
    display: block;
    color: #3e3e3e;
    text-decoration: none;
    opacity: 0.75;
    transition: all 1s ease;
  }
  &:hover a {
    transition: all 1s ease;
    opacity: 1;
  }
  .box-img,
  img {
    width: 100%;
    display: block;
    max-width: 100%;
  }
  h2 {
    font-size: 30px;
    text-align: left;
    margin: 20px 0 10px;
  }
  p {
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
  }
`;

export const SectionCol = ({
  linkSectionTo,
  titleSection,
  descrittionSection,
  srcSection
}) => {
  return (
    <ModuleSectionCol>
      <Link to={linkSectionTo}>
        <div className="box-img">
          <img src={srcSection} alt={titleSection} title={titleSection} />
        </div>
        <h2>{titleSection}</h2>
        <p>{descrittionSection}</p>
      </Link>
    </ModuleSectionCol>
  );
};
