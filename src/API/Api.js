import React from 'react';
import axios from 'axios';
import Setting from './Setting'


const FetchData = (endpoint) =>{
    return axios.get(`${Setting.url}/${endpoint}`).then((result)=>{
        return result.data
    })
}

const DeleteData = (endpoint,id) =>{
    
    return axios.delete(`${Setting.url}/${endpoint}/${id}`).then((result)=>{
        return result.data
        
    })
}
export default
{
    FetchData,
    DeleteData
}