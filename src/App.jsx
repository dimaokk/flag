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
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<CountryDeteils />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
