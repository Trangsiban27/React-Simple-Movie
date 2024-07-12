import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { api_key, fetcher } from "../../config";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  const { data, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,
    fetcher
  );

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);

  console.log(movies[0]);

  return (
    <div className="mb-20 page-container">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movies[0]}` || ""}
          alt=""
          className="w-full h-[500px] object-cover "
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-lin"></div>
      </div>
    </div>
  );
};

export default Banner;
