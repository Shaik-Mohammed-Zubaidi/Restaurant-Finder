import { useEffect, useState } from "react";
import "../Styles/user.css";
const axios = require("axios");

const CityRestaurants = () => {
  const location = window.location.href.toString();
  let locationArray = location.split("/");
  let city = locationArray[locationArray.length - 1];

  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async (city) => {
    axios.get(`/home/user?city=${city}`).then((result) => {
      setRestaurants(result.data);
      console.log(result.data);
    });
  };

  useEffect(() => {
    getRestaurants(city)
      .then(() => console.log("done"))
      .catch((err) => console.log(err));
      // eslint-disable-next-line
  }, []);

  const goToDetailsPage=(restaurant)=>{
    const locationArray= window.location.href.split("");
    const location= locationArray.splice(0,locationArray.length-city.length-1).join("");
    console.log(location);
    window.location.assign(location+`/Details/${restaurant}`);
  }

  return (
    <div>
      <h1 className="app-name">Restaurant Finder</h1>
      <h1>{city}</h1>

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
