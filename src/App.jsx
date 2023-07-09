import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import CountryPage from "./components/CountryPage";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [region, setRegion] = useState("All");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkmode, setDarkmode] = useState(false)

  useEffect(()=>{
    const body = document.querySelector('body')
    const p = document.querySelectorAll('p')
    const a = document.querySelectorAll('a')

    darkmode ? body.setAttribute('data-theme', 'dark') : body.setAttribute('data-theme', 'light')
    darkmode ? body.style.backgroundColor = '#202C36' : body.style.backgroundColor = '#F2F2F2'
    darkmode ? body.style.color = 'white' : body.style.color = 'black'
    for(let i = 0; i < a.length; i++){
      a[i].style.color = darkmode ? 'white' : 'black'
    }
    for(let i = 0; i < a.length; i++){
      a[i].style.backgroundColor = darkmode ? '#2B3844' : 'white'
    }
  }, [darkmode])
 
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const jsonData = await data.json();
      setCountries(jsonData);
      setLoading(false);
    };

    fetchData();
  }, []);


  return (
    <div className='App' >
      <Navbar setDarkmode={setDarkmode} darkmode={darkmode} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="search-dd-container">
                <Search countries={countries} darkmode={darkmode} />
                <Dropdown region={region} setRegion={setRegion} darkmode={darkmode} />
              </div>
              <CountryPage
                darkmode = {darkmode}
                loading={loading}
                region={region}
                countries={countries}
              />
            </div>
          }
        />
        <Route
          path=":countryName"
          element={<CountryDetails countries={countries} />}
        />
        <Route path=":countryCode" elemen={<CountryDetails countries={countries}/>}/>
      </Routes>
    </div>
  );
}

export default App;
