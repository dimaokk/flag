import { useState, useEffect } from "react";
//api
import { countriesAPI } from "../api";
//component
import { Controls } from "../Components/Controls/Controls";
import { CountriesList } from "../Components/Counries/CountriesList";
import { CountriesCard } from "../Components/Counries/CountriesCard";
//route
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    countriesAPI.getAllCountries().then(({ data }) => setCountries(data));
  }, []);

  const navigate = useNavigate();
  const goCounries = (name) => navigate(`/country/${name}`);

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

  return (
    <>
      <Controls onSearch={handleSaerch} />
      <CountriesList>
        {filterCountries.map((ct) => {
          const countryProps = {
            img: ct.flags.svg,
            name: ct.name,
            info: [
              {
                title: "Population: ",
                description: ct.population.toLocaleString(),
              },
              {
                title: "Region: ",
                description: ct.region,
              },
              {
                title: "Capital: ",
                description: ct.capital,
              },
            ],
          };
          return (
            <CountriesCard
              key={ct.name}
              onClick={() => goCounries(ct.name)}
              {...countryProps}
            />
          );
        })}
      </CountriesList>
    </>
  );
};
