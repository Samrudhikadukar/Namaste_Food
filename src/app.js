import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Header from "./components/Header";
import Body from "./components/Body";


const Applayout=()=>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    );

};

const root=ReactDOM.createRoot(document.getElementById("Container"));
 root.render(<Applayout/>);