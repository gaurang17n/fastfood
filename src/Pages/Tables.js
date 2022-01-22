import React,{useState,useEffect} from 'react'
import Api from '../API/Api'
import { Table,Image, Container,Row,Col,Button } from 'react-bootstrap'
import Sidebarnew from '../Components/Sidebarnew'
import {useNavigate} from 'react-router-dom'


export default function Tables(props) {
    let navigate =useNavigate();
    const [products,setProducts]=useState([])
    let getproducts =() =>{
        console.log(props.Data)
        Api.FetchData('products').then((products) =>{
            console.log("Total Products" + products.length)
            console.log("get api" + JSON.stringify (products))
            setProducts([...products])
        })
    }

    let deleteProduct = (id)=>{
        console.log("delete id is" + id)
        Api.DeleteData('products',id).then((result)=>{
            let newproducts = products.filter(pro => pro.id !=id) 
            setProducts(newproducts)
            console.log("Delete Data")
        })
    }

    let dataEdit=(id)=>{
        console.log('id is'+id)
        navigate(`../update/${id}`)
    }
    useEffect(() => {
       getproducts()
    }, [])
    return (
        <>
            <Container fluid style={{flex:"200px"}}>
            <Row>
                <Col sm={2}>
                 <Sidebarnew/>
                 </Col>
                <Col sm={10}>
                    <Table >
                        <thead >
                            <tr>
                        <th colSpan={6} id="menuburger">
                                    Burger Menu
                        </th>
                        </tr>
                            <tr >
                            <th >ID</th>
                            <th>Name</th>
                            <th rowSpan={2}>Description</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="td">
                            {
                                products.map((pro)=>(
                                        <tr id="td">
                                        <td /* id="btnid1" */>{pro.id}</td>
                                        <td /* id="btnid1" */>{pro.name}</td>
                                        <td /* id="btnid1" */ >{pro.discription}</td>
                                        <td /* id="btnid1" */>
                                        <Image src={pro.img} style={{height:'100px',weidth:'100px'}}/>
                                        </td>
                                        <td /* id="btnid1" */>{pro.price}</td>
                                        <td id="btnid">
                                            <Button variant="danger" style={{margin:'10px'}} onClick={()=>deleteProduct(pro.id)}>Delete</Button>
                                            <Button id="updatebtn" onClick={()=>{dataEdit(pro.id)}}>Update</Button>
                                        </td>
                                        </tr>

                            ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
                </Container>

        </>
    )
}
