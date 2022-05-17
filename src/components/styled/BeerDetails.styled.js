import styled from "styled-components";

export const Content = styled.section`
    padding: 20px;
`;

export const BeerImg = styled.figure`
    display: flex;
    justify-content: center;
    img {
        width: 25%;
    }
`;

export const SameLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    * {
        margin: 0;
    };
    h3 {
        color: #9a9a9a;
    };
`;

export const AttenuationLevel = styled.h1`
    color: #9a9a9a;
`;

export const Description = styled.p`
    margin-bottom: 10px;
`;

export const ContributedBy = styled.p`
    color: #9a9a9a;
    margin: 0;
`