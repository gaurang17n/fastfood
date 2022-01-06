import React from 'react';
import axios from 'axios';



const FetchData = (endpoint) =>{
    return axios.get(`http://localhost:3004/${endpoint}`).then((result)=>{
        return result.data
    })
}

const DeleteData = (endpoint,id) =>{
    return axios.get(`http://localhost:3004/${endpoint}/${id}`).then((result)=>{
        return result.data
    })
}
export default
{
    FetchData,
    DeleteData
    
}