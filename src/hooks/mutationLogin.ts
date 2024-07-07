export const mutationLogin = async () => {
  const url = "https://api.themoviedb.org/3/authentication/guest_session/new";
  const res = await fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQyNzdkODg5YTgzMTM0ZTM3NjVkN2YwYzkzZDczZSIsInN1YiI6IjY2NjZiMTZjYmQ4MGVjMWYwOGQzYzRhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hefuoQvtJ3z-OD_DXAnN5qsf-WfnocvjL7psV0UlfCo",
    },
  });
  const json = await res.json();
  console.log(json);
  return json;
};
