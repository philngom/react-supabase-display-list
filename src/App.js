import './App.css';
import { useState, useEffect } from 'react';
import CarsList from './CarsList/CarsList';
import { fetchAllCars, fetchAllCountries } from './services/fetch-utils';
import CountriesList from './CountriesList/CountriesList';

function App() {

  const [cars, setCars] = useState([]);
  const [countries, setCountries] = useState([]);

  async function getCars() {
    const data = await fetchAllCars();

    setCars(data);
  }

  async function getCountries() {
    const data = await fetchAllCountries();

    setCountries(data);
  }

  useEffect(() => {
    getCars();
    getCountries();
  }, []);

  return (
    <div className="App">
      <CarsList cars={cars}/>
      <CountriesList countries={countries}/>
    </div>
  );
}

export default App;
