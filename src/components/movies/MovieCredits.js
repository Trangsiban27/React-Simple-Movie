import React from "react";
import useSWR from "swr";
import { api_key, fetcher } from "../../config";
import { useParams } from "react-router-dom";

const MovieCredits = () => {
  const { movieId } = useParams();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`,
    fetcher
  );

  if (!data) return null;

  const { cast } = data;

  return (
    <div className="grid grid-cols-4 gap-10">
      {cast.slice(0, 4).map((item) => (
        <div key={item.id} className="w-full max-w-300px">
          <img
            src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
            alt=""
            className="w-full h-[300px] object-cover rounded-lg"
          />

          <p className="text-white text-center font-bold text-lg py-2">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MovieCredits;
