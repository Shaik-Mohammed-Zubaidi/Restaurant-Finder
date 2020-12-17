import { useState } from "react";
import '../Styles/owner.css';

const RestaurantForm=(props)=>{

    const [cuisines,setCuisines]= useState([]);
    const [cuisineInputs,setCuisineInputs]= useState(false);
    const [cuisineEntered,setCuisineEntered]= useState("");
    const [dishesEntered,setDishesEntered]= useState("");
    const addCuisine=()=>{
        const cuisinesCopy= [...cuisines];
        cuisinesCopy.push({cuisineName: cuisineEntered,dishesName: dishesEntered});
        setCuisines(cuisinesCopy);
        setCuisineEntered("");
        setDishesEntered("");
        setCuisineInputs(false);
    }

    const submitRestaurant=()=>{
        let restaurant={
            name: document.getElementById("name").value,
            location: document.getElementById("location").value,
            cuisines: cuisines
        }
        props.postRestaurant(restaurant);
    }

    return <div id="form">
        <input id="name"/>
        <input id="location"/>
        {cuisines.map((cuisine)=> <div key={cuisine.cuisineName}>
            <div>{cuisine.cuisineName} </div>
            <div>{cuisine.dishesName}</div>
        </div>)}
        {cuisineInputs && <div className="cuisine-inputs">
                <input onChange={(event)=>setCuisineEntered(event.target.value)} value={cuisineEntered} />
                <input onChange={(event)=>setDishesEntered(event.target.value)} value={dishesEntered} />
                <button onClick={addCuisine}>Add</button>
            </div>}
        <button onClick={()=>{setCuisineInputs(true)}}>Add Cuisine</button>
        <button onClick={submitRestaurant}>Post Restaurant</button>
    </div>
}

export default RestaurantForm;