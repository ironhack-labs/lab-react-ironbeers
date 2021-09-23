import React from 'react'
import { Link } from 'react-router-dom'
import { VscHome } from 'react-icons/vsc'

export default function Header() {
    return (
      <Link to="/">
        <header className="bg-primary mb-3 py-3 d-flex justify-content-center">
          <VscHome size="40" className="text-white"/>
        </header>
      </Link>
    );
}
