import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts.json";
import './BlogOverview.css';


function BlogOverview() {

    return (
        <div className="overview">
          <h3>Blogposts</h3>
            <p>Total: {posts.length}</p>
            <ul className="overview-list">
                {posts && posts.map((post) => {
                    return <li  key={post.id}>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        </div>
    );
}

export default BlogOverview