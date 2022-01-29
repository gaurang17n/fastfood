import React,{useEffect, useState} from 'react'
import { Container,Form,Button, Row,Col } from 'react-bootstrap'
import Sidebarnew from '../Components/Sidebarnew'
import Api from '../API/Api'
import { useParams } from 'react-router-dom'

export default function Addproducts() {

    const params = useParams(); /* params=parameters */
    const [categories,setCategories]=useState({})

    useEffect(() => {
        dataGet()
    }, []);
    
    let dataGet =() =>{
        Api.FetchData('category',params.id).then((Categories)=>{
            console.log(JSON.stringify(Categories))
            setCategories(Categories)
        })
    }

    let setData=(event)=>{
        console.log(event.target.name + event.target.value)

        setCategories({
            ...categories,[event.target.name]:event.target.value
        })
        console.log(JSON.stringify(categories))

    }


    let getData =(event)=>{
        event.preventDefault();
        Api.updateData('categories',params.id,categories).then((result)=>{
            
        })
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={2}>
                        <Sidebarnew/>
                    </Col>
                <Col sm={10} style={{backgroundColor:'#f0ffff'}}>
                    <Row>
                        <h2 style={{marginTop:'10Px',color:'#1F2833',fontSize:'35px',width:'10'}}>Update Category Page </h2>
                        <hr/>
                    </Row>
             
                <Form onSubmit={getData}>
                <Form.Group  as={Row} className="mb-3" style={{marginTop:'10Px'}} >
                    <Form.Label  column sm="2" style={{fontWeight:'620',color:'#1F2833',textAlign:'left',paddingLeft:'50px'}}>Category Name</Form.Label>
                    <Col sm="4">
                    <Form.Control type="text" style={{color:'#1F2833'}} placeholder="Enter Product Name" id='name' name='name' value={categories.name} onChange={setData}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2" column sm="2" style={{fontWeight:'620',color:'#1F2833',textAlign:'left',paddingLeft:'50px'}}>Description</Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" style={{color:'#1F2833'}} placeholder="Add Description about Product" id='discription' name='discription' value={categories.discription} onChange={setData} />
                    </Col>
                </Form.Group>

                <Button variant="dark" size='lg' type="submit" style={{color:'#66FCF1'}} >
                    Update Category Detail
                </Button>
                </Form>
               
                </Col>
                </Row>
            </Container>
        </>
    )
}
