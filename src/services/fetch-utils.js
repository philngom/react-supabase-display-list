import { checkError, client } from './client';

export async function fetchAllCars() {
  const data = await client
    .from('cars')
    .select();

  return checkError(data);
}

export async function fetchAllCountries() {
  const data = await client
    .from('countries')
    .select();

  return checkError(data);
}

export async function fetchAllDogs() {
  const data = await client
    .from('dogs')
    .select();

  return checkError(data);
}

export async function fetchPeople() {
  const data = await client
    .from('people')
    .select();

  return checkError(data);
}