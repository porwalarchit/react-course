import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [buttonValue, setButtonValue] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
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
