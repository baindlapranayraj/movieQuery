
export const fetchMovieDetail = async (movieId:string)=>{    
   const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
   const res =  await fetch(url,{
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQyNzdkODg5YTgzMTM0ZTM3NjVkN2YwYzkzZDczZSIsIm5iZiI6MTcyMDA3MjE2Mi4xNjUwNzksInN1YiI6IjY2NjZiMTZjYmQ4MGVjMWYwOGQzYzRhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZMIo3ND6gBY7ze_hRgLdX3tua6-wjS_CVFAunRXW9I'
    }
   })

   const json = await res.json();
//    console.log(json);
   return json;
}


export const fetchTvShowDetail = async (tvshowId:string)=>{
    const url = `https://api.themoviedb.org/3/tv/${tvshowId}?language=en-US`;
    const res =await fetch(url,{
        headers:{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQyNzdkODg5YTgzMTM0ZTM3NjVkN2YwYzkzZDczZSIsIm5iZiI6MTcyMDA3MjE2Mi4xNjUwNzksInN1YiI6IjY2NjZiMTZjYmQ4MGVjMWYwOGQzYzRhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZMIo3ND6gBY7ze_hRgLdX3tua6-wjS_CVFAunRXW9I'
        }
    })
    const json = await res.json();
    if(json){
        return json
    }
}