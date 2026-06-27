import{IMAGE_BASE_URL} from "../utils/mockData";

const Restrostyle = {
    background: "#f0f0f0"
};
const Restrorantcard=({reslist})=>{
   const {name,cuisines,rating,distance,image}=reslist;
    
    return(
        <div className="rescard" style={Restrostyle}>
         <img className="restroimg"alt="img logo" src={image}
         />
          <h3>{name}</h3>
          <h4>{cuisines.join(",")}</h4>
          <h4>{rating}💥</h4>
          <h4>{distance}</h4>
        </div>
    );

};



export default Restrorantcard;