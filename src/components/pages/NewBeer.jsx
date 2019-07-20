import React from 'react'

import HomeHeader from "../HomeHeader";
import FormNewBeer from '../FormNewBeer';

import { Container } from "reactstrap";

export default function NewBeer() {
  return (
    <div>
    <Container>
    <HomeHeader />
    <FormNewBeer />
    </Container>
    </div>
  )
}
