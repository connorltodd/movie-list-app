import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/movies" component={MovieList} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Redirect to="/movies" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
