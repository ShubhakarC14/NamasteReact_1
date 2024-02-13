import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../Utils/mockData";
const Body = () => {
  //state variable - super powerful variable

  // const [listOfRestaurants, setListOfRestaurants] = useState([
  //   {
  //     info: {
  //       id: "5938",
  //       name: "Burger King",
  //       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //       locality: "Tasker Town",
  //       areaName: "Shivaji Nagar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Burgers", "American"],
  //       avgRating: 4.2,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "5939",
  //       name: "dominos",
  //       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //       locality: "Bhadrappa Layout",
  //       areaName: "Sanjay Nagar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Burgers", "American"],
  //       avgRating: 3.7,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "5940",
  //       name: "MCD",
  //       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //       locality: "Bhadrappa Layout",
  //       areaName: "Sanjay Nagar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Burgers", "American"],
  //       avgRating: 4.1,
  //     },
  //   },
  // ]);

  // normal JS variable
  // let listOfRestaurantsJS = [
  //   {
  //     info: {
  //       id: "5938",
  //       name: "Burger King",
  //       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //       locality: "Tasker Town",
  //       areaName: "Shivaji Nagar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Burgers", "American"],
  //       avgRating: 4.2,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "5939",
  //       name: "dominos",
  //       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //       locality: "Bhadrappa Layout",
  //       areaName: "Sanjay Nagar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Burgers", "American"],
  //       avgRating: 3.7,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "5940",
  //       name: "MCD",
  //       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //       locality: "Bhadrappa Layout",
  //       areaName: "Sanjay Nagar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Burgers", "American"],
  //       avgRating: 4.1,
  //     },
  //   },
  // ];

  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.5
            );

            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
