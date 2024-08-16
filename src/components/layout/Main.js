import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import HomeIcon from "../icon/HomeIcon";
import ComunityIcon from "../icon/ComunityIcon";
import DiscoverIcon from "../icon/DiscoverIcon";
import AwardsIcon from "../icon/AwardsIcon";
import CelebsIcon from "../icon/CelebsIcon";
import SettingIcon from "../icon/SettingIcon";
import LogoutIcon from "../icon/LogoutIcon";
import useSWR from "swr";
import { api_key, fetcher } from "../../config";
import MoviesCard2 from "../movies/MoviesCard2";
import Button from "../Button";
import WatchList from "../movies/WatchList";

const menus = [
  {
    title: "Home",
    icon: <HomeIcon></HomeIcon>,
    to: "/",
  },
  {
    title: "Community",
    icon: <ComunityIcon></ComunityIcon>,
    to: "/community",
  },
  {
    title: "Discover",
    icon: <DiscoverIcon></DiscoverIcon>,
    to: "/discover",
  },
  {
    title: "Awards",
    icon: <AwardsIcon></AwardsIcon>,
    to: "/adwards",
  },
  {
    title: "Celebs",
    icon: <CelebsIcon></CelebsIcon>,
    to: "/celebs",
  },
];

const Main = () => {
  const [populars, setPopular] = useState([]);

  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`,
    fetcher
  );

  useEffect(() => {
    if (data && data.results) {
      setPopular(data.results);
    }
  }, [data]);

  console.log(populars[0]);

  return (
    <div>
      <div className="relative flex justify-center w-full">
        <div className="flex flex-col justify-between fixed top-0 left-0 w-[11%] h-screen bg-[#181818] py-10 px-4">
          <div>
            <h1 className="mb-12 text-2xl font-bold">
              Watch <span className="text-lg font-bold text-text2">.</span>
            </h1>
            <div>
              <p className="font-semibold text-text1">Menu</p>
              <ul className="flex-col items-start px-2 text-sm font-bold gap-y-7">
                {menus.map((item) => (
                  <NavLink
                    to={item.to}
                    key={item.title}
                    className="flex items-center cursor-pointer gap-x-2"
                  >
                    {item.icon}
                    <p>{item.title}</p>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div>
              <p className="font-semibold text-text1">General</p>
              <ul className="flex-col items-start px-2 text-sm font-bold gap-y-7">
                <li className="flex items-center cursor-pointer gap-x-2">
                  <SettingIcon></SettingIcon>
                  <p>Setting</p>
                </li>
                <li className="flex items-center cursor-pointer gap-x-2">
                  <LogoutIcon></LogoutIcon>
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ml-[11%] mr-[25%] px-10 max-w-[65%] w-full">
          <nav className="flex items-center py-5 text-lg cursor-pointer navbar gap-x-10">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/anime">Anime</NavLink>
          </nav>
          <Outlet></Outlet>
        </div>
        <div className="w-[25%] h-screen bg-[#181818] p-6 fixed top-0 right-0">
          <div>
            <h1 className="mb-5 text-xl font-bold">Popular Movies</h1>
            <div className="flex flex-col mb-4 gap-y-4">
              {populars.slice(0, 2).map((item) => (
                <MoviesCard2 movieId={item.id}></MoviesCard2>
              ))}
            </div>
            <Button className="block w-full text-lg text-center cursor-pointer">
              See more
            </Button>
          </div>
          <WatchList></WatchList>
        </div>
      </div>
    </div>
  );
};

export default Main;
