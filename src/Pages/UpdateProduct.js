import React,{useEffect, useState} from 'react'
import { Container,Form,Button, Row,Col } from 'react-bootstrap'
import Sidebarnew from '../Components/Sidebarnew'
import Api from '../API/Api'
import { useParams } from 'react-router-dom'

export default function Addproducts() {

    const params = useParams(); /* params=parameters */
    const [products,setProducts]=useState({})

    useEffect(() => {
        dataGet()
    }, []);
    
    let dataGet =() =>{
        Api.FetchData('products',params.id).then((product)=>{
            console.log(JSON.stringify(product))
            setProducts(product)
        })
    }

    let setData=(event)=>{
        console.log(event.target.name + event.target.value)

        setProducts({
            ...products,[event.target.name]:event.target.value
        })
        console.log(JSON.stringify(products))

    }


    let getData =(event)=>{
        event.preventDefault();
        Api.updateData('products',params.id,products).then((result)=>{
            
        })
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={2}>
                        <Sidebarnew/>
                    </Col>
                <Col sm={10} style={{backgroundColor:'#1F2833'}}>
                    <Row>
                        <h2 style={{marginTop:'10Px',color:'#66FCF1',fontSize:'35px',width:'10'}}>New Product Details </h2>
                        <hr/>
                    </Row>
             
                <Form onSubmit={getData}>
                <Form.Group  as={Row} className="mb-3" style={{marginTop:'10Px'}} >
                    <Form.Label  column sm="2" style={{color:'#66FCF1',textAlign:'left',paddingLeft:'50px'}}>Product Name</Form.Label>
                    <Col sm="4">
                    <Form.Control type="text" placeholder="Enter Product Name" id='name' name='name' value={products.name} onChange={setData}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2" column sm="2" style={{color:'#66FCF1',textAlign:'left',paddingLeft:'50px'}}>Description</Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Add Description about Product" id='discription' name='discription' value={products.discription} onChange={setData} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2" column sm="2" style={{color:'#66FCF1',textAlign:'left',paddingLeft:'50px'}}>Price</Form.Label>
                    <Col sm="2">
                    <Form.Control type="text" placeholder="Price" id='price' name='price' value={products.price} onChange={setData} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2" column sm="2" style={{color:'#66FCF1',textAlign:'left',paddingLeft:'50px'}}>Image URL</Form.Label>
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
