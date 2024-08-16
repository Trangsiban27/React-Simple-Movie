import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { api_key, fetcher } from "../../config";
import Genres from "./Genres";
import Button from "../Button";
import PlayIcon from "../icon/PlayIcon";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,
    fetcher
  );

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <div className="mt-10 mb-20 page-container">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={
            `https://image.tmdb.org/t/p/w500${movies[0]?.backdrop_path}` || ""
          }
          alt=""
          className="w-full h-[500px] object-cover "
        />
        <div className="absolute z-10 left-10 top-2/4 translate-y--2/4">
          <h1 className="text-[45px] font-bold text-white mb-5">
            {movies[0]?.title}
          </h1>

          <Genres movieId={movies[0]?.id}></Genres>

          <Button className="inline-flex items-center mt-3 cursor-pointer gap-x-2">
            Watch
            <PlayIcon></PlayIcon>
          </Button>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black "></div>
      </div>
    </div>
  );
};

export default Banner;
