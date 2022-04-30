import axios from "axios";

const instance = axios.create({
  baseURL: "https://restcountries.com/v2/",
});

export const countriesAPI = {
  // response all Countries
  getAllCountries() {
    return instance.get("all?fields=name,capital,flags,population,region");
  },
  // response search Countries
  getCountries(name) {
    return instance.get(`name/${name}`);
  },
  
  //filter by code
  filterByCode(codes) {
    return instance.get(`/alpha?codes=` + codes.join(","));
  },
};
