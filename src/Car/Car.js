export default function Car({ car }) {
  return (
    <div>
      <p>{car.id}</p>
      <p>Year: {car.year}</p>
      <p>Make: {car.make}</p>
      <p>Model: {car.model}</p>
    </div>
  );
}