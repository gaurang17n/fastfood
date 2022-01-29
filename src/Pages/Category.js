import React,{useState,useEffect} from 'react'
import Api from '../API/Api'
import { Table,Image, Container,Row,Col,Button } from 'react-bootstrap'
import Sidebarnew from '../Components/Sidebarnew'
import {useNavigate} from 'react-router-dom'

export default function Category() {
    let navigate =useNavigate();
    const [categories,setCategories]=useState([])
    let getproducts =() =>{
        Api.FetchData('category').then((categorys) =>{
            setCategories([...categorys])
        })
    }

    let deleteProduct = (id)=>{
        console.log("delete id is" + id)
        Api.DeleteData('category',id).then((result)=>{
            let newcategory = categories.filter(pro => pro.id !=id) 
            setCategories(newcategory)
            console.log("Delete Data")
        })
    }

    let dataEdit=(id)=>{
        navigate(`../catupdate/${id}`)
    }
    useEffect(() => {
       getproducts()
    }, [])
    return (
        <>
            <Container fluid style={{flex:"200px"}}>
            <Row>
                <Col sm={3}>
                 <Sidebarnew/>
                 </Col>
                <Col sm={9}>
                    <Table >
                        <thead >
                            <tr>
                        <th colSpan={6} id="menuburger">
                                    Category 
                        </th>
                        </tr>
                            <tr >
                            <th >ID</th>
                            <th>Name</th>
                            <th rowSpan={2}>Description</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="td">
                            {
                                categories.map((cat)=>(
                                        <tr id="td">
                                        <td >{cat.id}</td>
                                        <td >{cat.name}</td>
                                        <td >{cat.discription}</td>
                                        <td id="btnid">
                                            <Button variant="danger" style={{margin:'10px'}} onClick={()=>deleteProduct(cat.id)}>Delete</Button>
                                            <Button id="updatebtn" onClick={()=>{dataEdit(cat.id)}} >Update</Button>
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
