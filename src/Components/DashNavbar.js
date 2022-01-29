import React from 'react';
import { Container, Nav, Navbar,Row,Col,Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import MainNav from './MainNav'


export default function DashNavbar() {


  return <div>
          <Container fluid={true} className="p-0">
            <Row noGutters>
              <MainNav/>
            </Row>  

            <Row>
              <Image src="./images/home4.jpg" style={{height:"100%",width:'100%'}} />
              <div className="centered">Welcome to Lad's FastFood Parlour</div>
            </Row>
         </Container>
  </div>; 
}
