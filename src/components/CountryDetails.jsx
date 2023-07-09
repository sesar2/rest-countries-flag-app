import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./CountryDetails.css";

const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const [bordersNames, setBorderNames] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const location = useLocation()
  const darkmode = location?.state?.darkmode;

  const { countryName } = useParams();

  
  useEffect(()=>{
    const backText = document.querySelector('.back-btn')
    backText.style.color = darkmode ? 'white' : 'black'
    

},[darkmode])

 
  useEffect(() => {
    const fetchData = async () => {

      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
          );
          if (!res.ok)
          throw new Error(`Could not find country with the name ${countryName}`);
          const data = await res.json();
          setCountry(data);
          setLoading(false);

        } catch (error) {
          console.error(error.message);
        }
      }
        fetchData()
  }, []);


  useEffect(()=>{
    const fetchBorderData = async () =>{
      try {
        if(country){
          const borderNames = []
          country.map(async(country)=>{
            for(const borderCode of country.borders){
              const borderResponse = await fetch(`https://restcountries.com/v2/alpha/${borderCode}`);
              const borderData = await borderResponse.json();
              borderNames.push(borderData.name);
            }
            setBorderNames(borderNames)
          })
          }
        }catch(error) {
          console.error('Error fetching border names:', error);
        }
    }
    fetchBorderData()
  }, [country])

  if (loading) {
    return (

      <div className="country-details-wrapper">
        <Link style={{ textDecoration: "none", backgroundColor: "transparent" }} className="back-btn" to="/">
          
            
        </Link>
        <div className="country-details-container">
          <div className="country-info-container">
            <div className="country_name">Loading..</div>
            <div className="country-details">
              <div className="country-info1">
                <div className="country-info-item">
                  Population: <span>Loading...</span>
                </div>
                <div className="country-info-item">
                  Region: <span>Loading...</span>
                </div>
                <div className="country-info-item">
                  Capital: <span>Loading...</span>
                </div>
                <div className="country-info-item">
                  Native name: <span>Loading...</span>
                </div>
              </div>
              <div className="country-info2">
                <div className="country-info-item">
                  Top Level Domain: <span>Loading...</span>
                </div>
                <div className="country-info-item">
                  Currencies: <span>Loading...</span>
                </div>
                <div className="country-info-item">
                  Language: <span>Loading...</span>
                </div>
              </div>
            </div>
            <div className="country-borders">
              <p>Border Countries:</p>{" "}
              {[1, 2, 3].map((border, i) => (
                <div key={i} className="borders-container">
                  <Link key={i} className="border">
                    Loading...
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="country-details-wrapper">
      <div className="back-btn">
        <Link style={{ textDecoration: "none" }} className="back" to="/">
          <img src="./assets/arrow-left-dark.svg" alt="" /> 
           <p>Back </p>
        </Link>
      </div>
      {
        country.map((country, i) => (
          
          <div key={i} className="country-details-container">
            
            <img
              key={i}
              src={country.flags.svg}
              alt=""
              className="country__flag"
            />
            <div className="country-info-container">
              <div className="country_name">{country.name.common}</div>
              <div className="country-details">
                <div className="country-info1">
                  <div className="country-info-item">
                    Population:{" "}
                    <span>{country.population.toLocaleString("en-US")}</span>
                  </div>
                  <div className="country-info-item">
                    Region: <span>{country.region}</span>
                  </div>
                  <div className="country-info-item">
                    Capital:{" "}
                    <span>
                      {!country.capital
                        ? "No official capital"
                        : country.capital}
                    </span>
                  </div>
                  <div className="country-info-item">
                    Native name:{" "}
                    <span>
                      {!country.name.nativeName
                        ? country.name.official
                        : Object.values(country.name.nativeName)[0].common}
                    </span>
                  </div>
                </div>
                <div className="country info2">
                  <div className="country-info-item">
                    Top Level Domain: <span>{country.tld}</span>
                  </div>
                  <div className="country-info-item">
                    Currencies:{" "}
                    <span>
                      {!country.currencies
                        ? "No official currency"
                        : Object.values(country.currencies)[0].name}
                    </span>
                  </div>
                  <div className="country-info-item">
                    Language:{" "}
                    <span>
                      {!country.languages
                        ? "No official language"
                        : Object.values(country.languages)[0]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="test">
                <p>Border Countries:</p>
                <div className="country-borders">
                  {!country.borders ? (
                    <div>none</div>
                  ) : (
                    bordersNames.map((border, i) => (
                      <div key={i} className="border-container">
                        <a href={`/${border}`} key={i} className="border">
                          
                          {border}
                        </a>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        ))[0]
      }
      

    </div>
    
  );
};

export default CountryDetails;
