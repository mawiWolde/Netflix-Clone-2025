import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import style from "./row.module.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results || []);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          if (!url) return;
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 }
  };

  return (
    <div className={style.row}>
      <h2>{title}</h2>

      <div className={style.row_posters}>
        {movies.map((movie) => {
          const imgSrc = isLargeRow ? movie.poster_path : movie.backdrop_path;
          if (!imgSrc) return null;

          return (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              src={`${base_url}${imgSrc}`}
              alt={movie?.name || movie?.title}
              className={`${style.row_poster} ${
                isLargeRow ? style.row_posterLarge : ""
              }`}
            />
          );
        })}
      </div>

      {trailerUrl && (
        <div style={{ padding: "40px" }}>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row;
