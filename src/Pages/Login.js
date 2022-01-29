import React,{useState} from 'react';
import {Form,Button,Container,Row,Col,Navbar} from 'react-bootstrap'
import '../App.css'
import Api from '../API/Api'
import { useLocalStorage } from '../Hooks/useLocalStorage';
import MainNav from '../Components/MainNav'

export default function Login() {

    /* const [user,setUser]=useState({}) */
    const [user,setUser]=useLocalStorage("username","")
    let setData=(event)=>{
        console.log(event.target.name + event.target.value)

        setUser({
            ...user,[event.target.name]:event.target.value
        })
        console.log(JSON.stringify(user))

    }

    let getData =(event)=>{
        event.preventDefault();
        Api.FetchData('users').then((userdata)=>{
           let newuser= userdata.filter((u)=>u.email==user.email)
            console.log("User data is ",newuser)
        })
        console.log("Products are "+JSON.stringify(user))
    }


  return <div>
    <Container fluid>
            <Navbar className="navhome">
                <Row>
                    <MainNav/>
                </Row>
            </Navbar>
    </Container> 

    <Container fluid>      
                <Row style={{background: '#f0ffff'}}>
                        <h2 style={{marginTop:'10Px',color:'#1F2833',fontSize:'40px',width:'10'}}>Login Page  </h2>
                        <hr/>
                </Row>
                <Row style={{background: '#f0ffff'}}>
                    
                        <Form onSubmit={getData} >

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3" column sm="3" id='formcss'>Email</Form.Label>
                            <Col sm="9">
                            <Form.Control type="email" placeholder="Enter Email Id" id='email' name='email' value={user.email} onChange={setData} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3" column sm="3" id='formcss'>Password</Form.Label>
                            <Col sm="9">
                            <Form.Control type="password" placeholder="Enter Password" id='password' name='password' value={user.password} onChange={setData} />
                            </Col>
                        </Form.Group>

                        <Button variant="dark" size='lg' type="submit" style={{color:'#66FCF1'}} >
                            Add Category
                        </Button>
                        </Form>
                </Row>
    </Container>




  </div>;
}
