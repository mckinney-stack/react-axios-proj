import React, { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../services/postService';

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
        .then((result) => {
            setPosts(result.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const handleDelete = (id) => {
        deletePost(id)
        .then(() => {
            setPosts(posts.filter((post) => post.id !== id));
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}