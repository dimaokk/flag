import { useState } from "react";
//componennt
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
//routing
import { Routes, Route } from "react-router-dom";
//pages
import { HomePage } from "./Pages/HomePage";
import { CountryDeteils } from "./Pages/CountryDeteils";
import { NotFound } from "./Pages/NotFound";

function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="/country/:name" element={<CountryDeteils />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
