import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import posts from "../data/posts.json";
import './BlogPost.css';

function BlogPost() {
    const { id } = useParams();
    console.log(posts[0].id)

    const [blogposts, setBlogPosts] = useState("");

    useEffect(() =>{
        // data ophalen van de backend met get request
        setBlogPosts(posts)

    }, [posts])

    return (
        <div className="blogpost">
            {blogposts && blogposts.map((blogpost) => {
                return <section>
                    <h3>{blogpost.title}</h3>
                    <h6>{blogpost.date}</h6>
                    <p className="content">{blogpost.content}</p>
                </section>
            })}

        </div>
    )
};

export default BlogPost