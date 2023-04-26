export const NEXT_MOVIE = "NEXT_MOVIE";
export const PRE_MOVIE = "PRE_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const BEGIN = "BEGIN";
export const ADD_MOVIE = "ADD_MOVIE";

export function nextMovie(item) {
  return { type: NEXT_MOVIE, payload: item };
}

export function preMovie(item) {
  return { type: PRE_MOVIE, payload: item };
}

export function removeMovie(item) {
  return { type: REMOVE_MOVIE, payload: item };
}
export function beginMovie(item) {
  return { type: BEGIN, payload: item };
}

export function addMovie(item) {
  return { type: ADD_MOVIE, payload: item };
}
