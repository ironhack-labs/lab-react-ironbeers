import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      Oh no !!!
      <br />
      You seem lost pal :( <br />
      GO back to the &nbsp;
      <Link to="/">home page</Link>
    </div>
  );
}
