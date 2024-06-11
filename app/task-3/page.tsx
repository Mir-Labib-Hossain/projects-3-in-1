"use client";

import { Input, Select } from "antd";

const { Search } = Input;

import { useState } from "react";
import BackButton from "../../components/BackButton";
import MovieCard, { IMovie } from "../../components/MovieCard";

const Task3Page = () => {
  const [type, setType] = useState(types[0].value);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const onSearch = async (value: string) => {
    setLoading(true);
    const response = await fetch(`https://www.omdbapi.com/?apikey=d429f4b6&type=${type}&s=${value}`, {
      method: "GET",
    });
    const formattedData = await response.json();
    setLoading(false);
    if (formattedData && formattedData.Response !== "False") setMovies(formattedData.Search);
  };

  return (
    <>
      <BackButton to="/" />
      <Search addonBefore={<Select value={type} options={types} onChange={(v) => setType(v)} />} placeholder="input search loading with enterButton" loading={loading} enterButton onSearch={onSearch} size="large" />
      <div className="flex gap-5 flex-wrap">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </>
  );
};

export default Task3Page;

const types = [
  {
    value: "movie",
    label: "Movies",
  },
  {
    value: "series",
    label: "Series",
  },
  {
    value: "episode",
    label: "Episode",
  },
];
