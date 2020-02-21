import React from "react";

export default function SearchBeer({ callback }) {
  return (
    <input
      type="text"
      placeholder="Search for a beer"
      className="inputSearch"
      onChange={callback}
    />
  );
}
