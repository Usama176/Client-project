import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import BecomeAnArtistPage from "./pages/becomeAnArtistPage/BecomAnArtistPage";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <BecomeAnArtistPage/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
