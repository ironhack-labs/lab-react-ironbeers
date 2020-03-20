import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 3.5em;
  div {
    display: flex;
    margin: 1em;
    width: 30%;
  }
  label {
    font-weight: 700;
    margin: 1em;
    min-width: fit-content;
  }
  div.btn-container {
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      border: 0.1em solid #f582ae;
      padding: 0.5em 1em;
      font-size: 1.2rem;
      cursor: pointer;
      border-radius: 1em;
      outline: none;
      &:hover {
        background-color: #f582ae;
        color: #fff;
      }
      &:focus {
        box-shadow: 0 0 0.3em 0.2em #f582ae;
      }
    }
  }

  @media (max-width: 1024px) {
    div {
      flex-direction: column;
      width: 45%;
    }
    label {
      margin-bottom: 0.4em;
      margin-left: 1.5em;
    }
    input {
      padding: 1.2em;
      width: auto;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  color: #172c66;
  font-size: 1rem;
  padding: 0.5em 1em;
  border-radius: 2em;
  border: 0.1em solid #8bd3dd;
  outline: none;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0.3em 0.2em #8bd3dd;
  }
`;
