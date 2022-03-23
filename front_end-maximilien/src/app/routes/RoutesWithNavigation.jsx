import React from "react";
// import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Routing from "./Routing";
import { selectIsLogged } from "../shared/redux-store/authenticationSlice";
// import IdleTimerCustom from "../components/account/IdleTimerCustom";
// import Navbar from "../components/header/nav";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/nav";
import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkThemeContext";
// import { ToastContainer } from "react-toastify";

const contextClass = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-blue-600",
  warning: "bg-yellow-500",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
  height: "auto",
};

/**
 * Component RouteWithNavigation
 * To create the structure of the application (nav bar, routes, toast, etc...)
 *
 * @author Peter Mollet
 */
const RoutesWithNavigation = () => {
  const { toggleDarkTheme, darkTheme } = useContext(DarkThemeContext);

  // const isLogged = useSelector(selectIsLogged);
  return (
    // <BrowserRouter>
    <div
      className={
        darkTheme
          ? "dark min-h-screen min-w-screen flex flex-col h-2/3 min-w-screen"
          : "min-h-screen min-w-screen flex flex-col bg-gradient-to-b from-bg-start h-2/3 min-w-screen"
      }
    >
      {/* <Navbar /> */}
      <main className="mb-auto">
        <Routing />
      </main>
      <ToastContainer
        toastClassName={({ type }) =>
          contextClass[type || "default"] +
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-sm font-white font-med block p-3"}
        position="bottom-left"
        autoClose={3000}
      />
      {/* <Footer className="h-10" /> */}
    </div>
    // </BrowserRouter>
  );
};

export default RoutesWithNavigation;
