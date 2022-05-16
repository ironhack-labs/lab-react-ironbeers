import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHomeLink = styled.section`
    padding-bottom: 25px;
    border: 1px solid rgba(128, 128, 128, 0.5);
    margin: 1px 2px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const BeerImg = styled.img`
    width: 100%;
`;

export const Text = styled.div`
    padding: 0 25px;
`;

export const Title = styled.h1`
    margin: 0;
    color: black;
`;

export const Paragraph = styled.p`
    margin: 0;
    color: #959595;
`;