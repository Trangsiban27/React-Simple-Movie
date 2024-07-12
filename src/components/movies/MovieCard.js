import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="h-full rounded-lg p-3 bg-slate-800 flex flex-col select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg"
      />

      <div className="flex flex-col flex-1">
        <p className="text-white text-lg font-bold mb-3">{item.title}</p>

        <div className="text-white flex items-center text-sm text-opacity-50 justify-between font-light mb-10">
          <span>{item.release_date}</span>

          <div className="flex">
            <span>{item.vote_average}</span>
          </div>
        </div>

        <button
          onClick={() => navigate(`/movie/${item.id}`)}
          className="w-full py-3 px-6 rounded-lg bg-primary text-white text-md mt-auto"
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
