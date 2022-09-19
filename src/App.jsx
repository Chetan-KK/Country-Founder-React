import { useState,useEffect } from 'react'
import './App.css'
import Country from './components/Country';

function App() {

  useEffect(()=>{
    fetchAPI()
  },[])

  const fetchAPI = async ()=>{
    const fetchedData = await fetch('https://restcountries.com/v3.1/all')
    const convertedData = await fetchedData.json()
    console.log(convertedData);
    setData(convertedData)
  }

  const [data,setData] = useState([])
  
  
  return (
    <div className="App">
      <div className="Countries">
      {data.map(country=>(
        <Country 
        key={country.name.common} 
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
    </div>
  )
}

export default App
