import React from 'react'
import Adminnav from './Adminnav'
import Tables from './Tables'
import { Container,Row,Col } from 'react-bootstrap'

export default function Dashboard() {
    return (
            <>
            <Container>
                <Row>
                    <Col sm={4}>
                     <Adminnav/>
                    </Col>
                </Row>
                <Row>
                <Col sm={8}>
                        <Tables/>
                    </Col>
                </Row>
            </Container>
            </>
            
    )
}
