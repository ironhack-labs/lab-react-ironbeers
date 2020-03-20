import React from "react";
import { ModuleSectionCol } from "../../public/styles/HomePage";
import { Link } from "react-router-dom";

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
