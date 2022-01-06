import React from 'react'
import {Container,Row,Col,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Adminnav() {
    return (
        <>
           <Container>
            <Row>
                <Link to="productAdmin">Products</Link>
            </Row>
            <Row>
                <Link to="reviews">Reviews</Link>   
            </Row>
            <Row>
                <Link to="logout">Logout</Link>
            </Row>
            </Container> 
        </>
            
    )
}
