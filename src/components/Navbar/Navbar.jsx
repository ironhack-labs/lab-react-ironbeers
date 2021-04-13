import React, {Suspense} from 'react'

import {Link} from "react-router-dom"
import { FaBeer } from 'react-icons/fa';
import { Form } from 'react-bootstrap';

import './Navbar.css'
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar__style">
            <div className="container-fluid">
                <Link to="/"> <h2 className="brand__style"> <FaBeer/> </h2> </Link>

                <select name="cars" id="cars" /* onChange={languageHandler} */>
                    <option onClick={() => changeLanguage('es')} value="es">es</option>
                    <option onClick={() => changeLanguage('en')} value="en">en</option>
                </select>

            </div>
        </nav>
    )
}




export default function App() {
    return (
      <Suspense fallback="loading">
        <Navbar />
      </Suspense>
    );
  }

