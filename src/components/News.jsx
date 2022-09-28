import React from "react";
import "./css/Country.css";

export default function News({
  title,
  description,
  dateTime,
  url,
  imgUrl,
  content,
}) {
  const bgImg = {
    backgroundImage: `url("${imgUrl}")`,
  };
  return (
    <div className="section">
      <a href={url} target="_BLANK" className="main-link">
        <div className="bg moveBg" style={bgImg ? bgImg : "/logo.png"}></div>
        <header className="header flex">
          <div className="title">{title}</div>
          <div className="right">
            <div className="time">
              {dateTime.split("T")[0]}
              <br />
              {dateTime.split("T")[1]}
            </div>
          </div>
        </header>
        <main className="main flex main-news">
          <div className="disc">{description}</div>
          <br />
          <div className="content" id="cont">
            {content}
          </div>
        </main>
      </a>
    </div>
  );
}
