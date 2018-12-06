import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

export const StyledInput = styled.input`
    margin: 0.75rem;
    border: 1px solid rgb(0,0,0,0.4);
    border-radius: 15px;
    outline: none;
    text-align: center;
`;

export const StyledTA = styled.textarea`
    margin: 0.75rem;
    padding: 1rem;
    border: 1px solid rgb(0,0,0,0.4);
    border-radius: 15px;
    text-align: center;
    outline: none;
`;

export const StyledButton = styled.button`
    border: 1px solid rgb(0,0,0,0.7);
    border-radius: 15px;
    color: white;
    background: rgb(150, 220, 255);
    padding: 1rem;
    transition: all 0.25s;
    font-weight: 700;
    outline: none;

    &:hover {
    color: rgb(150, 220, 255);
    background: white;
    transition: all 0.25s;
    }
`;