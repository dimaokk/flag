import { useState, useEffect } from "react";
//componennt
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Controls } from "./Components/Controls/Controls";
import { CountriesList } from "./Components/Counries/CountriesList";
import { CountriesCard } from "./Components/Counries/CountriesCard";
//api
import { countriesAPI } from "./api-config";

//routing
import { Routes, Route } from "react-router-dom";

function App() {
  const [countries, setCountries] = useState([]);

  const [filterCountries, setFilterCountries] = useState(countries);

  const handleSaerch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterCountries(data);
  };

  useEffect(() => {
    countriesAPI.getAllCountries().then(({ data }) => setCountries(data));
  }, []);
  console.log(countries);
  return (
    <>
      <Header />
      <Main>
        <Controls onSearch={handleSaerch} />
        <CountriesList>
          {filterCountries.map((ct) => {
            const countryProps = {
              img: ct.flags.svg,
              name: ct.name,
              info: [
                {
                  title: "Population",
                  description: ct.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: ct.region,
                },
                {
                  title: "Capital",
                  description: ct.capital,
                },
              ],
            };
            return <CountriesCard key={ct.name} {...countryProps} />;
          })}
        </CountriesList>
      </Main>
    </>
  );
}

export default App;
