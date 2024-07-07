import { Link } from 'react-router-dom'
import { DisplayType } from '../pages/Home'

type DisplayData = {
  id: string,
  overview: string,
  poster_path: string,
  release_date: string,
  title?: string,
  name?: string,
  vote_average: number,
  backdrop_path: string
}

type PropType = {
  data: DisplayData[],
  displayType: DisplayType
}

const RenderList = ({ data, displayType }: PropType) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((movie) => (
        <Link key={movie.id} to={displayType===DisplayType.Movie ? `/movie/${movie.id}` : `/tv/${movie.id}`}>
        <div
          
          className="movieItem group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div className="image relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={displayType === DisplayType.Movie ? movie.title : movie.name}
              className="w-full h-96 object-cover transition duration-300 group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-75"></div>
          </div>
          <div className="movieDes p-4">
            <h1 className="text-lg font-semibold transition duration-300 group-hover:text-yellow-500">
              {displayType === DisplayType.Movie ? movie.title : movie.name}
            </h1>
            <p className="text-gray-600 mt-2">
              {movie.overview.length > 100 ? movie.overview.substring(0, 100) + '...' : movie.overview}
            </p>
          </div>
          <div className="realseDate p-4 flex justify-between items-center text-gray-500 text-sm">
            <p>{movie.release_date}</p>
            <p className="flex items-center text-yellow-400 font-bold">
              <span className="material-icons text-yellow-500 mr-1">⭐</span>
              {movie.vote_average}
            </p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default RenderList;
