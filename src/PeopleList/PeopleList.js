import './PeopleList';
import Person from '../Person/Person';

export default function PeopleList({ people }) {
  return (
    <div>
      {
        people.map((person, i) =>
          <Person key={person + i} person={person}/>
        )
      }
    </div>

  );
}