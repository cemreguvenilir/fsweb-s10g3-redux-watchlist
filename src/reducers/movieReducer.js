import {
  NEXT_MOVIE,
  PRE_MOVIE,
  REMOVE_MOVIE,
  BEGIN,
} from "../actions/movieAction";
import { movies } from "../movies";

const initialState = {
  movies: movies,
  sira: 0,
};
export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_MOVIE:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case PRE_MOVIE:
      return {
        ...state,
        sira: state.sira - 1,
      };

    case REMOVE_MOVIE:
      const newMovieList = state.movies.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        movies: newMovieList,
      };

    case BEGIN:
      return {
        ...state,
        sira: 0,
      };
    default:
      return state;
  }
}
