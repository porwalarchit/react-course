import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
// import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// On Demand Loading
// Lazy Loading
const Grocery = lazy(() => import("./components/Grocery"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  // Authentication
  useEffect(() => {
    // Make API call for Auth
    const data = {
      name: "Archit Porwal",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </UserContext.Provider>
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
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurantmenu/:resId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
