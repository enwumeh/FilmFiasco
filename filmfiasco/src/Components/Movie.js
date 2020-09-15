import React, { Component } from "react";
import axios from "axios";
import MovieHome from "./MovieHome";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const apiKey = "1209dd5b492a1668ef9d6c969ed8e6aa";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      status: false,
      loading: true,
    };
  }

  componentDidMount() {
    const moviesID = this.props.match.params.id;
    // console.log(moviesID)

    const url = `http://api.themoviedb.org/3/movie/${moviesID}?api_key=${apiKey}&append_to_response=videos`;
    axios
      .get(url)
      .then((response) => {
        const movie = response.data;
        // console.log(typeof movie);
        this.setState({ data: movie, loading: false, status: true });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false, status: false });
      });
  }

  render() {
    // const { loading } = this.state;
    // const { status } = this.state;
    const { data } = this.state;

    return (
      <div>
        <MovieHome movie={data} />
      </div>
    );
  }
}

export default withRouter(Movie);
