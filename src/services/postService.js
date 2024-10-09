import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

const getPosts = () => api.get("/posts");
const deletePost = (id) => api.delete(`/posts/${id}`);
const createPost = (data) => api.post("/posts", data);
const updatePost = (id, data) => api.put(`/posts/${id}`, data);

export { getPosts, deletePost, createPost, updatePost };