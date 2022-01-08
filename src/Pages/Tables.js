import React,{useState,useEffect} from 'react'
import Api from '../API/Api'
import { Table,Image, Container,Row,Col,Button } from 'react-bootstrap'

export default function Tables(props) {
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
    useEffect(() => {
       getproducts()
    }, [])
    return (
        <>
            <Container>
            <Row>
                <Col>
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
                                        <td >
                                            <Button variant="danger" style={{margin:'10px'}} onClick={()=>deleteProduct(pro.id)}>Delete</Button>
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
