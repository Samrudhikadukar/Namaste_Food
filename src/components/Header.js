import { Logo_URL } from "../utils/contans.js";

const Header=()=>{
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
                </ul>
             </div>
        </div>
    );

};

export default Header;