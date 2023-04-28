import React from "react";
import "./Hotlinks.scss";
import {
  MdFavoriteBorder,
  MdFlashOn,
  MdStarBorder,
  MdVisibility,
  MdWhatshot,
} from "react-icons/md";
export default function Hotlinks() {
  return (
    <div className="hotlink">
      <div className="hotlinksWrapper">
        <div className="item">
          <a>
            <MdStarBorder style={{ fontSize: "25px" }} />
            <span>Feature News</span>
          </a>
        </div>
        <div className="item">
          <a>
            <MdFavoriteBorder style={{ fontSize: "25px" }} />
            <span>Most Popular</span>
          </a>
        </div>
        <div className="item">
          <a>
            <MdWhatshot style={{ fontSize: "25px" }} />
            <span>Hot News</span>
          </a>
        </div>
        <div className="item">
          <a>
            <MdFlashOn style={{ fontSize: "25px" }} />
            <span>Trending News</span>
          </a>
        </div>
        <div className="item">
          <a>
            <MdVisibility style={{ fontSize: "25px" }} />
            <span>Most Watched</span>
          </a>
        </div>
      </div>
      <div className="news_ticker">
        <div className="container">
          <div className="title">
            <h1>News Updates</h1>
            <span>(Updates 20 minutes ago)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
