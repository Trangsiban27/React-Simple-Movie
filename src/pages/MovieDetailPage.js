import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { api_key, fetcher } from "../config";
import MovieCredits from "../components/movies/MovieCredits";
import MovieTrailer from "../components/movies/MovieTrailer";
import MovieSimilar from "../components/movies/MovieSimilar";

//https://api.themoviedb.org/3/movie/movie_id?api_key=611629fd6933f16e0d656433ab7312f4

const MovieDetailPage = () => {
  const { movieId } = useParams();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`,
    fetcher
  );

  if (!data) return null;

  console.log(data);

  return (
    <div className="py-10">
      <div className="w-full h-screen relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat  "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
        ></div>
      </div>

      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <h1 className="text-center text-4xl font-bold text-white mb-10">
        {data.title}
      </h1>

      <div className="flex items-center justify-center gap-x-5 mb-10">
        {data.genres.length > 0 &&
          data.genres.map((item) => (
            <span
              key={item.id}
              className="py-2 px-4 border border-primary text-primary"
            >
              {item.name}
            </span>
          ))}
      </div>

      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {data.overview}
      </p>

      <h1 className="text-center text-3xl font-bold text-white mb-10">
        Credits
      </h1>

      <MovieCredits></MovieCredits>

      <h1 className="text-center text-3xl font-bold text-white my-10">
        Videos
      </h1>

      <MovieTrailer></MovieTrailer>

      <h1 className="text-center text-3xl font-bold text-white my-10">
        Similar movies
      </h1>

      <MovieSimilar></MovieSimilar>
    </div>
  );
};

export default MovieDetailPage;
