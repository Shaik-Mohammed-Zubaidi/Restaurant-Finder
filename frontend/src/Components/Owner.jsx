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
        <h1>Welcome Owner</h1>
        {!displayForm && posted && <button onClick={()=>{setDisplayForm(true)}}>+ Add Restaurant</button>}

        {displayForm && posted && <div className="form">
                <RestaurantForm postRestaurant={postRestaurant}/>
            </div>}
        {!posted && <p>Restaurant Posted</p>}
    </div>;
}

export default Owner;