import React, { useState } from "react";
import {
  MdLocationOn,
  MdOutlineLanguage,
  MdOutlinePersonOutline,
  MdRssFeed,
} from "react-icons/md";
import { WiDayCloudy } from "react-icons/wi";
import { BiCalendar } from "react-icons/bi";
import { RxCaretDown } from "react-icons/rx";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { ImGooglePlus } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import "./NavBar.scss";
export default function NavBar() {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = (event) => {
    setDropDown(!dropDown);
  };
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="left">
          <div className="item">
            <MdLocationOn style={{ fontSize: "20px" }}></MdLocationOn>
            <span>New York</span>
          </div>
          <div className="item">
            <WiDayCloudy style={{ fontSize: "20px" }} />
            <span> 21°C</span>
          </div>
          <div className="item">
            <BiCalendar style={{ fontSize: "20px" }} />
            <span>Today (Friday 21 april 2023)</span>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <MdOutlinePersonOutline style={{ fontSize: "20px" }} />
            <span>Login/Register</span>
          </div>
          <div className="item" onClick={handleDropDown}>
            <MdOutlineLanguage style={{ fontSize: "20px" }} />
            <span>English</span>
            <RxCaretDown style={{ fontSize: "20px" }} />
          </div>
          <div className="icons">
            <RiFacebookFill style={{ fontSize: "20px" }} />
            <RiTwitterFill style={{ fontSize: "20px" }} />
            <ImGooglePlus style={{ fontSize: "20px" }} />
            <MdRssFeed style={{ fontSize: "20px" }} />
            <FaYoutube style={{ fontSize: "20px" }} />
          </div>
          {dropDown && (
            <ul className="dropDownMenu">
              <li>
                <a>English</a>
              </li>
              <li>
                <a>Spanish</a>
              </li>
              <li>
                <a>French</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
