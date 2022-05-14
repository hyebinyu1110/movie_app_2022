import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }


  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=ratings");// 여기서의 movies 는 axios 에서 온 movies
    this.setState({ movies, isLoading: false }); // 여기서의 movies 는 state 에서 온 movies
  }

  componentDidMount() {
    this.getMovies();
  }


  componentDidUpdate() {
    console.log("i did update!");
  }


  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : 
        <div className="movies">
          {movies.map((movie) => 
          (<Movie 
            key={movie.id} 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image} 
            genres={movie.genres} />)
        )}
        </div>
        
        }
      </section>
    )

  }
}


export default App;
