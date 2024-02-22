import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../Utils/mockData";
import Shimmer from "./Shimmer";
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

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([
    listOfRestaurants,
  ]);
  const [filteredList, setFilteredList] = useState([filteredRestaurant]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="search here..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              // filter the restaurant cards and update the UI
              //search here
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.6
            );

            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
