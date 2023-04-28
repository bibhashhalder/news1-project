import React from "react";
import "./MainBody.scss";
import SideOne from "../SideOne/SideOne";
import SideTwo from "../SideTwo/SideTwo";
import WidGets from "../WideGets/WidGets";
import "./MainBody.scss";
import { WorldNews } from "../../catagory";
export default function MainBody() {
  return (
    <div className="mainBody">
      <div className="mainBodyWrapper">
        <div className="item">
          <SideOne {...WorldNews} />
        </div>
        <div className="item">
          <SideTwo />
        </div>
        <div className="item">
          <WidGets />
        </div>
      </div>
    </div>
  );
}
