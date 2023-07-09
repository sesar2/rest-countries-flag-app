import './CountryCard.css'
import { useEffect } from 'react';


const CountryCard = ({ flag, name, capital, region, population, darkmode }) => {

  useEffect(()=>{
    const card = document.querySelectorAll('.country-info')
    for(let i = 0; i < card.length; i++){
      card[i].style.backgroundColor = darkmode ? '#2B3844' : 'white'
      card[i].style.color = darkmode ? 'white' : 'black'
    }
    

},[darkmode])

  return (
    <div className="country-card">
        <img className="country-flag" src={flag} alt="" />
        <div className="country-info">
          <div className="country-name">{name}</div>
          <div className="info-item">Population: {population}</div>
          <div className="info-item">Region: {region}</div>
          <div className="info-item">Capital: {!capital ? 'No capital' : capital}</div>
        </div>
    </div>
  )
};

export default CountryCard;
