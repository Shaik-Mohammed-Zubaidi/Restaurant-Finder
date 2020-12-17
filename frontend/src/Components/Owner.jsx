import { useState } from "react";
import RestaurantForm from "./RestaurantForm";
import axios from 'axios';
import '../Styles/owner.css';

const Owner = ()=>{
    const [displayForm,setDisplayForm]= useState(false);
    const [posted,setPosted]= useState(true);
    const postRestaurant= async(restaurant)=>{
        axios.put('/api/restaurant-finder/v1/home/owner',restaurant).then(()=>{
            setPosted(false);
        }).catch(error=> console.log(error));
    }
    return <div className="owner">
        <h1>Welcome Owner</h1>
        {!displayForm && posted && <button onClick={()=>{setDisplayForm(true)}}>+ Add Restaurant</button>}

        {displayForm && posted && <div>
                <RestaurantForm postRestaurant={postRestaurant}/>
            </div>}
        {!posted && <p>Restaurant Posted</p>}
    </div>;
}

export default Owner;