import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <>
      {/**
       * Suspense를 사용하면 Loading... 상태를 보여줄 수 있고,
       * 먼저 결과물을 가져온 컴포넌트가 우선적으로 렌더링되어서
       * 사용자 경험을 향상시킬 수 있습니다.
       */}
      <Suspense fallback={<h6>Loading movie inof...</h6>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h6>Loading videos...</h6>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
