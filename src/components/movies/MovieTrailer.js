import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { api_key, fetcher } from "../../config";

const MovieTrailer = () => {
  const { movieId } = useParams();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}`,
    fetcher
  );

  if (!data) return null;

  const { results } = data;

  return (
    <div className="flex flex-col gap-10">
      {results.slice(0, 2).map((item) => (
        <div>
          <h3
            key={item.id}
            className="mb-5 font-medium text-xl border border-purple-400 px-4 py-2 inline-block"
          >
            {item.type}
          </h3>

          <div key={item.id} className="w-full aspect-video">
            <iframe
              width="1280"
              height="720"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="HLV KIATISUK VUI MỪNG GẶP LẠI HỌC TRÒ HAGL, QUANG HẢI ĐEO BĂNG ĐỘI TRƯỞNG CHO TRẦN MINH VƯƠNG"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieTrailer;
