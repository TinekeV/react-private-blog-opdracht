import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts.json";


function BlogOverview() {

    return (
        <div>
          <h3>Hier vind je al je blogposts op een rij - Private page</h3>
            <p>Aantal posts: {posts.length}</p>
            <p>Blogpost overview:</p>
            <ul>
                {posts && posts.map((post) => {
                    return <li  key={post.id}><Link to={`/blog/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        </div>
    );
}

export default BlogOverview