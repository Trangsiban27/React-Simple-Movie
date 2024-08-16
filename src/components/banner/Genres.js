import useSWR from "swr";
import { api_key, fetcher } from "../../config";

const Genres = ({ movieId, className }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`,
    fetcher
  );

  return (
    <div className="flex mb-5 item-center gap-x-5">
      {data?.genres?.map((item) => (
        <div
          key={item.id}
          className={`inline-block px-3 py-2 border-2 rounded-md border-text1 ${className}`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Genres;
