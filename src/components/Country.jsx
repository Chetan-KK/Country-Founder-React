import React from "react";
import style from './css/Country.module.css'
import './css/Country.css'

export default ({nameCommon,nameOfficial,altSpellings,area,capital,coatOfArms,continents,currencies,demonyms,flag,languages,population,region,subregion,timezones})=>{


    const bgFlag = {
        backgroundImage: `url("${flag['svg']}")`
    }
    
    function Currencies(){
        for(let currency in currencies){
            return(
            <div className="currency flex">
                <div className="symbol">{currencies[currency]['symbol']}</div>
                <div className="name">{currencies[currency]['name']}</div>
            </div>
            )
        }
    }

    function Languages(){
        for(const lang in languages){
            return(
                <span>{languages[lang]}</span>
            )
        }
    }


    return(
        
        <div className='country'>
            <div className="bg" style={bgFlag}></div>
            <header className='header flex'>
            <div className="left flex">
            <div className="name">{nameCommon}</div>
            <img
              src={coatOfArms['svg']}
              alt=""
              className="coat"
              loading="lazy"
            />
          </div>
          <div className="right">
            <div className="currencies flex">
                <Currencies  />
            </div>
          </div>
            </header>
            <main className="main flex">
          <div className="info">
            <div>Capital: {capital}</div>
            <div>population: {population}</div>
            <div>area: {area} KM<sup>2</sup></div>
            <div>region: {region}</div>
            <div>subregion: {subregion}</div>
            <div>languages: <Languages/></div>
          </div>
          <div className="right">timeZones: {timezones.map(timezone=>(`${timezone}, `))}</div>
        </main>
        </div>
    )
}