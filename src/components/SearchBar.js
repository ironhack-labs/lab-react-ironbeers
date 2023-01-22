import { useEffect, useState } from "react"

export default function SearchBar(props) {
 
const {queryString,setQueryString}= props

  return (
    <div className="search-bar-container">
      <form>
      
        {props.children[0] ? props.children[0] : props.children }
        <input
          type="text"
          name="queryString"
          id="queryString"
          value={queryString}
          onChange={(e) => {
            setQueryString(e.target.value);
          }}
        />
      {props.children[1] ? props.children[1] : <></> }
      </form>
    </div>
  );
}