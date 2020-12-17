import { useEffect, useState } from "react";
const axios = require("axios");

const Details = () => {
  const location = window.location.href.toString();
  let locationArray = location.split("/");
  let restaurant = locationArray[locationArray.length - 1].split("%20");

  const [selectedRestaurant, setSelectedRestaurant] = useState({
    name: "",
    location: "",
    cuisines: [],
  });

  useEffect(() => {
    axios
      .get(
        `/home/user/CityRestaurants?restaurant=${
          restaurant[0] + " " + restaurant[1]
        }`
      )
      .then((result) => {
        console.log(result.data[0]);
        setSelectedRestaurant(result.data[0]);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className="app-name">Restaurant Finder</h1>
      <div className="details">
        <h2>{selectedRestaurant.name} </h2>
        <div>
          <div>Address:</div>
          <div>{selectedRestaurant.location} </div>
        </div>
        <div>
          <div>Cuisines:</div>
          <div
            className="flex-class cuisine-details"
            style={{ justifyContent: "space-evenly" }}
          >
            {selectedRestaurant.cuisines.map((cuisine) => (
              <div key={cuisine.cuisineName}>{cuisine.cuisineName}</div>
            ))}{" "}
          </div>
        </div>
        <div>
          <div>Menus:</div>
          <div
            className="menu-details"
            style={{ justifyContent: "space-evenly" }}
          >
            {selectedRestaurant.cuisines.map((cuisine) => (
              <div key={cuisine.dishName}>{cuisine.dishName}</div>
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
