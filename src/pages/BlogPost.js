import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts.json";

function BlogPost() {
    const { id } = useParams();
    console.log(posts)

    return (
        <div>
            <p>Dit is blogpost nummer {id}.</p>
        </div>
    )
}

export default BlogPost