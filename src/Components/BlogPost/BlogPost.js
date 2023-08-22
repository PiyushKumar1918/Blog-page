import React from "react";
import './blogpost.css'
import Card from "../UI/CARD";

const BlogPost = (props)=>{
    return(
    
           <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                <span className="blogCategory">Featured</span>
                <h1 className="postTitle">Tech Blog By Stark</h1>
                <span className="postedBy">posted onAugust 22,2023 byStark Blogging Tips</span>
                </div>
                <div className="postimageContainer">
                    <img src={require('../../blogPostImages/games.jpg')} alt="Post Image"/>

                </div>
            </Card>
           </div>
        
    )
}
export default BlogPost;