// import React from 'react'

import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router-dom"
import { fetchTvShowDetail } from "../hooks/queryDetData"
import { Genre,ProdCompanyType } from "./Movie"



const TvShow = () => {
  const {id} = useParams()


  const {data,isLoading,isError} = useQuery({
    queryKey:["tvshow"],
    queryFn:async ()=>{
    if(id) {
      const res = await fetchTvShowDetail(id);
      return (
        res?res:undefined
      )
    }
    }
  })


  if(isLoading){
    return <p>Loading....</p>
  }

  if(isError){
    return <p>Error Occured While Fetching the Data</p>
  }

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="relative container mx-auto py-10 px-4 text-white">
        <Link className="bg-white text-black p-4 w-28 rounded-md" to={"/"}>Back</Link>
          <div className="max-w-5xl mx-auto bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <img className="rounded-lg shadow-lg" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
              </div>
              <div className="w-full md:w-2/3">
                <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                <div className="flex flex-wrap mb-4">
                  {data.genres.map((genre: Genre) => (
                    <span key={genre.id} className="mr-2 mb-2 px-3 py-1 bg-gray-700 rounded-full text-sm font-medium">{genre.name}</span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="mb-6">{data.overview}</p>
                <h2 className="text-xl font-semibold mb-2">Production Companies</h2>
                <div className="flex flex-wrap">
                  {data.production_companies.map((comp: ProdCompanyType) => (
                    <div key={comp.id} className="mr-4 mb-4">
                      {comp.logo_path && <img className="h-12 object-contain bg-white p-1 rounded-lg" src={`https://image.tmdb.org/t/p/w500${comp.logo_path}`} alt={comp.name} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TvShow