import React,{useState,useEffect} from 'react'
import Api from '../API/Api'
import PaginationTableComponent from '../Components/pagination.table'
import Sidebarnew from '../Components/Sidebarnew'
export default function Product() {
    const [product,setProduct]=useState([])
    let getproducts =() =>{
        Api.FetchData('product').then((product) =>{
           /*  console.log("Total Products" + product.length)
            console.log("get api" + JSON.stringify (product)) */
            setProduct([...product])
        })
    }
    useEffect(() => {
       getproducts()
    }, [])

        return (
        <div>
            <Sidebarnew/>
            <PaginationTableComponent tabledata={product}/>
        </div>
    )
}
