import React from "react";
import ReactDOM from "react-dom/client";
const Heading=()=>{
    return(
        <div className="header">
            <div className="logo_container">
             <img  className="logo" 
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwmEuac5AqgAsWvdLSXOvw9V2aZpE2Y5kRKQ6c5sjPg08Hkbvqqby1sA&s"
             alt="logo"
             />              
             
             <div className="Nav_items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
             </div>
            </div>

        </div>
    );

};


const Applayout=()=>{
    return(
        <div>
            <Heading/>
        </div>
    );

};

const root=ReactDOM.createRoot(document.getElementById("Container"));
 root.render(<Applayout/>);