import React, { useEffect, useState } from "react";
import MoviesCard2 from "./MoviesCard2";
import Button from "../Button";
import useSWR from "swr";
import { api_key, fetcher } from "../../config";

const WatchList = () => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`,
    fetcher
  );

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [movies]);
  console.log("movies", movies);

  return (
    <div className="mt-12">
      <h1 className="mb-5 text-xl font-bold">Upcoming Movies</h1>
      <div className="flex flex-col mb-4 gap-y-4">
        {movies.slice(0, 1).map((item) => (
          <MoviesCard2 movieId={item.id}></MoviesCard2>
        ))}
      </div>
      <Button className="block w-full text-lg text-center cursor-pointer">
        See more
      </Button>
    </div>
  );
};

export default WatchList;
