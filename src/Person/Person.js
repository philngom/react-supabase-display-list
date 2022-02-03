import './Person.css';

export default function Person({ person }) {
  return (
    <div>
      <p>{person.id}</p>
      <p>{person.first}</p>
      <p>{person.last}</p>
      <p>{person.age}</p>
    </div>
  );
}