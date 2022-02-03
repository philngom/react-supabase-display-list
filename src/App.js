import './App.css';
import { useState, useEffect } from 'react';
import CarsList from './CarsList/CarsList';
import { fetchAllCars, fetchAllCountries, fetchAllDogs } from './services/fetch-utils';
import CountriesList from './CountriesList/CountriesList';
import DogsList from './DogsList/DogsList';

function App() {

  const [cars, setCars] = useState([]);
  const [countries, setCountries] = useState([]);
  const [dogs, setDogs] = useState([]);

  async function getCars() {
    const data = await fetchAllCars();

    setCars(data);
  }

  async function getCountries() {
    const data = await fetchAllCountries();

    setCountries(data);
  }

  async function getDogs() {
    const data = await fetchAllDogs();

    setDogs(data);
  }

  useEffect(() => {
    getCars();
    getCountries();
    getDogs();
  }, []);

  return (
    <div className="App">
      <CarsList cars={cars}/>
      <CountriesList countries={countries}/>
      <DogsList dogs={dogs}/>
    </div>
  );
}

export default App;
