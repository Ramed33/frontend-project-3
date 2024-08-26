import { configureStore } from "@reduxjs/toolkit";
import getContinentReducer from "../state/getContinent.slice";
import getCountryReducer from "../state/getCountry.slice";
import getLanguageReducer from "../state/getLanguage.slice";
import getSubContinentReducer from "../state/getSubContinent.slice";

export const rootReducer = {
    continent: getContinentReducer,
        country: getCountryReducer,
        language: getLanguageReducer,
        subcontinent: getSubContinentReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});