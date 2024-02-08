// const heading = React.createElement("h1", { id: "heading" }, "Namasthe React");
// console.log(heading);
// react element
// {} we can run any thing of javascipt inside{}
const element = <span>React Element</span>;
const Title = () => (

  <h1 className="head" tabIndex="0">
    Namaste React using JSX
    {element}
  </h1>
);
const title = <h2>Hello World !!!!...</h2>;
const num = 10;
//react component
const Heading1 = <h1 className="heading">Namaste react component</h1>;
// console.log(heading);
// heading and jsxHeading is one at the same
// componenet composition
const HeadingComponent = () => (
  <div id="container">
    <Title></Title>
    <h3>{num * 110}</h3>
    {element}
    <Title />
    {Title()}
    {title}

    <h1 className="heading">Namaste React Functional Component</h1>

  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

//JSX (transpiled before it reaches the JS) - PARCEL - Bable

// JSX => React.createElement => ReactElement - JS Object => HTMLelement(render)

talk is cheap show me the code
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
return (
<div className="header">
<div className="logo-container">
<img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
        />
</div>
<div className="nav-items">
<ul>
<li>Home</li>
<li>About Us</li>
<li>Contact Us</li>
<li>Cart</li>
</ul>
</div>
</div>
);
};
const styleCard = {
backgroundColor: "#f1f0f6",
textAlign: "center",
};

const Body = () => {
return (
<div className="body">
<div className="search">Search</div>
<div className="restaurant-container">
{/_ <RestaurantCard resData={resList[0]} />
<RestaurantCard resData={resList[1]} />
<RestaurantCard resData={resList[2]} />
<RestaurantCard resData={resList[3]} />
<RestaurantCard resData={resList[4]} />
<RestaurantCard resData={resList[5]} />
<RestaurantCard resData={resList[6]} /> _/}
{resList.map((restaurant) => (
<RestaurantCard resData={restaurant} />
))}
</div>
</div>
);
};
const RestaurantCard = (props) => {
const { resData } = props;
const { cloudinaryImageId, name, areaName, cuisines, avgRating, costForTwo } =
resData?.info;
const { slaString } = resData?.info.sla;
console.log(props);
return (
<div className="restaurant-card">
<img
className="restaurant-img"
src={
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
cloudinaryImageId
}
/>
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
const resList = [
{
info: {
id: "426730",
name: "Theobroma",
cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
locality: "Vittal Malya Road",
areaName: "Ashok Nagar",
costForTwo: "₹400 for two",
cuisines: ["Desserts", "Bakery", "Beverages"],
avgRating: 4.6,
parentId: "1040",
avgRatingString: "4.6",
totalRatingsString: "1K+",
sla: {
deliveryTime: 21,
lastMileTravel: 0.3,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "0.3 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-02-08 23:00:00",
opened: true,
},
badges: {
textExtendedBadges: [
{
iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
shortDescription: "Perfect Cake Delivery",
fontColor: "#7E808C",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
shortDescription: "Perfect Cake Delivery",
},
},
],
},
},
},
aggregatedDiscountInfoV3: {
header: "40% OFF",
discountTag: "FLAT DEAL",
},
orderabilityCommunication: {
title: {},
subTitle: {},
message: {},
customIcon: {},
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {
context: "seo-data-f821393c-a697-43d9-b3a2-33790042ab37",
},
cta: {
link: "https://www.swiggy.com/restaurants/theobroma-vittal-malya-road-ashok-nagar-bangalore-426730",
text: "RESTAURANT_MENU",
type: "WEBLINK",
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
info: {
id: "5938",
name: "Burger King",
cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
locality: "Tasker Town",
areaName: "Shivaji Nagar",
costForTwo: "₹350 for two",
cuisines: ["Burgers", "American"],
avgRating: 4.2,
parentId: "166",
avgRatingString: "4.2",
totalRatingsString: "10K+",
sla: {
deliveryTime: 39,
lastMileTravel: 2.9,
serviceability: "SERVICEABLE",
slaString: "35-40 mins",
lastMileTravelString: "2.9 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-02-09 02:00:00",
opened: true,
},
badges: {},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "60% OFF",
subHeader: "UPTO ₹120",
},
orderabilityCommunication: {
title: {},
subTitle: {},
message: {},
customIcon: {},
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {
context: "seo-data-f821393c-a697-43d9-b3a2-33790042ab37",
},
cta: {
link: "https://www.swiggy.com/restaurants/burger-king-tasker-town-shivaji-nagar-bangalore-5938",
text: "RESTAURANT_MENU",
type: "WEBLINK",
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
info: {
id: "124178",
name: "Starbucks Coffee",
cloudinaryImageId: "182191ab163770437b62861a6f987709",
locality: "Ashok Nagar",
areaName: "Lavelle Road",
costForTwo: "₹400 for two",
cuisines: [
"Beverages",
"Cafe",
"Snacks",
"Desserts",
"Bakery",
"Ice Cream",
],
avgRating: 4.3,
parentId: "195515",
avgRatingString: "4.3",
totalRatingsString: "1K+",
sla: {
deliveryTime: 23,
lastMileTravel: 0.5,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "0.5 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-02-08 23:52:00",
opened: true,
},
badges: {
textExtendedBadges: [
{
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
fontColor: "#7E808C",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
},
},
],
},
},
},
aggregatedDiscountInfoV3: {
header: "20% OFF",
subHeader: "UPTO ₹50",
},
orderabilityCommunication: {
title: {},
subTitle: {},
message: {},
customIcon: {},
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {
context: "seo-data-f821393c-a697-43d9-b3a2-33790042ab37",
},
cta: {
link: "https://www.swiggy.com/restaurants/starbucks-coffee-ashok-nagar-lavelle-road-bangalore-124178",
text: "RESTAURANT_MENU",
type: "WEBLINK",
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
info: {
id: "43836",
name: "McDonald's",
cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
locality: "MG Road",
areaName: "Ashok Nagar",
costForTwo: "₹400 for two",
cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
avgRating: 4.3,
parentId: "630",
avgRatingString: "4.3",
totalRatingsString: "10K+",
sla: {
deliveryTime: 25,
lastMileTravel: 0.7,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "0.7 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-02-09 02:55:00",
opened: true,
},
badges: {
textExtendedBadges: [
{
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
fontColor: "#7E808C",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "guiltfree/GF_Logo_android_3x",
shortDescription: "options available",
},
},
],
},
},
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹199",
},
orderabilityCommunication: {
title: {},
subTitle: {},
message: {},
customIcon: {},
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {
context: "seo-data-f821393c-a697-43d9-b3a2-33790042ab37",
},
cta: {
link: "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
text: "RESTAURANT_MENU",
type: "WEBLINK",
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
info: {
id: "588619",
name: "KFC",
cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
locality: "Brigade Road",
areaName: "Ashok Nagar",
costForTwo: "₹400 for two",
cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
avgRating: 4.2,
parentId: "547",
avgRatingString: "4.2",
totalRatingsString: "1K+",
sla: {
deliveryTime: 32,
lastMileTravel: 2.3,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "2.3 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-02-09 01:00:00",
opened: true,
},
badges: {},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹179",
},
orderabilityCommunication: {
title: {},
subTitle: {},
message: {},
customIcon: {},
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {
context: "seo-data-f821393c-a697-43d9-b3a2-33790042ab37",
},
cta: {
link: "https://www.swiggy.com/restaurants/kfc-brigade-road-ashok-nagar-bangalore-588619",
text: "RESTAURANT_MENU",
type: "WEBLINK",
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
info: {
id: "23847",
name: "Domino's Pizza",
cloudinaryImageId: "fjqcvqfgqlw6h0atques",
locality: "Rest House Road",
areaName: "Brigade Road",
costForTwo: "₹400 for two",
cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
avgRating: 4.4,
parentId: "2456",
avgRatingString: "4.4",
totalRatingsString: "5K+",
sla: {
deliveryTime: 25,
serviceability: "SERVICEABLE",
slaString: "25 mins",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-02-08 22:59:00",
opened: true,
},
badges: {},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "₹150 OFF",
subHeader: "ABOVE ₹299",
discountTag: "FLAT DEAL",
},
orderabilityCommunication: {
title: {},
subTitle: {},
message: {},
customIcon: {},
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {
context: "seo-data-f821393c-a697-43d9-b3a2-33790042ab37",
},
cta: {
link: "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
text: "RESTAURANT_MENU",
type: "WEBLINK",
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
info: {
id: "329938",
name: "Churmur Chaat Co",
cloudinaryImageId: "womemvkfstu7zwrfulwe",
locality: "Rama Nagar",
areaName: "Central Bangalore",
costForTwo: "₹250 for two",
cuisines: ["Chaat", "Snacks", "Healthy Food", "North Indian"],
avgRating: 4.5,
veg: true,
parentId: "63178",
avgRatingString: "4.5",
totalRatingsString: "1K+",
sla: {
deliveryTime: 30,
lastMileTravel: 1.6,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "1.6 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-02-08 20:30:00",
opened: true,
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg",
},
],
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png",
},
},
],
},
textBased: {},
textExtendedBadges: {},
},
},
aggregatedDiscountInfoV3: {
header: "25% OFF",
subHeader: "UPTO ₹65",
discountCalloutInfo: {
message: "Free Delivery",
logoCtx: {
logo: "v1655895371/free_delivery_logo_hqipbo.png",
},
},
},
orderabilityCommunication: {
title: {},
subTitle: {},
message: {},
customIcon: {},
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {
context: "seo-data-f821393c-a697-43d9-b3a2-33790042ab37",
},
cta: {
link: "https://www.swiggy.com/restaurants/churmur-chaat-co-rama-nagar-central-bangalore-bangalore-329938",
text: "RESTAURANT_MENU",
type: "WEBLINK",
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
info: {
id: "15870",
name: "All Saints Bakery",
cloudinaryImageId: "yij33zwbu97ulmh9yymy",
locality: "Brigade Road",
areaName: "Ashok Nagar",
costForTwo: "₹200 for two",
cuisines: ["Bakery", "Snacks", "Desserts"],
avgRating: 4.5,
parentId: "21659",
avgRatingString: "4.5",
totalRatingsString: "5K+",
sla: {
deliveryTime: 30,
lastMileTravel: 2.3,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "2.3 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-02-08 18:55:00",
opened: true,
},
badges: {},
isOpen: true,
aggregatedDiscountInfoV2: {},
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {},
},
},
orderabilityCommunication: {
title: {},
subTitle: {},
message: {},
customIcon: {},
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {
context: "seo-data-f821393c-a697-43d9-b3a2-33790042ab37",
},
cta: {
link: "https://www.swiggy.com/restaurants/all-saints-bakery-brigade-road-ashok-nagar-bangalore-15870",
text: "RESTAURANT_MENU",
type: "WEBLINK",
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
info: {
id: "570511",
name: "Bakingo",
cloudinaryImageId: "05994df0e49725bd230146c320b8f7aa",
locality: "Vasanth Nagar",
areaName: "6th Main Road",
costForTwo: "₹299 for two",
cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
avgRating: 4.5,
parentId: "3818",
avgRatingString: "4.5",
totalRatingsString: "1K+",
sla: {
deliveryTime: 36,
lastMileTravel: 3.8,
serviceability: "SERVICEABLE",
slaString: "35-40 mins",
lastMileTravelString: "3.8 km",
iconType: "ICON_TYPE_EMPTY",
},
availability: {
nextCloseTime: "2024-02-09 01:00:00",
opened: true,
},
badges: {
textExtendedBadges: [
{
iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
shortDescription: "Perfect Cake Delivery",
fontColor: "#7E808C",
},
],
},
isOpen: true,
aggregatedDiscountInfoV2: {},
type: "F",
badgesV2: {
entityBadges: {
imageBased: {},
textBased: {},
textExtendedBadges: {
badgeObject: [
{
attributes: {
description: "",
fontColor: "#7E808C",
iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
shortDescription: "Perfect Cake Delivery",
},
},
],
},
},
},
orderabilityCommunication: {
title: {},
subTitle: {},
message: {},
customIcon: {},
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: {},
video: {},
},
},
reviewsSummary: {},
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: {},
},
analytics: {
context: "seo-data-f821393c-a697-43d9-b3a2-33790042ab37",
},
cta: {
link: "https://www.swiggy.com/restaurants/bakingo-vasanth-nagar-6th-main-road-bangalore-570511",
text: "RESTAURANT_MENU",
type: "WEBLINK",
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
];
const AppLayout = () => {
return (
<div className="app">
<Header />
<Body />
</div>
);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

//JSX (transpiled before it reaches the JS) - PARCEL - Bable

// JSX => React.createElement => ReactElement - JS Object => HTMLelement(render)
