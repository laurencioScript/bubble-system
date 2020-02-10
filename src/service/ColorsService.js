import CONNECT from './../config.js';
const Axios = require('axios');
const token = {headers: {Authorization: "Bearer " +sessionStorage.getItem("token")}};
let ColorsService = {};

const getColors = async () =>{
    const response = await Axios.get(`${CONNECT}/color`, token);    
    return response.data.result;
}

const getColor = async (id) =>{
    const response = await Axios.get(`${CONNECT}/color/${id}`, token)
    return response.data.result[0];
}

const postColor = async (data) =>{
    const response = await Axios.post(`${CONNECT}/color/register`, data, token);
    return response.data.result;
}

const putColor = async (id, data) =>{
    const response = await Axios.put(`${CONNECT}/color/${id}`, data, token);
    return response.data.result;
}

const deleteColor = async (id) =>{
    const response = await Axios.delete(`${CONNECT}/color/${id}`, token);
    return response.data.result;
}

export default ColorsService = {
    getColor,
    getColors,
    putColor,
    postColor,
    deleteColor
}