import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

// Redux Setup
import { legacy_createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const container = document.getElementById("root");
const root = createRoot(container);

const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
