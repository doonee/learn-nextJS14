import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constant";

export const metadata = {
  title: "Home page",
};

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
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
