import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Groccery from "./components/Groccery";
const styleCard = {
  backgroundColor: "#f1f0f6",
  textAlign: "center",
};
const Groccery = lazy(() => import("./components/Groccery"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Body />
      <Footer /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/groccery",
        element: (
          <Suspense fallback={<h1>Loading !!</h1>}>
            <Groccery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

//JSX (transpiled before it reaches the JS) - PARCEL - Bable

// JSX => React.createElement => ReactElement - JS Object => HTMLelement(render)
