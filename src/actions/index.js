export const ADD_MOVIES = "ADD_MOVIES";

//Action CReatorts - return the action
export default function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
