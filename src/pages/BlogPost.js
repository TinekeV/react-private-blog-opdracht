import React, { useEffect } from "react";
import {Link, useParams, useRouteMatch} from "react-router-dom";
import posts from "../data/posts.json";
import './BlogPost.css';

function BlogPost() {
    const { id } = useParams();
    const match = useRouteMatch("/blog/:id")
    console.log(posts)
    console.log(match)

    useEffect(() => {

    }, [])

    return (
        <div className="blogpost">
            <p>Dit is blogpost nummer {id}.</p>
            {posts && posts.map((post) => {
                return  <section>
                    <h3>titel: {post.title}</h3>
                    <h6>date: {post.date}</h6>
                    <p className="content">content: {post.content}</p>
                </section>
            })}

        </div>
    )
};

export default BlogPost