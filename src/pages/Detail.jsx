import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "../components/Loader";
import { baseImgUrl } from "../utils/constants";
import DetailDisplay from "../components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ActorCard from "../components/ActorCard";

const Detail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const params = {
      append_to_response: "credits",
    };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .then((err) => console.log(err));
  }, []);
  console.log(movie?.credits);
  return (
    <div>
      {!movie ? (
        <Loader />
      ) : (
        <div className="">
          {/* üst */}
          <section className="relative h-[60vh]">
            <img
              className="object-cover h-full w-full"
              src={baseImgUrl + movie.backdrop_path}
            />
            <div className="absolute bg-black inset-0 grid place-items-center bg-opacity-50">
              <h2 className="text-2xl font-semibold">{movie.title}</h2>
            </div>
          </section>
          {/* orta */}
          <section className="my-10 grid grid-cols-1 md:grid-cols-2">
            <div>
              <DetailDisplay title={"Kategoriler"} data={movie.genres} />
              <DetailDisplay
                title={"Konuşulan Diller"}
                data={movie.spoken_languages}
              />
              <DetailDisplay
                title={"Yabancı Şirketler"}
                data={movie.production_companies}
              />
              <DetailDisplay
                title={"Yapımcı Ülkeler"}
                data={movie.production_countries}
              />
            </div>
            <div className="">
              <p>{movie.overview}</p>
              <p>
                Bütçe
                <em>
                  <span className="text-green-500 ms-2">
                    {" "}
                    $ {millify(movie.budget)}
                  </span>
                </em>
              </p>
              <p>
                Hasılat:
                <em>
                  <span className="text-green-500 ms-2">
                    {" "}
                    $ {millify(movie.revenue)}
                  </span>
                </em>
              </p>
            </div>
          </section>
          {/* alt */}
          <section>
            <Splide
              options={{
                pagination: false,
                autoWidth: true,
                gap: "5px",
              }}
            >
              {movie.credits.cast.map((actor, i) => (
                <SplideSlide key={i}>
                  <ActorCard actor={actor} />
                </SplideSlide>
              ))}
            </Splide>
          </section>
        </div>
      )}
    </div>
  );
};

export default Detail;
