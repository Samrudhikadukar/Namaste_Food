import { IMAGE_BASE_URL } from "../utils/contans";

const Restrostyle = {
    background: "#f0f0f0"
};
const Restrorantcard = ({ reslist }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = reslist.info;
    
    return(
        <div className="rescard" style={Restrostyle}>
         <img className="restroimg"src={IMAGE_BASE_URL + cloudinaryImageId}
        alt={name}
         />
           <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.lastMileTravelString}</h4>
        </div>
    );

};



export default Restrorantcard;