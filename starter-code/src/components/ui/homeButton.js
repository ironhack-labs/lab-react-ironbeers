import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"



const BtnDecoration = styled(Link)`
  position: fixed;
  background: url("https://www.cervezaslavirgen.com/wp-content/uploads/2017/12/vaso_peque2.jpg");
  background-size: cover;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  transition: 0.3s all;
  &:hover {
    background-color: blue;
    transform: scale(1.5);
  }
`;


const HomeBtn = () => {

  return (

    <BtnDecoration to="/">
    </BtnDecoration >
  )

}

export default HomeBtn;