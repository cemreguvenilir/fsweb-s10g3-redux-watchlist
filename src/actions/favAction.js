export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

export default function addList(item) {
  return { type: ADD_LIST, payload: item };
}

export function removeList(item) {
  return { type: REMOVE_LIST, payload: item };
}
