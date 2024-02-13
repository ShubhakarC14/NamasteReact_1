import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../Utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, areaName, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { slaString } = resData?.info.sla;
  return (
    <div className="restaurant-card">
      <img className="restaurant-img" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{avgRating}</h4>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
      <h4></h4>
    </div>
  );
};

export default RestaurantCard;
