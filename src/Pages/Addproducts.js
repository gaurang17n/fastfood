import React,{useState} from 'react'
import { Container,Form,Button, Row,Col } from 'react-bootstrap'
import Sidebarnew from '../Components/Sidebarnew'
import Api from '../API/Api'


export default function Addproducts() {
    const [products,setProducts]=useState({})
    let setData=(event)=>{
        console.log(event.target.name + event.target.value)

        setProducts({
            ...products,[event.target.name]:event.target.value
        })
        console.log(JSON.stringify(products))

    }

    let getData =(event)=>{
        event.preventDefault();
        Api.insertData('products',products).then((result)=>{
            console.log("Product data is ")
        })
        console.log("Products are "+JSON.stringify(products))
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={2}>
                        <Sidebarnew/>
                    </Col>
                <Col sm={10} style={{background: '#f0ffff'}}>
                    <Row>
                        <h2 style={{marginTop:'10Px',color:'#1F2833',fontSize:'40px',width:'10'}}> Add New Product Details </h2>
                        <hr/>
                    </Row>
             
                <Form onSubmit={getData}>
                <Form.Group  as={Row} className="mb-4" style={{marginTop:'10Px'}} >
                    <Form.Label  column sm="2" column sm="2" style={{fontWeight:'620',color:'#1F2833',textAlign:'left',paddingLeft:'50px'}}>Product Name</Form.Label>
                    <Col sm="4">
                    <Form.Control type="text" placeholder="Enter Product Name" id='name' name='name' value={products.name} onChange={setData}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2" column sm="2" style={{fontWeight:'620',color:'#1F2833',textAlign:'left',paddingLeft:'50px'}}>Description</Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" style={{fontWeight:'620',color:'#1F2833'}} placeholder="Add Description about Product" id='discription' name='discription' value={products.discription} onChange={setData} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2" column sm="2" style={{fontWeight:'620',color:'#1F2833',textAlign:'left',paddingLeft:'50px'}}>Price</Form.Label>
                    <Col sm="2">
                    <Form.Control type="text" placeholder="Price" id='price' name='price' value={products.price} onChange={setData} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2" column sm="2" style={{fontWeight:'620',color:'#1F2833',textAlign:'left',paddingLeft:'50px'}}>Image URL</Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Enter Image URL" id='imageurl' name='img' value={products.img} onChange={setData} />
                    </Col>
                </Form.Group>


                <Button variant="dark" size='lg' type="submit" style={{color:'#66FCF1'}} >
                    Add Product
                </Button>
                </Form>
               
                </Col>
                </Row>
            </Container>
        </>
    )
}
