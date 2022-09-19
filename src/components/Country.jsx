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
            <div>Population: {population}</div>
            <div>Area: {area} KM<sup>2</sup></div>
            <div>Region: {region}</div>
            <div>Sub region: {subregion}</div>
            <div>Languages: <Languages/></div>
          </div>
          <div className="right">Time Zones: {timezones.map(timezone=>(`${timezone}, `))}</div>
        </main>
        </div>
    )
}