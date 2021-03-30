import React from "react";
import {Link, useParams, useRouteMatch} from "react-router-dom";
import posts from "../data/posts.json";

function BlogPost() {
    const { id } = useParams();
    const match = useRouteMatch("/blog/:id")
    console.log(posts)
    console.log(match)


    return (
        <div>
            <p>Dit is blogpost nummer {id}.</p>
            {posts && posts.map((post) => {
                return  <section>
                    <h3>titel: {post.title}</h3>
                    <h6>date: {post.date}</h6>
                    <p>content: {post.content}</p>
                </section>
            })}

            {/*{posts && posts.map((post) => {*/}
            {/*    return <h3 key={match.params.id}>{post.title}</h3>*/}
            {/*})}*/}
        </div>
    )
};

export default BlogPost