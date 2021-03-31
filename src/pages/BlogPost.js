import React from "react";
import {useParams} from "react-router-dom";
import posts from "../data/posts.json";
import './BlogPost.css';

function BlogPost() {

    const {id} = useParams();
    const post = id - 1;
    console.log(posts[post].title);
    console.log(posts[post].content);

    return (
        <div className="blogpost">
            <h4>{id}.</h4>
            <h3>{posts[post].title}</h3>
            <h6>{posts[post].date}</h6>
            <p className="content">{posts[post].content}</p>
        </div>
    )

};

export default BlogPost