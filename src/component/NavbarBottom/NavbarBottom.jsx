import React, { useState } from "react";
import {
  MdFavoriteBorder,
  MdFlashOn,
  MdKeyboardArrowDown,
  MdNavigateNext,
  MdStarBorder,
  MdVisibility,
} from "react-icons/md";
import { HiViewGrid } from "react-icons/hi";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaSearch,
} from "react-icons/fa";
import "./NavbarBottom.scss";
export default function NavbarBottom() {
  const [dropDownOne, setDropDownOne] = useState(false);
  const [dropDownTwo, setDropDownTwo] = useState(false);
  const [dropDownThree, serDropDownThree] = useState(false);
  const handleDropDownOne = (event) => {
    setDropDownOne(!dropDownOne);
    setDropDownTwo(false);
    serDropDownThree(false);
  };
  const hadleDropdownTwo = (event) => {
    setDropDownTwo(!dropDownTwo);
    setDropDownOne(false);
    serDropDownThree(false);
  };
  const hadleDropdownThree = (event) => {
    serDropDownThree(!dropDownThree);
    setDropDownOne(false);
    setDropDownTwo(false);
  };
  return (
    <div className="navbarBottom">
      <div className="navbarBottomWrapper">
        <div onClick={handleDropDownOne} className="item">
          <span>
            <a>home</a>
          </span>
          <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
          {dropDownOne && (
            <div className="dropDownMenu1">
              <span>
                <a>Home default</a>
              </span>
              <span className="active">
                <a>Home Boxed</a>
              </span>
              <span>
                <a>Home RTL</a>
              </span>
              <span>
                <a>Home RTL Boxed</a>
              </span>
              <span>
                <a>
                  Home Versions
                  <MdNavigateNext style={{ fontSize: "20px" }} />
                </a>
              </span>
              <span>
                <a>
                  Menu Versions
                  <MdNavigateNext style={{ fontSize: "20px" }} />
                </a>
              </span>
            </div>
          )}
        </div>
        <div onClick={hadleDropdownTwo} className="item">
          <span>worlds news</span>
          <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
          {dropDownTwo && (
            <div className="dropDownMenu2">
              <div className="dropDownMenu2Wrapper">
                <div className="left">
                  <div className="item">
                    <span>All</span>
                    <MdNavigateNext style={{ fontSize: "20px" }} />
                  </div>
                  <div className="item">
                    <span>Latin America</span>
                    <MdNavigateNext
                      className="fa"
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                  <div className="item">
                    <span>Africa</span>
                    <MdNavigateNext
                      className="fa"
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                  <div className="item">
                    <span>Middle East</span>
                    <MdNavigateNext
                      className="fa"
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                  <div className="item">
                    <span>Europ</span>
                    <MdNavigateNext
                      className="fa"
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                </div>
                <div className="right">
                  <div className="rightTop">
                    <div className="item">
                      <div className="img">
                        <a className="thumb">
                          <img src="../../../public/image/post-01.jpg" alt="" />
                        </a>
                        <a className="cat">Beach</a>
                        <a className="icon">
                          <MdVisibility style={{ fontSize: "20px" }} />
                        </a>
                      </div>
                      <a className="title">
                        It is long to established fact that a reader will be
                        distracted by
                      </a>
                    </div>
                    <div className="item">
                      <div className="img">
                        <a className="thumb">
                          <img src="../../../public/image/post-02.jpg" alt="" />
                        </a>
                        <a className="cat">News</a>
                        <a className="icon">
                          <MdStarBorder style={{ fontSize: "20px" }} />
                        </a>
                      </div>
                      <a className="title">
                        It is long to established fact that a reader will be
                        distracted by
                      </a>
                    </div>
                    <div className="item">
                      <div className="img">
                        <a className="thumb">
                          <img src="../../../public/image/post-03.jpg" alt="" />
                        </a>
                        <a className="cat">Ice HiKing</a>
                        <a className="icon">
                          <MdFlashOn style={{ fontSize: "20px" }} />
                        </a>
                      </div>
                      <a className="title">
                        It is long to established fact that a reader will be
                        distracted by
                      </a>
                    </div>
                    <div className="item">
                      <div className="img">
                        <a className="thumb">
                          <img src="../../../public/image/post-04.jpg" alt="" />
                        </a>
                        <a className="cat">Mountain</a>
                        <a className="icon">
                          <MdFavoriteBorder style={{ fontSize: "20px" }} />
                        </a>
                      </div>
                      <a className="title">
                        It is long to established fact that a reader will be
                        distracted by
                      </a>
                    </div>
                  </div>
                  <div className="rightBottom">
                    <a className="prev">
                      <FaLongArrowAltLeft />
                    </a>
                    <a className="all">
                      <HiViewGrid />
                    </a>
                    <a className="next">
                      <FaLongArrowAltRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="item">
          <span>National</span>
        </div>
        <div className="item">
          <span>Financial</span>
        </div>
        <div className="item">
          <span>Intertainment</span>
        </div>
        <div className="item">
          <span>Life style</span>
        </div>
        <div className="item">
          <span>Technology</span>
        </div>
        <div className="item">
          <span>Traval</span>
          <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
        </div>
        <div className="item">
          <span>Sports</span>
          <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
        </div>
        <div className="item" onClick={hadleDropdownThree}>
          <span>Catagory</span>
          <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
          {dropDownThree && (
            <div className="dropDownMenu3">
              <div className="dropDownMenu3Wrapper">
                <div className="col">
                  <div className="item">
                    <a className="title">World's news</a>
                    <ul className="list">
                      <li>
                        <a href="">US &amp; Canada</a>
                      </li>
                      <li>
                        <a href="">Europ</a>
                      </li>
                      <li>
                        <a href="">Asia</a>
                      </li>
                      <li>
                        <a href="">Middle East</a>
                      </li>
                      <li>
                        <a href="">Asia Pacific</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <a className="title">World's news</a>
                    <ul className="list">
                      <li>
                        <a href="">US &amp; Canada</a>
                      </li>
                      <li>
                        <a href="">Europ</a>
                      </li>
                      <li>
                        <a href="">Asia</a>
                      </li>
                      <li>
                        <a href="">Middle East</a>
                      </li>
                      <li>
                        <a href="">Asia Pacific</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <a className="title">Documentation</a>
                    <ul className="list">
                      <li>
                        <a href="">Featured Documentation</a>
                      </li>
                      <li>
                        <a href="">People &amp; Power</a>
                      </li>
                      <li>
                        <a href="">Rebel education</a>
                      </li>
                      <li>
                        <a href="">Rewind</a>
                      </li>
                      <li>
                        <a href="">fault line</a>
                      </li>
                      <li>
                        <a href="">News 360 degree world</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <a className="title">Sports'</a>
                    <ul className="list">
                      <li>
                        <a href="">Football</a>
                      </li>
                      <li>
                        <a href="">Cricket</a>
                      </li>
                      <li>
                        <a href="">Hocky</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <a className="title">Movie'</a>
                    <ul className="list">
                      <li>
                        <a href="">HollyWood</a>
                      </li>
                      <li>
                        <a href="">Dollywood</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <a className="title">Business</a>
                    <ul className="list">
                      <li>
                        <a href="">US Business</a>
                      </li>
                      <li>
                        <a href="">Middle East Business</a>
                      </li>
                      <li>
                        <a href="">Europ Business</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <a className="title">Weather</a>
                    <ul className="list">
                      <li>
                        <a href="">North Pole</a>
                      </li>
                      <li>
                        <a href="">South Pole</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <a className="title">Education</a>
                    <ul className="list">
                      <li>
                        <a href="">Africa Child education</a>
                      </li>
                      <li>
                        <a href="">Bangladeshi Education</a>
                      </li>
                      <li>
                        <a href="">Middle East Education</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <a className="title">Health</a>
                    <ul className="list">
                      <li>
                        <a href="">Africa poor Child health</a>
                      </li>
                      <li>
                        <a href="">Fitness and health</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <a className="title">Humanities</a>
                    <ul className="list">
                      <li>
                        <a href="">Help for Syrian Refugees</a>
                      </li>
                      <li>
                        <a href="">Help for Afgan child</a>
                      </li>
                      <li>
                        <a href="">Help for African child</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <a className="title">Animals</a>
                    <ul className="list">
                      <li>
                        <a href="">African Animals</a>
                      </li>
                      <li>
                        <a href="">Astralian Animals</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="item">
          <span>Pages</span>
          <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
        </div>
        <div className="item">
          <FaSearch style={{ fontSize: "25px" }} />
        </div>
      </div>
    </div>
  );
}
