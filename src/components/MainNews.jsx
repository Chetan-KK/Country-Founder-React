import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import News from "./News";

export default function MainNews() {
  const { id } = useParams();

  const [news, setNews] = useState([]);

  const [page, setPage] = useState(1);

  const [loaded, setLoaded] = useState(false);

  const [newsLen, setnewsLen] = useState(0);

  useEffect(() => {
    getNews(page);
  }, []);

  function chkPreviousPage() {
    if (page >= Math.ceil(newsLen / 10)) {
    }
  }

  const getNews = async (pageNo) => {
    const importedData = await fetch(
      `https://newsapi.org/v2/everything?q=${id}&apiKey=ec5f7561699e4613a0bf1b6485c02c10&page=${pageNo}&pageSize=10`
    );
    const convertedData = await importedData.json();
    setNews(convertedData.articles);

    setnewsLen(convertedData.totalResults);

    setLoaded(true);
    console.log(pageNo);
  };

  let uniqueKey = 0;

  async function nextPageEvent() {
    setLoaded(false);
    setPage(page + 1);
    await getNews(page);
    chkPreviousPage();
    setLoaded(true);
  }

  async function previousPageEvent() {
    setLoaded(false);
    setPage(page - 1);
    await getNews(page);
    setLoaded(true);
  }

  return (
    <div className="main-section">
      <div
        className="loading flex"
        style={loaded ? { top: "-100vh" } : { top: "0" }}
      >
        <div className="loadingAnim"></div>
      </div>
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
      <button
        className="previous"
        onClick={previousPageEvent}
        disabled={page <= 1 ? true : false}
      >
        Load Previous News
      </button>
      <button
        className="next"
        onClick={nextPageEvent}
        disabled={page >= Math.ceil(newsLen / 10) ? true : false}
      >
        Load More News
      </button>
    </div>
  );
}
