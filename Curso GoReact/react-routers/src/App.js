import React from "react";
import "./config/ReactotronConfig";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";

console.tron.log("testando");

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
