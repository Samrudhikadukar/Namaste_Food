import Restrorantcard from "./Restrorantcard";
//import data from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";





const Body=()=>{
const [listData,setdata]=useState([]);
const[searchtext,setsearchtext]=useState("");
const[filteredres,setfilteredres]=useState([]);

useEffect(()=>{
  fechdata();
}
,[]);

const fechdata= async (params) => {
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93519296&lng=77.62448609999999&page_type=DESKTOP_WEB_LISTING");
  const json= await data.json();
  console.log(json)
  setdata(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
   setfilteredres(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
// conditional rendering
// if(listData.length===0){
//   return <Shimmer/>;
// }
    return listData.length===0 ?<Shimmer/>:(
        <div className="bodycontainer">
            <div className="filter">
              <div className="search">
                <input type="text" value={searchtext} onChange={(e)=>{
               setsearchtext(e.target.value);
                }} />
                <button className="searchbtn" onClick={()=>{
                  console.log(searchtext);
                      const searchfilter = listData.filter((res) =>
                     res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    );
                  setfilteredres(searchfilter);
                }}>Search</button>              
              </div>
              <button className="filter_btn" onClick={()=>{
               const filteredData = listData.filter(
                  (restro) => restro.info.avgRating  > 4.5
                     );

                 setdata(filteredData);

                console.log(filteredData);
               }
              }>Top Restuarants</button>
            </div>
            <div className="rescontainer">
              {
                filteredres.map((restro)=>(<Restrorantcard key={restro.info.id} reslist={restro}/>))
              }
            </div>
        </div>
    );
};

export default Body;