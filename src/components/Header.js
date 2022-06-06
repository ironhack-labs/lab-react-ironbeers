import { StyledHeader, StyledHomeIcon, Input } from "./styled/Header.styled";
import { NavLink } from "react-router-dom";

const Header = ({ type, value, handleChange }) => (
    <StyledHeader>
        {(type !== "search") ? (
            <NavLink to="/">
                <StyledHomeIcon fontSize="large" />
            </NavLink>
            ) : <Input type="text" placeholder="Type to search" value={value} onChange={handleChange} />
        }
    </StyledHeader>
);

export default Header;