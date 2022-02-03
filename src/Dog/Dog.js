import './Dog';

export default function Dog({ dog }) {
  return (
    <div>
      <p>{dog.id}</p>
      <p>{dog.breed}</p>
      <p>{dog.size}</p>
      <p>{dog.origin}</p>
    </div>
  );
}