import React from 'react';
import { Container, Nav, Navbar,Row,Col,Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';



export default function DashNavbar() {


  return <div>
        <Container fluid>
                <Navbar className="navhome"> 
                    <Row>
                        <Col>
                            <Navbar.Brand href="#home" className="navhome">FastFood </Navbar.Brand>
                        </Col>

                        <Col>
                            <Nav className="top-right">
                            <Nav.Link ><Link to='#' className="navtext">Home</Link></Nav.Link>
                            <Nav.Link ><Link to='#' className="navtext">Menu</Link></Nav.Link>
                            <Nav.Link ><Link to='#' className="navtext">About</Link></Nav.Link>
                            <Nav.Link ><Link to='#' className="navtext">ContactUs</Link></Nav.Link>
                            <Nav.Link > <Link to='../login' className="navtext">Login</Link></Nav.Link>
                            <Nav.Link ><Link to='#' className="navtext">Register</Link></Nav.Link>
                            </Nav>
                        </Col>
                    </Row>    
                </Navbar>
        </Container>
  </div>;
}
