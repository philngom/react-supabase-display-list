import './CountriesList';
import Country from '../Country/Country';

export default function CountriesList({ countries }) {
  return (
    <div>
      {
        countries.map((country, i) =>
          <Country key={country + i} country={country}/>
        )
      }
    </div>
  );
}