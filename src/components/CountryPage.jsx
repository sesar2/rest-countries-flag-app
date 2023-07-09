import CountryCard from "./CountryCard";
import "./CountryPage.css";
import { Link } from "react-router-dom";

const CountryPage = ({ countries, region, loading, darkmode}) => {
  if (loading) {
    return (
      <div className="country-page">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((card, i) => (
          <CountryCard
            darkmode={darkmode}
            key={i}
            name={"Loading..."}
            flag={"../assets/43464b.png"}
            region={"Loading..."}
            population={"Loading..."}
            capital={"Loading..."}
          />
        ))}
      </div>
    );
  }

  return region === "Europe" ? (
    <div className="country-page">
      {countries
        .filter((country) => country.region === "Europe")
        .map((country, i) => (
          <Link
            state={{darkmode}}
            darkmode={darkmode}
            key={i}
            style={{ textDecoration: "none" }}
            to={`/${country.name.common}`}
          >
            <CountryCard
              darkmode={darkmode}
              key={i}
              name={country.name.common}
              flag={country.flags.svg}
              region={country.region}
              population={country.population.toLocaleString("en-US")}
              capital={country.capital}
            />
          </Link>
        ))}
    </div>
  ) : region === "Asia" ? (
    <div className="country-page">
      {countries
        .filter((country) => country.region === "Asia")
        .map((country, i) => (
          <Link
            state={{darkmode}}
            key={i}
            style={{ textDecoration: "none" }}
            to={`/${country.name.common}`}
          >
            <CountryCard
              darkmode={darkmode}
              key={i}
              name={country.name.common}
              flag={country.flags.svg}
              region={country.region}
              population={country.population.toLocaleString("en-US")}
              capital={country.capital}
            />
          </Link>
        ))}
    </div>
  ) : region === "Africa" ? (
    <div className="country-page">
      {countries
        .filter((country) => country.region === "Africa")
        .map((country, i) => (
          <Link
            state={{darkmode}}
            key={i}
            style={{ textDecoration: "none" }}
            to={`/${country.name.common}`}
          >
            <CountryCard
              darkmode={darkmode}
              key={i}
              name={country.name.common}
              flag={country.flags.svg}
              region={country.region}
              population={country.population.toLocaleString("en-US")}
              capital={country.capital}
            />
          </Link>
        ))}
    </div>
  ) : region === "Americas" ? (
    <div className="country-page">
      {countries
        .filter((country) => country.region === "Americas")
        .map((country, i) => (
          <Link
            state={{darkmode}}
            key={i}
            style={{ textDecoration: "none" }}
            to={`/${country.name.common}`}
          >
            <CountryCard
              darkmode={darkmode}
              key={i}
              name={country.name.common}
              flag={country.flags.svg}
              region={country.region}
              population={country.population.toLocaleString("en-US")}
              capital={country.capital}
            />
          </Link>
        ))}
    </div>
  ) : (
    <div className="country-page">
      {countries.map((country, i) => (
        <Link
          state={{darkmode}}
          key={i}
          style={{ textDecoration: "none" }}
          to={`/${country.name.common}`}
        >
          <CountryCard
            darkmode={darkmode}
            key={i}
            name={country.name.common}
            flag={country.flags.svg}
            region={country.region}
            population={country.population.toLocaleString("en-US")}
            capital={country.capital}
          />
        </Link>
      ))}
    </div>
  );
};

export default CountryPage;
