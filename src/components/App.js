import React from "react";
import { data } from "../data";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import addMovies from "../actions";
class App extends React.Component {
  componentDidMount() {
    //Api call
    //dispatch the action
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }
  render() {
    const movies = this.props.store.getState();
    console.log("movies", movies);
    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => {
              return <MovieCard movie={movie} key={`movies-${index}`} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
