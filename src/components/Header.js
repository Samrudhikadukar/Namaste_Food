import { Logo_URL } from "../utils/contans.js";
import { useState } from "react";

const Header=()=>{
    const[btnName,setbtnName]=useState("Login")
    return(
        <div className="header">
            <div className="logo_container">
             <img  className="logo" 
             src={Logo_URL}
             alt="logo"
             />  
             </div>            
             
             <div className="Nav_items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName==="Login" ?
                        setbtnName("Logout"):setbtnName("Login") ;
                        }}>{btnName}</button>
                </ul>
             </div>
        </div>
    );

};

export default Header;