import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Articles from "./components/Articles/Articles";

const App = () =>
  <div>
    <Router>
      <div>
        <Route exact path="/" component={Articles} />
        <Route exact path="/api/search" component={Articles} />
      </div>
    </Router>
  </div>

export default App;
