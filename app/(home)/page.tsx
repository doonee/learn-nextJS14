import Link from "next/link";

export const metadata = {
  title: "Home page",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

/** 서버 컴포넌트는 가져온 data를 caching 해주기 때문에
 * 새로고침을 하더라도 서버에 요청을 보내지 않는다.
 */
async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 3000)); // TEST CODE
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <>
      <div>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </>
  );
}
