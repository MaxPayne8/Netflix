import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MovieList from "./MovieList";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="">
      <img
        className="w-16 h-16 p-2  ml-[1300px] z-10 absolute top-1 right-3  hover:cursor-pointer"
        src={user?.photoURL}
        alt="user-logo"
      />
      <h1 className=" p-2 top-7 right-[325px] z-10 absolute font-semibold text-white ">
        <span className="text-red-800 font-bold text-xl ">
          {user?.displayName}
        </span>
        , try our all new Movies suggestion AI!!
      </h1>
      <button
        className="absolute ml-[1270px]  top-[65px] z-10 text-white font-semibold px-1 bg-red-700 rounded-lg hover:bg-red-500"
        onClick={handleSignout}
      >
        Sign Out
      </button>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
