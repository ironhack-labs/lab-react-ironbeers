import React from "react";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loader({ loading }) {
  return (
    <RingLoader color={"#36D7B7"} loading={loading} css={override} size={150} />
  );
}

export default Loader;
