import React from "react";
import posts from "../data/posts.json";

function BlogOverview() {
    const amountOfPosts = console.log(posts)

    return (
        <div>
          <h3>Hier vind je al je blogposts op een rij - Private page</h3>
            <p>Aantal posts: {amountOfPosts}</p>
            <ul>blog titels: </ul>
        </div>
    );
}

export default BlogOverview