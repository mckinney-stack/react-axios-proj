import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/postService';

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

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}