import './App.css';
import { useState, useEffect } from 'react';
import CarsList from './CarsList/CarsList';
import { fetchAllCars, fetchAllCountries, fetchAllDogs, fetchPeople } from './services/fetch-utils';
import CountriesList from './CountriesList/CountriesList';
import DogsList from './DogsList/DogsList';

function App() {

  const [cars, setCars] = useState([]);
  const [countries, setCountries] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [people, setPeople] = useState([]);

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

  async function getPeople() {
    const data = await fetchPeople();

    setPeople(data);
  }

  useEffect(() => {
    getCars();
    getCountries();
    getDogs();
    getPeople();
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
