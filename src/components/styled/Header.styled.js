import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';

export const StyledHeader = styled.header`
    background-color: #60c5fc;
    display: flex;
    justify-content: center;
`;

export const StyledHomeIcon = styled(HomeIcon)`
    color: white;
`;

export const Input = styled.input`
    border: 1px solid #e2e2e2;
    border-radius: 20px;
    width: 70%;
    margin: 5px 0;
    padding: 5px;
`;