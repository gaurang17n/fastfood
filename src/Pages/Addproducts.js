import React from 'react'
import Form, { Container } from 'react-bootstrap'

export default function Addproducts() {
    return (
        <>
            <Container>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" id='name' name='name' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Add Description about product" id='description' name='description' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Price" id='price' name='price' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="Image URL" id='imageurl' name='imageurl' />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Container>
        </>
    )
}
