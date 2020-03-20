import styled from "styled-components";

export const H2Form = styled.h2`
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  font-size: 36px;
  margin-bottom: 10px;
`;

export const FormBox = styled.form`
  display: block;
  max-width: 100%;
  margin-bottom: 50px;
  width: 100%;
  .box-input {
    display: flex;
    flex-flow: nowrap column;
    width: 100%;
    label {
      color: #3e3e3e;
      border-radius: 25px;
      font-size: 16px;
      font-weight: 700;
      margin: 20px 0 10px;
    }
    input {
      color: #979797;
      border-radius: 25px;
      border: 1px solid #979797;
      padding: 4px 7px;
      box-shadow: none;
      font-size: 16px;
      line-height: 20px;
      &:focus {
        color: #3e3e3e;
        outline: none;
        border-color: #000;
      }
    }
    textarea {
      color: #979797;
      border-radius: 25px;
      border: 1px solid #979797;
      box-shadow: none;
      font-size: 16px;
      line-height: 20px;
      max-height: 300px;
      max-width: 100%;
      min-height: 100px;
      padding: 10px;
      &:focus {
        color: #3e3e3e;
        outline: none;
        border-color: #000;
      }
    }
  }
  button {
    color: #fff;
    cursor: pointer;
    background: #3cc4fc;
    font-size: 20px;
    padding: 10px 25px;
    border-radius: 25px;
    display: block;
    margin: 30px auto 0;
    max-width: 250px;
    transition: all 1000 ease;
    opacity: 1;
    &:hover {
      transition: all 1000 ease;
      opacity: 0.75;
    }
  }
`;
