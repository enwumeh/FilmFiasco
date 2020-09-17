import React, { Component } from "react";
import Banner from "../movieLink/Banner";

class MovieHome extends Component {
  constructor(props) {
    super();
    this.state = {
      movie: {},
    };
  }

  render() {
    const { movie } = this.props;

    return (
      <div>
        <div className="container">
          <Banner heading={movie.title} />

          <div
            //image for each movie in MovieHome. From secondary API
            className="board"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w200/${movie.poster_path})`,
            }}
          ></div>

          <div className="title-space">
            <h4 className="filmtitle">{movie.title}</h4>
          </div>
          <div className="title-space status">
            <h4 className="filmtitle">{movie.status}</h4>
          </div>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    );
  }
}

export default MovieHome;
