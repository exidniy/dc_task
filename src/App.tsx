import React from "react";
import { Provider } from "react-redux";

import { Layout } from "./pages/Layout";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
