import React from "react";
import "./home.scss";
import NavBar from "../../component/NavBar/NavBar";
import AdvertTop from "../../component/AdvertTop/AdvertTop";
import NavbarBottom from "../../component/NavbarBottom/NavbarBottom";
import Hotlinks from "../../component/Hotlinks/Hotlinks";
import MainContent from "../../component/MainContent/MainContent";
import MainBody from "../../component/MainBody/MainBody";
export default function Home() {
  return (
    <div className="home">
      <div className="homeWrapp">
        <NavBar></NavBar>
        <AdvertTop></AdvertTop>
        <NavbarBottom></NavbarBottom>
        <Hotlinks></Hotlinks>
        <MainContent></MainContent>
        <MainBody></MainBody>
      </div>
    </div>
  );
}
