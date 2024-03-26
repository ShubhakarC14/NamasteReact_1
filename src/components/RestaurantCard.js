import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../Utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, areaName, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { slaString } = resData?.info?.sla;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={CDN_URL + cloudinaryImageId}
        height="150px"
        width="150px"
      />
      <h3>{name}</h3>
      <h6>{cuisines.join(" ,")}</h6>
      <h6>{avgRating}</h6>
      <h6>{areaName}</h6>
      <h6>{costForTwo}</h6>
      <h6>{slaString}</h6>
    </div>
  );
};

export default RestaurantCard;
