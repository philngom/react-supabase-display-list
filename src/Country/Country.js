import './Country';

export default function Country({ country }) {
  return (
    <div>
      <p>Country: {country.country}</p>
      <p>Capital City: {country.capital}</p>
      <p>Population: {country.population} {country.unit}</p>
    </div>
  );
}