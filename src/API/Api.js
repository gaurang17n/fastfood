import React from 'react';
import axios from 'axios';
import Setting from './Setting'


const FetchData = (endpoint,id='') =>{
    return axios.get(`${Setting.url}/${endpoint}/${id}`).then((result)=>{
        return result.data
    })
}

const DeleteData = (endpoint,id) =>{
    
    return axios.delete(`${Setting.url}/${endpoint}/${id}`).then((result)=>{
        return result.data
        
    })
}

const insertData =(endpoint,data) =>{
    return axios.post(`${Setting.url}/${endpoint}`,data).then((result)=>{
        return result.data
    })
}

const updateData =(endpoint,id,data) =>{
    return axios.put(`${Setting.url}/${endpoint}/${id}`,data).then((result)=>{
        return result.data
    })
}
export default
{
    FetchData,
    DeleteData,
    insertData,
    updateData
}