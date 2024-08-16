import React from "react";
import useSWR from "swr";
import { api_key, fetcher } from "../../config";
import Genres from "../banner/Genres";

const MoviesCard2 = ({ movieId }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`,
    fetcher
  );

  console.log(data);

  return (
    <div className="flex w-full bg-[#242424] p-3 rounded-lg gap-x-2 items-center">
      <img
        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
        alt=""
        className="w-[100px] h-[100px] rounded-md"
      />
      <div className="flex-1">
        <h1 className="font-bold">{data?.original_title}</h1>
        <div className="flex items-center justify-between w-full text-[12px] font-semibold text-text1 my-2">
          <span>{data?.release_date}</span>
          <span>{data?.vote_average}</span>
        </div>

        <div className="flex items-center gap-x-2"></div>
      </div>
    </div>
  );
};

export default MoviesCard2;
