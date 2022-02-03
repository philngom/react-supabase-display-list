import './App.css';
import { useState, useEffect } from 'react';
import CarsList from './CarsList/CarsList';
import { fetchAllCars, fetchAllCountries, fetchAllDogs, fetchPeople } from './services/fetch-utils';
import CountriesList from './CountriesList/CountriesList';
import DogsList from './DogsList/DogsList';
import PeopleList from './PeopleList/PeopleList';
import loading from './loading.gif';

function App() {

  const [cars, setCars] = useState([]);
  const [countries, setCountries] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getCars() {
    setIsLoading(true);
    const data = await fetchAllCars();

    setIsLoading(false);
    setCars(data);
  }

  async function getCountries() {
    setIsLoading(true);
    const data = await fetchAllCountries();

    setIsLoading(false);
    setCountries(data);
  }

  async function getDogs() {
    setIsLoading(true);
    const data = await fetchAllDogs();

    setIsLoading(false);
    setDogs(data);
  }

  async function getPeople() {
    setIsLoading(true);
    const data = await fetchPeople();

    setIsLoading(false);
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
      <h3>Cars</h3>
      {
        isLoading ? <img src={loading}/>
          : <CarsList cars={cars}/>
      }
      <h3>Countries</h3>
      {
        isLoading ? <img src={loading}/>
          : <CountriesList countries={countries}/>
      }
      <h3>Dogs</h3>
      {
        isLoading ? <img src={loading}/>
          : <DogsList dogs={dogs}/>
      }
      <h3>People</h3>
      {
        isLoading ? <img src={loading}/>
          : <PeopleList people={people}/>
      }
    </div>
  );
}

export default App;
