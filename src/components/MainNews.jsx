import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import News from "./News";

export default function MainNews() {
  const { id } = useParams();

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const importedData = await fetch(
      `https://newsapi.org/v2/everything?q=${id}&apiKey=ec5f7561699e4613a0bf1b6485c02c10`
    );
    const convertedData = await importedData.json();
    setNews(convertedData.articles);
  };
  let uniqueKey = 0;
  return (
    <div className="main-section">
      <Link to="/Country-Founder-React/">
        <button className="back">BACK</button>
      </Link>
      <div className="all-news">
        {news.map((n) => (
          <News
            key={uniqueKey++}
            title={n.title}
            description={n.description}
            dateTime={n.publishedAt}
            url={n.url}
            imgUrl={n.urlToImage}
            content={n.content}
          />
        ))}
      </div>
    </div>
  );
}
