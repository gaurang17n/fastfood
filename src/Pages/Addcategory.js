import React,{useState} from 'react'
import { Container,Form,Button, Row,Col } from 'react-bootstrap'
import Sidebarnew from '../Components/Sidebarnew'
import Api from '../API/Api'


export default function Addcategory() {
    const [categories,setCategories]=useState({})
    let setData=(event)=>{
        console.log(event.target.name + event.target.value)

        setCategories({
            ...categories,[event.target.name]:event.target.value
        })
        console.log(JSON.stringify(categories))

    }

    let getData =(event)=>{
        event.preventDefault();
        Api.insertData('category',categories).then((result)=>{
            console.log("categories are ")
        })
        console.log("categories are "+JSON.stringify(categories))
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
                        <h2 style={{marginTop:'10Px',color:'#1F2833',fontSize:'40+++px',width:'10'}}>Add New Category Details </h2>
                        <hr/>
                    </Row>
             
                <Form onSubmit={getData}>
                <Form.Group  as={Row} className="mb-3" style={{marginTop:'10Px'}} >
                    <Form.Label  column sm="2" column sm="3" style={{fontWeight:'620',color:'#1F2833',textAlign:'left',paddingLeft:'50px'}}>Category Name</Form.Label>
                    <Col sm="4">
                    <Form.Control type="text" placeholder="Enter Product Name" id='name' name='name' value={categories.name} onChange={setData}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="3" column sm="3" style={{fontWeight:'620',color:'#1F2833',textAlign:'left',paddingLeft:'50px'}}>Category Description</Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" placeholder="Add Description about Product" id='description' name='discription' value={categories.discription} onChange={setData} />
                    </Col>
                </Form.Group>

                <Button variant="dark" size='lg' type="submit" style={{color:'#66FCF1'}} >
                    Add Category
                </Button>
                </Form>
               
                </Col>
                </Row>
            </Container>
        </>
    )
}
