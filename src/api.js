import axios from 'axios';

// const API_URL = "https://kpm.onrender.com/api"; // Replace with your API endpoint
const API_URL = "http://localhost:5000/api"; // Replace with your API endpoint

const api = axios.create({
    baseURL: API_URL,
});

export const getItems = () => api.get("/search");
// ?id=6735dde71c874a5ae69d2a36
export const getItemById = (id) => api.get(`/search/id?id=${id}`);
export const createItem = (data) => api.post("/add", data);
export const updateItem = (id, data) => api.put(`/update/${id}`, data);
export const deleteItem = (id) => api.delete(`/delete/${id}`);
