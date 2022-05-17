import { StyledHeader, StyledHomeIcon } from "./styled/Header.styled";
import { NavLink } from "react-router-dom";

const Header = () => (
    <StyledHeader>
        <NavLink to="/">
            <StyledHomeIcon fontSize="large" />
        </NavLink>
    </StyledHeader>
);

export default Header;