import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts/1",
});

const getPosts = () => api.get("/posts");

export { getPosts };