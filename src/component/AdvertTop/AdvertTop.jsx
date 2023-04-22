import React from "react";
import "./AdvertTop.scss";
export default function AdvertTop() {
  return (
    <div className="advertTop">
      <div className="advertTopContainer">
        <div className="left">
          <img src="../../assets/image/logo.png" alt="USNews Logo" />
        </div>
        <div className="right">
          <a>
            <img src="../../assets/image/advertttt.gif" alt="Advertisement" />
          </a>
        </div>
      </div>
    </div>
  );
}
