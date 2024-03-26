import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../Utils/contants";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API_URL + resId);
  //   const json = await data.json();
  //   console.log(json.data);
  //   setResInfo(json.data);
  // };
  if (resInfo === null) return <Shimmer />;
  console.log(resInfo);
  const { name, cuisines, costForTwoMessage, locality } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{costForTwoMessage}</h4>
      <h4>{locality}</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
