import { useState } from "react";
import RestaurantForm from "./RestaurantForm";
import axios from 'axios';
import '../Styles/owner.css';

const Owner = ()=>{
    const [displayForm,setDisplayForm]= useState(false);
    const [posted,setPosted]= useState(true);
    const postRestaurant= (restaurant)=>{
        addRestaurant(restaurant).then(()=> console.log()).catch(()=>console.log("error occured"));
        setPosted(false);
    }
    const addRestaurant= async(restaurant)=>{
        axios.post('/home/owner',restaurant).then((responseReceived)=>{
            console.log(responseReceived);
        }).catch(error=> console.log("Sadly, error occured",error));
    }
    
    return <div className="owner">
        <h1 className="app-name">Restaurant Finder</h1>
        <h1>Welcome Aboard!</h1>
        {!displayForm && posted && <button className="add-button" onClick={()=>{setDisplayForm(true)}}>+ Add Restaurant</button>}

        {displayForm && posted && <div className="form">
                <RestaurantForm postRestaurant={postRestaurant}/>
            </div>}
        {!posted && <p className="posted">Restaurant Posted</p>}
    </div>;
}

export default Owner;