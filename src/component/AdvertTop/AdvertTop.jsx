import React from "react";
import "./AdvertTop.scss";
export default function AdvertTop() {
  return (
    <div className="advertTop">
      <div className="advertTopContainer">
        <div className="left">
          <img src="../../../public/image/logo.png" alt="USNews Logo" />
        </div>
        <div className="right">
          <a>
            <img
              src="../../../public/image/advertttt.gif"
              alt="Advertisement"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
