import './App.css';
import { useState, useEffect } from 'react';
import CarsList from './CarsList/CarsList';
import { fetchAllCars } from './services/fetch-utils';

function App() {

  const [cars, setCars] = useState([]);

  async function getCars() {
    const data = await fetchAllCars();

    setCars(data);
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div className="App">
      <CarsList cars={cars}/>
    </div>
  );
}

export default App;
