import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "../components/InitialPage/index";
import OptionsMenu from "../components/OptionsMenu/index"
import FilterContinent from "../components/ContinentPage/FilterContinent";
import FilterCountry from "../components/CountryPage/FilterCountry";
import FilterLanguage from "../components/LanguagePage/FilterLanguage";
import FilterSubContinent from "../components/SubContinentPage/FilterSubContinent";
import Header from "../components/Header/index"

function App() {
  return (
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<InitialPage/>}></Route>
                <Route path="/menu" element={<OptionsMenu/>}></Route>
                <Route path="/continent" element={<FilterContinent/>}></Route>
                <Route path="/country" element={<FilterCountry/>}></Route>
                <Route path="/language" element={<FilterLanguage/>}></Route>
                <Route path="/subcontinent" element={<FilterSubContinent/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
