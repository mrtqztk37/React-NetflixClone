import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";
import { baseImgUrl } from "../utils/constants";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { isLoading, movies, error } = useSelector((store) => store.movie);
  const i = Math.floor(Math.random() * 20);

  const movie = movies[i];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
      {isLoading || !movie ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-2xl font-bold">{movie.title}</h1>
            <p className="text-start">{movie.overview}</p>
            <p>
              <span>IMDB:</span>
              <span className="text-yellow-400 ms-2 font-semibold">
                {movie.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="flex gap-5">
              <Link to={`/movie/${movie.id}`}>
                <button className="bg-red-500 text-white p-1 rounded hover:bg-red-700">
                  Filmi İzle
                </button>
              </Link>
              <button className="bg-blue-500 text-white p-1 rounded hover:bg-blue-700">
                Listeye Ekle{" "}
              </button>
            </div>
          </div>

          <div className="banner flex justify-center mt-5">
            <img
              className="my-4 object-contain rounded max-h[3oopx]"
              src={baseImgUrl + movie.backdrop_path}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(Hero);
