import { useState } from "react";
import '../Styles/owner.css';

const RestaurantForm=(props)=>{

    const [cuisines,setCuisines]= useState([]);
    const [cuisineInputs,setCuisineInputs]= useState(false);
    const [cuisineEntered,setCuisineEntered]= useState("");
    const [dishesEntered,setDishesEntered]= useState("");
    const addCuisine=()=>{
        const cuisinesCopy= [...cuisines];
        cuisinesCopy.push({cuisineName: cuisineEntered,dishName: dishesEntered});
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
        console.log(restaurant);
        props.postRestaurant(restaurant);
    }

    return <div className="margin-between">
        <div><label>Enter Your Hotel Name: </label><input id="name"/></div>
        <div><label>Enter Your Hotel Location: </label><input id="location"/></div>
        {cuisines.map((cuisine)=> <div key={cuisine.cuisineName}>
            <div>Cuisine: {cuisine.cuisineName} </div>
            <div>Dish: {cuisine.dishName}</div>
        </div>)}
        {cuisineInputs && <div className="cuisine-inputs">
                <div>Enter Cuisine Name: <input onChange={(event)=>setCuisineEntered(event.target.value)} value={cuisineEntered} /></div>
                <div>Enter Dish Name: <input onChange={(event)=>setDishesEntered(event.target.value)} value={dishesEntered} /></div>
                <button onClick={addCuisine}>Add</button>
            </div>}
        <button onClick={()=>{setCuisineInputs(true)}}>Add Cuisine</button>
        <button onClick={submitRestaurant}>Post Restaurant</button>
    </div>
}

export default RestaurantForm;