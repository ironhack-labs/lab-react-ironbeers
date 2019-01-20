import React, { Component } from "react";
import styled from '@emotion/styled';

export const StyledFormField = styled.div`
  width: 100%;
  label {
    width: 100%;
    margin: ${({label}) => (label === undefined) ? '0' : '1em 0'};
    font-weight: bold;
  }
  .control {
    margin-top: 1em;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    span {
      &.tagName {
        margin-left: .5em;
      }
    }
    input {
      width: 100%;
      padding: .5em 1em;
      margin: ${({label}) => (label === undefined) ? '0' : '1em 0'};
      margin-bottom: 1em;
      box-shadow: none;
      background: transparent;
      outline: 0;
      color: black;
      font-size: .9em;
      border: 2px solid #eee;
      border-radius: .3em;
      &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus {
        -webkit-text-fill-color: grey;
        -webkit-box-shadow: 0 0 0px 1000px white inset;
      }
      &::-webkit-input-placeholder, &::-moz-placeholder, &:-ms-input-placeholder, &:-moz-placeholder {
        color: black;
        opacity: .5;
      }
      &[type='checkbox'] {
        width: auto;
      }
      /* &[type='textarea'] {
-       height: 10em;
-     } */
    }
  }
`;

export default class FormField extends Component {
  render() {
    const {name, label, type, placeholder, onChange, value} = this.props;
    return (
      <StyledFormField>
        <label className="label">{label}</label>
        <div className="control">
          <input className={"input " + type} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
      </StyledFormField>
    );
  }
}
