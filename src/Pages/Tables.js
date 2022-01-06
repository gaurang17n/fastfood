import React,{useState,useEffect} from 'react'
import Api from '../API/Api'
import { Table,Image, Container,Row,Col,Button } from 'react-bootstrap'

export default function Tables() {
    const [products,setProducts]=useState([])
    let getproducts =() =>{
        Api.FetchData('products').then((products) =>{
            console.log("get api" + JSON.stringify (products))
            setProducts([...products])
        })
    }

    let deleteProduct=(id)=>{
        console.log("delete id is" + id)
    }
    useEffect(() => {
       getproducts()
    }, [])
    return (
        <>
            <Container>
            <Row>
                <Col>

                </Col>
                <Col sm={8}>
                    <Table >
                        <thead >
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th rowSpan={2}>Description</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((pro)=>(
                                        <tr>
                                        <td>{pro.id}</td>
                                        <td>{pro.name}</td>
                                        <td >{pro.discription}</td>
                                        <td>
                                        <Image src={pro.img} style={{height:'100px',weidth:'100px'}}/>
                                        </td>
                                        <td>{pro.price}</td>
                                        <td id="btnid">
                                            <Button variant='primary' style={{margin:'10px'}} onClick={()=>deleteProduct(pro.id)}>Delete</Button>
                                            <Button id="updatebtn">Update</Button>
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
