
  // Fetching all popular Movie list
export const fetchMovie = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=3';
    const res = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQyNzdkODg5YTgzMTM0ZTM3NjVkN2YwYzkzZDczZSIsInN1YiI6IjY2NjZiMTZjYmQ4MGVjMWYwOGQzYzRhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hefuoQvtJ3z-OD_DXAnN5qsf-WfnocvjL7psV0UlfCo",
      },
    });
    const json = await res.json();
    // console.log(json);
    return json;
  };
  
  // Fetching all popular TvShow Series list
  export const fetchTv = async () => {
    const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=4';
    const res = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQyNzdkODg5YTgzMTM0ZTM3NjVkN2YwYzkzZDczZSIsInN1YiI6IjY2NjZiMTZjYmQ4MGVjMWYwOGQzYzRhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hefuoQvtJ3z-OD_DXAnN5qsf-WfnocvjL7psV0UlfCo",
      },
    });
    const json = await res.json();
    // console.log(json);
    return json;
  };
  