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
const Restrostyle = {
    background: "#f0f0f0"
};
const Restrorantcard=({reslist})=>{
   const {name,cuisine,rating,deliveryTime,image}=reslist;
    
    return(
        <div className="rescard" style={Restrostyle}>
         <img className="restroimg"alt="img logo" src={image}
         />
          <h3>{name}</h3>
          <h4>{cuisine}</h4>
          <h4>{rating}</h4>
          <h4>{deliveryTime}</h4>
        </div>
    );

};

const data = [
  {
    id: 1,
    name: "Airavati",
    cuisine: "Biryani, North Indian",
    rating: "4.4",
    deliveryTime: "38 mins",
    image: "https://www.ruchiskitchen.com/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1.jpg.webp"
  },
  {
    id: 2,
    name: "KFC",
    cuisine: "Burger, Fast Food",
    rating: "4.2",
    deliveryTime: "30 mins",
    image: "https://static01.nyt.com/images/2025/07/25/multimedia/kla-diner-style-burger-fkmj/kla-diner-style-burger-fkmj-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
  },
  {
    id: 3,
    name: "Domino's Pizza",
    cuisine: "Pizza, Italian",
    rating: "4.3",
    deliveryTime: "25 mins",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  },
  {
    id: 4,
    name: "McDonald's",
    cuisine: "Burger, Fries",
    rating: "4.1",
    deliveryTime: "28 mins",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    id: 5,
    name: "Pizza Hut",
    cuisine: "Pizza, Fast Food",
    rating: "4.0",
    deliveryTime: "35 mins",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
  },
  {
    id: 6,
    name: "WOW! China",
    cuisine: "Chinese, Asian",
    rating: "4.2",
    deliveryTime: "32 mins",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246"
  },
  {
    id: 7,
    name: "Subway",
    cuisine: "Healthy Food, Sandwich",
    rating: "4.0",
    deliveryTime: "20 mins",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569"
  },
  {
    id: 8,
    name: "Barbeque Nation",
    cuisine: "BBQ, North Indian",
    rating: "4.5",
    deliveryTime: "45 mins",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd"
  },
  {
    id: 9,
    name: "Cafe Coffee Day",
    cuisine: "Coffee, Snacks",
    rating: "4.1",
    deliveryTime: "18 mins",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },
  {
    id: 10,
    name: "Biryani House",
    cuisine: "Biryani, Mughlai",
    rating: "4.6",
    deliveryTime: "40 mins",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d29b"
  }
];

const Body=()=>{
    return(
        <div className="bodycontainer">
            <div className="search">search</div>
            <div className="rescontainer">
              {
                data.map((restro)=>(<Restrorantcard key={restro.id} reslist={restro}/>))
              }
            </div>
        </div>
    );
};


const Applayout=()=>{
    return(
        <div>
            <Heading/>
            <Body/>
        </div>
    );

};

const root=ReactDOM.createRoot(document.getElementById("Container"));
 root.render(<Applayout/>);