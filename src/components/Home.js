import React from 'react';
import {
  Link,
} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/all">
        <h2>All Beers</h2>
        <p>lorem ipsum</p>
      </Link>
      <Link to="/random">Random Beer</Link>
      <Link to="/new">New Beer</Link>
    </div>
  )
}
