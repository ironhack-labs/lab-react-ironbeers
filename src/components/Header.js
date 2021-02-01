import React from 'react';
import {
  Link,
} from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/">
        Home
      </Link>
    </nav>
  )
}
