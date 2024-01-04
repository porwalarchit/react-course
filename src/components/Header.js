import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [buttonValue, setButtonValue] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between m-2 shadow-lg sm:bg-gray-100" >
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <button 
            onClick={() => {
              buttonValue === "Login"
                ? setButtonValue("Logout")
                : setButtonValue("Login");
            }}
          >
            {buttonValue}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
