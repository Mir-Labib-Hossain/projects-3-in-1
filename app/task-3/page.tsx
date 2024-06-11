"use client";
import { EyeOutlined } from "@ant-design/icons";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";

const { Search } = Input;

import Link from "next/link";
import { useState } from "react";

interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const Task3Page = () => {
  const [type, setType] = useState(types[0].value);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const onSearch = async (value: string) => {
    console.log(value);

    setLoading(true);

    const response = await fetch(`https://www.omdbapi.com/?apikey=d429f4b6&type=${type}&s=${value}`, {
      method: "GET", // Change to POST for a post request
    });

    const formattedData = await response.json();

    setLoading(false);
    if (formattedData && formattedData.Response !== "False") setMovies(formattedData.Search);
  };

  return (
    <>
      <Link href="/" className="mb-4">
        <Button size="large" type="primary" icon={<ArrowLeftOutlined />} className="w-fit">
          Back
        </Button>
      </Link>
      <Search addonBefore={<Select value={type} options={types} onChange={(v) => setType(v)} />} placeholder="input search loading with enterButton" loading={loading} enterButton onSearch={onSearch} size="large" />

      <div className="flex gap-5 flex-wrap">
        {movies.map(({ Poster, Title, Type, Year, imdbID }) => (
          <div key={imdbID} className="p-4 duration-500 flex flex-col my-6 text-gray-700 shadow-md gap-5 rounded-xl hover:rounded-1xl w-[210px]">
            <div className="h-[280px] duration-500 overflow-hidden hover:rounded-xl">
              <div
                className="h-[280px] duration-1000 ease-in-out hover:scale-125 w-full bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${Poster})`,
                }}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between ">
              <div className="w-full mb-4">
                <h5 className=" text-lg font-semibold line-clamp-2 text-blue-gray-900">{Title} </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {type} - {Year}
                </p>
              </div>
              <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank">
                <Button size="large" type="primary" icon={<EyeOutlined />} block>
                  View Details
                </Button>
              </a>
            </div>
          </div>
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
