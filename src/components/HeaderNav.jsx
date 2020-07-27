import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import styled from 'styled-components'

function HeaderNav() {

    const StyledNav = styled.nav`
        background-color: var(--main-bg-color);
        padding: 0.8em 0;
        text-align: center;
        
        svg {
            color: white;
            font-size: 2em;
        }
    `

    return (
        <StyledNav>
            <Link to="/">
                <HomeIcon/>
            </Link>
        </StyledNav>
        
    )
}

export default HeaderNav