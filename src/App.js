import React from "react";
import Home from "./routes/Home"
import ShowTwitter from "./ShowTwitter";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation"

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/:id" component={ShowTwitter} />
    </HashRouter>

  );
}

export default App;
