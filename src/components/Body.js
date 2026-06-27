import Restrorantcard from "./Restrorantcard";
import data from "../utils/mockData";
import { useState } from "react";





const Body=()=>{
const [listData,setdata]=useState(data);
    return(
        <div className="bodycontainer">
            <div className="filter">
              <button className="filter_btn" onClick={()=>{
               const filteredData = listData.filter(
                  (restro) => restro.rating > 3
                     );

                 setdata(filteredData);

                console.log(filteredData);
               }
              }>Top Restuarants</button>
            </div>
            <div className="rescontainer">
              {
                listData.map((restro)=>(<Restrorantcard key={restro.resId} reslist={restro}/>))
              }
            </div>
        </div>
    );
};

export default Body;