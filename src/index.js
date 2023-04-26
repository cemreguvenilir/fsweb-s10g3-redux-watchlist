import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import { BrowserRouter } from "react-router-dom";

/* 
kütüphane kurulumu,
provider 
listeye eklenen filmler anasayfadan çıkacak.
initialState
store
useSelector, action, dispatch
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(reducers);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
