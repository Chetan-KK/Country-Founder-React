import { useState, useEffect } from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Country from "./components/Country";
import MainNews from "./components/MainNews";

function App() {
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const fetchedData = await fetch("https://restcountries.com/v3.1/all");
    const convertedData = await fetchedData.json();
    setData(convertedData);
    setLoaded(true);
  };

  const [data, setData] = useState([]);

  const [loaded, setLoaded] = useState(false);

  function Home() {
    let uniqueKey = 0;

    return (
      <div className="Countries">
        {data.map((country) => (
          <Country
            key={uniqueKey++}
            nameCommon={country.name.common}
            nameOfficial={country.name.official}
            altSpellings={country.altSpellings}
            area={country.area}
            capital={country.capital}
            coatOfArms={country.coatOfArms}
            continents={country.continents}
            currencies={country.currencies}
            demonyms={country.demonyms}
            flag={country.flags}
            languages={country.languages}
            population={country.population}
            region={country.region}
            subregion={country.subregion}
            timezones={country.timezones}
          />
        ))}
      </div>
    );
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div
          className="loading flex"
          style={loaded ? { top: "-100vh" } : { top: "0" }}
        >
          <div className="loadingAnim"></div>
        </div>
        <Routes>
          <Route path="/Country-Founder-React/" element={<Home />} />
          <Route path="/Country-Founder-React/:id" element={<MainNews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
