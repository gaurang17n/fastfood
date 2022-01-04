import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
export default function Adminnav() {
    return (
        <>
           <Container>
            <Row>
                <Col>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Link to="/home">Products</Link>
                <Link to="/home">Reviews</Link>
                <Link to="/home">Logout</Link>
                </Nav>
                </Col>
            </Row>
            </Container> 
        </>
            
    )
}
