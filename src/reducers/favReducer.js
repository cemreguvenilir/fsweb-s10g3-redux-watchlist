import { ADD_LIST, REMOVE_LIST } from "../actions/favAction";
import { movies } from "../movies";

const initialState = {
  favorites: [],
};

export default function favReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST:
      if (state.favorites.every((item) => item.id !== action.payload.id))
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
    case REMOVE_LIST:
      const newFavList = state.favorites.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        favorites: newFavList,
      };
    default:
      return state;
  }
}
