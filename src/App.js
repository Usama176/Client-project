import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BecomeAnArtistPage from "./pages/becomeAnArtistPage/BecomAnArtistPage";
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <BecomeAnArtistPage/>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
