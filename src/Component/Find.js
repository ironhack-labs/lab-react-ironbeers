import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import Navbars from "./Navbar";
import {InputGroup, FormControl, Row, Col,Button} from "react-bootstrap";
import DetailBeer from "./DetailBeer";

class Find extends Component{

  state={
    search:[],
    click:false,
    query:""
  }

  findBeer = (e) => {

    let {click,search,query} = this.state;

    query= document.getElementById('beerSearch').value
    console.log('query',query)
    axios.get(`https://ironbeer-api.herokuapp.com/beers/search?q=${query}`)
      .then(res=>{
        search=res.data;
        console.log('res',res.data)
        this.setState({click:!click,search})
      })

      .catch(err=>{
        console.log(err)
      })
  }

  render() {
    let {search,click} = this.state;
    console.log('search',search)
    return(
      <div>
       <Navbars/>
        <Row>
          <Col xs={4}>
          </Col>
          <Col xs={4}>
            <InputGroup className="mt-5">
              <InputGroup.Prepend>
                <Button
                  onClick={this.findBeer}
                  variant="outline-success"
                >Search</Button>
              </InputGroup.Prepend>
              <FormControl
                id="beerSearch"
                placeholder="Corona"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            {
              click===true
                ?
              search.map((el,i)=>{
                return(
                  <DetailBeer
                    key={i}
                    beer={el}
                  />
                )
              })
                :""
            }

          </Col>
            <Col xs={4}>
            </Col>
        </Row>

      </div>
    );
  }
}
export default Find;