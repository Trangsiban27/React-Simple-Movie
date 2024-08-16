import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import { api_key, fetcher } from "../config";
import MovieCard from "../components/movies/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

//https://api.themoviedb.org/3/search/movie

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=611629fd6933f16e0d656433ab7312f4&page=${nextPage}`
  );

  const filterDebounce = useDebounce(filter, 1000);

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const { data, error, isLoading } = useSWR(url, fetcher);

  useEffect(() => {
    // if (data && data.results) setMovies(data.results);
    if (filter) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=611629fd6933f16e0d656433ab7312f4&page=${nextPage}`
      );
    }

    if (data && data.results) setMovies(data.results);
  }, [data, filterDebounce, nextPage]);

  if (!data) return null;

  const { page, total_results } = data;
  const itemsPerPage = 30;

  const pageCount = Math.ceil(total_results / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % total_results;

    setNextPage(event.selected + 1);
  };

  // const count = [1, 2, 3, 4, 5];

  return (
    <Fragment>
      <div className="flex items-center justify-center mb-5">
        <div className="flex items-center bg-white rounded-lg">
          <input
            type="text"
            className="w-full px-5 py-3 text-black rounded-lg outline-none"
            placeholder="Enter your search?"
            onChange={handleChangeFilter}
          />

          <div className="px-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="w-10 h-10 mx-auto transition-all border-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )}

      {!isLoading && (
        <div className="grid grid-cols-3 gap-10">
          {movies.length > 0 &&
            movies.map((item) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))}
        </div>
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </Fragment>
  );
};

export default MoviePage;
