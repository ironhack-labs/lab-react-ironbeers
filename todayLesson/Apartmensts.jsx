import React from 'react'
// if we want to use the toggle the theme function we made, we can import it here
import { ThemeContext } from '../src/contexts/theme.context'
import {useState, useEffect, useContext} from 'react'
import axios from 'axios'


function Apartmensts() {
  return (
    <div className={theme}>
        <h3>List of apartments</h3>

        {Apartmensts.map((apartment) => (
            <div class
        ))}
    </div>
  )
}

export default Apartmensts