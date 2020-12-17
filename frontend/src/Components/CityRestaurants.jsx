import { useEffect, useState } from "react";
import "../Styles/user.css";
const axios = require("axios");

const CityRestaurants = () => {
  const currentlocation = window.location.href.toString();
  let locationArray = currentlocation.split("/");
  let city = locationArray[locationArray.length - 1];

  locationArray= window.location.href.split("");
  const location= locationArray.splice(0,locationArray.length-city.length-1).join("");

  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async (city) => {
    axios.get(`/home/user?city=${city}`).then((result) => {
      setRestaurants(result.data);
      // console.log(result.data);
    });
  };

  useEffect(() => {
    getRestaurants(city)
      .then(() => console.log("done"))
      .catch((err) => console.log(err));
      // eslint-disable-next-line
  }, []);

  const goToDetailsPage=(restaurant)=>{
    // console.log(location);
    window.location.assign(location+`/Details/${restaurant}`);
  }

  const getSearchedResults = async(searchedName) =>{
    axios.get(location+'/'+searchedName).then(result=>{
      setRestaurants(result.data);
    })
  }

  const handleSearch = () =>{
    let searchedName= document.getElementById("search").value;
    getSearchedResults(searchedName).then(_=>console.log("done")).catch(_=>console.log("error"));
  }

  const clearAll = () =>{
    getRestaurants(city)
      .then(() => console.log("done"))
      .catch((err) => console.log(err));    
  }

  const applyFilter = (val) =>{
    if(val==="l"){
      applyLocationFilter().then(_=>console.log("done"))
    }
    else{
      applyCuisineFilter().then(_=>console.log("done"));
    }
  }

  const applyCuisineFilter=async()=>{
    let cuisineFilter= document.getElementById("cuisine-filter").value;
    axios.get(location+'/filters?cuisine='+cuisineFilter).then(result=>{
      console.log(result);
      setRestaurants(result.data);
    })
  }
  const applyLocationFilter= async()=>{
    let locationFilter= document.getElementById("location-search").value;
    axios.get(location+'/filters?location='+locationFilter).then(result=>{
      console.log(result);
      setRestaurants(result.data);
    })
  }

  return (
    <div>
      <h1 className="app-name">Restaurant Finder</h1>
      <h1>{city}</h1>

      <div className="searches-filters">
      <div className="search"><input id="search" placeholder="Search by hotel name"/>
        <button onClick={handleSearch} >Search</button>
      </div>
      <div>
        <select id="cuisine-filter">
          <option value="Mughlai">Mughlai</option>
          <option value="Chinese">Chinese</option>
          <option value="Hyderabadi">Hyderabadi</option>
        </select>
        <button onClick={()=>applyFilter("c")}>Apply</button>
      </div>
      <div>
        <input id="location-search" placeholder="Enter a location filter"/>
        <button onClick={()=>applyFilter("l")}>Apply</button>
      </div>
      <button onClick={clearAll}>Clear Searches and Filters</button>
      </div>
      <div>
        {restaurants.map((restaurant) => (
          <div className="border restaurants-list" key={restaurant.name} onClick={()=>goToDetailsPage(restaurant.name)}>
            <h2>{restaurant.name}</h2>
            <div>{restaurant.location}</div>
            <div className="flex-class">
              {restaurant.cuisines.map((cuisineEl) => (
                <div
                  className="border"
                  key={restaurant.name + cuisineEl.cuisineName}
                >
                  {cuisineEl.cuisineName}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityRestaurants;
