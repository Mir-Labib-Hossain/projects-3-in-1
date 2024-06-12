import { EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

type Props = { movie: IMovie };

const MovieCard = ({ movie }: Props) => {
  const { Poster, Title, Type, Year, imdbID } = movie;

  return (
    <div className="p-4 duration-500 flex flex-col my-6 text-gray-700 shadow-md hover:shadow-2xl gap-5 rounded-xl hover:rounded-1xl w-[210px]">
      <div className="h-[280px] duration-500 overflow-hidden hover:rounded-2xl">
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
            {Type} - {Year}
          </p>
        </div>
        <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank">
          <Button size="large" type="primary" icon={<EyeOutlined />} block>
            View Details
          </Button>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
