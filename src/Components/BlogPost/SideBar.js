import React from "react";
import './sidebar.css';
import Card from "../UI/CARD";

const SideBar=(props)=>{
    return (
        <div className="sidebarContainer">
              <Card style={{marginBottom:'20px'}} >
            <div className="cardHeader">
                <span>About Us</span>
                <div>
                    <img src=""
                </div>
            </div>
        </Card>

        <Card >
            <div className="cardHeader">
                <span>Social Network</span>
            </div>
        </Card>
        </div>
      
    )
}
export default SideBar;