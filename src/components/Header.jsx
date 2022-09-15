import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

import './Header.styles.css'

export const Header = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/home")
  }
  return(
    <header className='header'>
      <button className='button' onClick={handleClick}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
    </header>
  )
}