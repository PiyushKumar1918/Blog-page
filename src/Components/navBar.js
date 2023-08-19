import React, { useState } from "react";
import './nabbar.css'
import {Link} from "react-router-dom"
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'

const Navbar =()=>{

    const [mobile, setMobile] =useState(false)

    return(
     <nav className="navbar">
       
        <h3 className="logo">Logo</h3>
        <ul className= {mobile? "nav-link-mobile" : "nav-link"} onClick={()=>setMobile(false)}>
            <Link to='/'><li>Home</li></Link>
            <Link to='/service'><li>Services</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            <Link to='/about'><li>About</li></Link>
        </ul>

        <button onClick={()=>setMobile(!mobile)} className="mobile-menu-icon">{mobile? <ImCross/> :  <FaBars/> }   </button>
           
     
       
     </nav>
    )
}
export default Navbar;