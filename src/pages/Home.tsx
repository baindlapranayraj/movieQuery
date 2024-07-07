import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchMovie, fetchTv } from "../hooks/queryData";
import RenderList from "../components/RenderList";
import { verification } from "../appwrite/authentication/authen";
import { Models } from "appwrite";
// import { date } from "zod";

export enum DisplayType {
  Movie="movie",
  Tv="tv"
}

const Home = () => {
  
  const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.Movie);


  useEffect(()=>{
    async ()=> {
      try {
        const res = await verification();
        if(res){
          console.log(res);
        }
      } catch (error) {
        console.error(error)
      }
    }
  },[])


  const {data:movieData,isLoading:movieLoad,isError:movieError} = useQuery({
    queryKey:["movies"],
    queryFn:fetchMovie,
  })

  const {data:tvData,isLoading:tvLoad,isError:tvError} = useQuery({
    queryKey:["tvshows"],
    queryFn:fetchTv,
  })
  

  tvError || movieError ? (
    <h1>Error occured while fetching the data</h1>
  ):null

  return (
    <div className="p-7 space-y-3 bg-gray-900">
      <div className="btnGrp space-x-4">
        <button
          className={`border-2 border-solid border-black rounded-lg p-2 px-4 transition duration-200 ${
            displayType === DisplayType.Movie
              ? "bg-black text-white transform scale-105"
              : "bg-white text-black hover:bg-gray-200"
          }`}
          onClick={() => {
            setDisplayType(DisplayType.Movie);
           
          }}
        >
          Movies
        </button>
        <button
          onClick={() => {
            setDisplayType(DisplayType.Tv);
            
          }}
          className={`border-2 border-solid border-black rounded-lg p-2 px-4 transition duration-200 ${
            displayType === DisplayType.Tv
              ? "bg-black text-white transform scale-105"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          TV Shows
        </button>
      </div>
      <div className="movieLayout">
        {
          movieLoad || tvLoad ? (
            <h1>Loading...</h1>
          ):(
            displayType === DisplayType.Movie ? 
            (
            <RenderList 
            displayType={DisplayType.Movie} 
            data={movieData.results}/>
          )
            :
            (
            <RenderList 
            displayType={DisplayType.Tv}
              data={tvData.results}/>
            )
          )
        }
      </div>
    </div>
  );
};

export default Home;
