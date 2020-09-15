import React, { Component } from "react";
// import Genre from "../movieLink/Genre";
// import Video from "../movieLink/Video";
import Banner from "../movieLink/Banner";
// import { render } from "react-dom";

class MovieHome extends Component {
  constructor(props) {
    super();
    this.state = {
      movie: {},
    };
  }

  render() {
    const { movie } = this.props;
    console.log(movie)
    // const picPath = movie && `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
    // const styles = {
    //   backgroundImage: `url(${picPath})`

      // backgroundImage: `url(${ picPath })`,
    // };

    //list of possible movie genres
    // const movieGenre = movie.genres;

    // let genreOptions = Object.keys(movieGenre).map(genre => <Genre key={genre} genre={movieGenre[genre]} />)
    // const movieVids = movie.videos;
    // const vidOptions = Object.keys(movieVids).map(vid => <Video key={vid} trailer={movieVids[vid]} />)
    return (
      <div>
        {/* {console.log(movie.genres)} */}

        <div className="container">
          <Banner heading={movie.title} />

          <div className="board" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w200/${movie.poster_path})`}}>
          </div>

          {/* {console.log("STYLES", styles)} */}
          <div className="title-space">
            <h4 className="filmtitle">{movie.title}</h4>
          </div>
          <div className="title-space">
            <h4 className="filmtitle">{movie.status}</h4>
          </div>
          <p className="overview">
            {movie.overview}
            {/* {console.log(movie)}
            {console.log(movie.overview)} */}
          </p>
          <br />
          <br />
          <li className="list-item">{/* {genreOptions} */}</li>
          {/* <h5 className="filmtitle">Trailers:</h5> */}
          {/* <div className="center-text"> */}
          {/* <Video trailer={movie.videos} /> */}
          {/* for (const result in movie.videos) */}
          {/* {console.log(movie.videos)} */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default MovieHome;
