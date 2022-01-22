import React,{useState,useEffect} from 'react'
import Api from '../API/Api'
import PaginationTableComponent from '../Components/pagination.table'
import Sidebarnew from '../Components/Sidebarnew'




export default function Product() {
    const [product,setProduct]=useState([])
    const [keys,setKeys]=useState([])
    let getproducts =() =>{
        Api.FetchData('products').then((product) =>{
           /*  console.log("Total Products" + product.length)
            console.log("get api" + JSON.stringify (product)) */
            setProduct([...product])
            console.log ("all products"+JSON.stringify(product[0]))
            let keys1=Object.keys(product[0])
            setKeys([keys1])
            console.log('keys arr'+keys)

        })
    }
    useEffect(() => {
       getproducts()
    }, [])

        return (
        <div>
            <Sidebarnew/>
            <PaginationTableComponent tabledata={product} temp={['id','name','discription','img','price']}/>
        </div>
    )
}
