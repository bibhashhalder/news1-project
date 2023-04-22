import React from "react";
import "./home.scss";
import NavBar from "../../component/NavBar/NavBar";
import AdvertTop from "../../component/AdvertTop/AdvertTop";
export default function Home() {
  return (
    <div className="home">
      <div className="homeWrapp">
        <NavBar></NavBar>
        <AdvertTop></AdvertTop>
      </div>
    </div>
  );
}
