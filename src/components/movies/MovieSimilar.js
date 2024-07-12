import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { api_key, fetcher } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";

const MovieSimilar = () => {
  const { movieId } = useParams();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}`,
    fetcher
  );

  if (!data) return null;

  const { results } = data;

  return (
    <div className="movie-list w-full">
      <Swiper grabCursor={"true"} slidesPerView={"auto"} spaceBetween={20}>
        {results.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item}></MovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSimilar;
