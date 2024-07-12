import React, { Fragment } from "react";
import MovieList from "../components/movies/MovieList";
import Banner from "../components/banner/Banner";

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>

      <section className=" page-container mb-20">
        <h2 className="text-white font-bold text-3xl mb-5">Now playing</h2>

        <MovieList></MovieList>
      </section>

      <section className=" page-container mb-12">
        <h2 className="text-white font-bold text-3xl mb-5">Trending</h2>

        <MovieList type="popular"></MovieList>
      </section>

      <section className=" page-container mb-12">
        <h2 className="text-white font-bold text-3xl mb-5">Top rated movies</h2>

        <MovieList type="top_rated"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
