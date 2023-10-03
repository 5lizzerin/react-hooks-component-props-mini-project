import React from "react";
import Article from './Article'

function ArticleList ({post}) {
    const array = post.map((posts) => (
    <Article
    key={posts.id}
    title={posts.title}
    data={posts.date}
    preview={posts.preview} 
    />
    ));
    return <main>{array}</main>;

}
export default ArticleList