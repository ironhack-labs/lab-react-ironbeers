import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>

        <Link to={"/beers"}>
        {" "}
            <button>List</button>
        </Link>

        <Link to={"/random-beer"} >
        {" "}
            <button>Random </button>
        </Link>

        <Link to={"/new-beer"} >
        {" "}
            <button>New</button>
        </Link>
    </div>
  )
}

export default HomePage