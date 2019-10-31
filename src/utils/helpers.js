export const cleanCountryData = countries => {
  return countries.map(country => ({
    name: country.name,
    region: country.region,
    flag: country.flag
  }))
}