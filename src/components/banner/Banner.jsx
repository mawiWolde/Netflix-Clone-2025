import React, { useState, useEffect } from "react";
import axios from "@/utils/axios";
import requests from "@/utils/requests";
import style from "./banner.module.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div
      className={style.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 20%"
      }}
    >
      <div className={style.banner_contents}>
        <div className={style.banner_buttons}>
          <button className={style.bannerbutton}>Play</button>
          <button className={style.bannerbutton}>My List</button>
        </div>

        <h2 className={style.banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h2>

        <div className={style.banner_description}>{movie?.overview}</div>
      </div>
    </div>
  );
};

export default Banner;
