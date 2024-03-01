import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";
import Shimmer from "./components/shimmer";
import { Provider } from "react-redux";
import appStore from "./util/appStore";
import Cart from "./components/cart";

// ------------ Start Developing App -----------------
const AppLayout = () => {
  return (
    //store is mandatory here
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
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
        element: <RestaurantsMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  // {
  //   path: "/restaurants/:resId",
  //   element: <RestaurantsMenu />,
  // },
  // {
  //   path: "/shimmer",
  //   element: <Shimmer />,
  // },
  // {
  //   path: "/cart",
  //   element: (
  //     <Provider store={appStore}>
  //       <Cart />
  //     </Provider>
  //   ),
  // },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
