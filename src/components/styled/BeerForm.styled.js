import styled from "styled-components";

export const StyledBeerForm = styled.form`
    padding: 20px 10% 0;
    @media (min-width: 541px) {
        padding-left: 30%;
        padding-right: 30%;
    }
`;

export const Input = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    label {
        margin: 0 0 2.5px 4.64286%;
        @media (min-width: 541px) {
            font-size: 0.75rem;
        }
    }
    input {
        border: 1px solid #e2e2e2;
        border-radius: 20px;
        padding: 1.78571% 4px;
    };
    textarea {
        padding: 2px 10px 0;
        border: 1px solid #e2e2e2;
        border-radius: 20px;
    };
`;

export const Submit = styled.button`
    background-color: #60C5FC;
    color: white;
    width: 100%;
    padding: 3.21429%;
    border-width: 0;
    border-radius: 7.14286vw;
    font-size: 1rem;
    font-size: 1rem;
    @media (min-width: 541px) {
        font-size: 0.75rem;
    }
`;