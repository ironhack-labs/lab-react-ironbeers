import styled from "styled-components";

export const StyledBeerForm = styled.form`
    padding: 20px 10% 10px;
    @media (min-width: 541px) {
        padding-left: 30%;
        padding-right: 30%;
    }
`;

export const InputContent = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    label {
        margin: 0 0 2.5px 4.64286%;
        @media (min-width: 541px) {
            font-size: 0.75rem;
        }
    };
    textarea {
        padding: 2px 10px 0;
        border: 1px solid #e2e2e2;
        border-radius: 20px;
        ::placeholder {
            color: red;
            opacity: 1;
        }
    };
`;

export const Input = styled.input`
    border: 1px solid #e2e2e2;
    border-radius: 20px;
    padding: 1.78571% 4px;
    height: ${({ height }) => `${height}px`};
    ::placeholder {
        color: ${({ placeholder }) => (placeholder !== "MM/YYYY") ? "red" : "gray"};
        opacity: 1;
    };
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    };
    &[type=number] {
        -moz-appearance: textfield;
    };
`;

export const InvalidMsg = styled.p`
    margin: 0;
    color: red;
    font-size: 0.55rem;
    @media (max-width: 280px) {
        font-size: 0.8rem;
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