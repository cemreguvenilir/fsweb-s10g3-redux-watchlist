//import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";

import { useSelector, useDispatch } from "react-redux";
import addList from "./actions/favAction";
import { movies } from "./movies";
import {
  beginMovie,
  nextMovie,
  preMovie,
  removeMovie,
} from "./actions/movieAction";

function App() {
  const dispatch = useDispatch();

  //const [sira, setSira] = useState(0);
  const sira = useSelector((store) => store.movieReducer.sira);
  const movie = useSelector((store) => store.movieReducer.movies)[sira];
  const favMovies = useSelector((store) => store.favReducer.favorites);

  function sonrakiFilm() {
    //setSira(sira + 1);
    dispatch(nextMovie());
  }
  function oncekiFilm() {
    dispatch(preMovie());
  }
  function basaDon() {
    dispatch(beginMovie());
  }
  function handleAddFav() {
    dispatch(addList(movie));
    dispatch(removeMovie(movie.id));
  }
  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie />

          <div className="flex gap-3 justify-end py-3">
            {sira > 0 && (
              <button
                onClick={basaDon}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Başa Dön
              </button>
            )}
            {sira !== 0 && (
              <button
                onClick={oncekiFilm}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Önceki
              </button>
            )}
            {sira < movies.length - 1 && (
              <button
                onClick={sonrakiFilm}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Sıradaki
              </button>
            )}

            <button
              onClick={handleAddFav}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
