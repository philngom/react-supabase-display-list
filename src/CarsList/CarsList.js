import './CarsList';
import Car from '../Car/Car';

export default function CarsList({ cars }) {
  return (
    <div>
      {
        cars.map((car, i) =>
          <Car key={car + i} car={car}/>
        )
      }
    </div>
  );
}