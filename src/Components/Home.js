import React from "react";
import BlogPost from "./BlogPost/BlogPost";
import SideBar from "./BlogPost/SideBar";


const Home =()=>{
    return(
        <section  className="hero">
            <BlogPost />
            <SideBar />
            
            
        </section>
    )
}
export default Home;