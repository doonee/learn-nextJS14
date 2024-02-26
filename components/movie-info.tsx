import { API_URL } from "../app/constant";
import potato from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  // console.log(`Fetching movie with id: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 6000)); // TEST CODE
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
  // throw new Error("Something went wrong!");
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={potato.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={potato.poster}
      />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3 className={potato.info}>⭐️ {movie.vote_average.toFixed(2)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank" rel="noreferrer">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
