import React from "react";
import "./MainContent.scss";
import { MdFlashOn } from "react-icons/md";
export default function MainContent() {
  return (
    <div className="mainContent">
      <div className="col">
        <div className="row">
          <img src="../../../public/image/usUkraine.jpg" alt="" />
          <a className="cat">Politics</a>
          <a className="icon">
            <MdFlashOn style={{ fontSize: "20px" }} />
          </a>
          <div className="postInfo">
            <ul className="nav">
              <li>Molly Nagle</li>
              <li>10 January 2023</li>
            </ul>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="col1">
            <div className="row">
              <img src="../../../public/image/banner-02.jpg" alt="" />
              <a className="cat">Travels</a>
              <a className="icon">
                <MdFlashOn style={{ fontSize: "20px" }} />
              </a>
              <div className="postInfo">
                <ul className="nav">
                  <li>Molly Nagle</li>
                  <li>10 January 2023</li>
                </ul>
                <h3>Lorem ipsum, dolor sit.</h3>
              </div>
            </div>
          </div>
          <div className="col1">
            <div className="row">
              <img src="../../../public/image/banner-03.jpg" alt="" />
              <a className="cat">Education</a>
              <a className="icon">
                <MdFlashOn style={{ fontSize: "20px" }} />
              </a>
              <div className="postInfo">
                <ul className="nav">
                  <li>Molly Nagle</li>
                  <li>10 January 2023</li>
                </ul>
                <h3>Lorem ipsum, dolor sit.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="../../../public/image/banner-04.jpg" alt="" />
          <a className="cat">Election</a>
          <a className="icon">
            <MdFlashOn style={{ fontSize: "20px" }} />
          </a>
          <div className="postInfo">
            <ul className="nav">
              <li>Norma H. Hogan</li>
              <li>10 January 2023</li>
            </ul>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              suscipit doloremque numquam eaque amet esse atque dolor optio unde
              tenetur,
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
