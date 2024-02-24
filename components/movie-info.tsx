import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movie with id: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 6000)); // TEST CODE
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
  // throw new Error("Something went wrong!");
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h1>{movie?.title}</h1>;
}
