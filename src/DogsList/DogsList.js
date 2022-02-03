import './DogsList';
import Dog from '../Dog/Dog';

export default function DogsList({ dogs }) {
  return (
    <div>
      {
        dogs.map((dog, i) =>
          <Dog key={dog + i} dog={dog}/>
        )
      }
    </div>
  );
}