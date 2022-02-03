import { checkError, client } from './client';

export async function fetchAllCars() {
  const data = await client
    .from('cars')
    .select();

  return checkError(data);
}