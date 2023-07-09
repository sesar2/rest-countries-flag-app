import { useState, useEffect } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = ({ countries, darkmode }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  
  useEffect(()=>{
    const input = document.querySelector('input')
    const searchList = document.querySelector('.search-results-dropdown')
    const searchListItem = document.querySelectorAll('.search-result-item')

    input.style.backgroundColor = darkmode ? '#2B3844' : 'white'

    if(searchList){
      searchList.style.backgroundColor = darkmode ? '#2B3844' : 'white'
      
    }
    for(let i = 0; i < searchListItem.length; i++){
        searchListItem[i].style.color = darkmode ? 'white' : 'black'
    }
      
    


},[darkmode])



  return (
    <div className="search-bar-container">
      <input 
        value={input}
        onChange={handleChange}
        type="text"
        placeholder="Search for a country..."
      />
      <div className="search-results-dropdown">
        {countries
          .filter((country) => {
            const searchTerm = input.toLowerCase();
            const countryName = country.name.common.toLowerCase();
            return searchTerm && countryName.startsWith(searchTerm);
          })
          .map((country, i) => (
            <Link key={i} style={{ textDecoration: "none" }} to={`/${country.name.common}`}>
              <div key={i} className="search-result-item">
                <img
                  key={i}
                  className="country-flag-small"
                  src={country.flags.svg}
                  alt=""
                />
                <p>{country.name.common}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
