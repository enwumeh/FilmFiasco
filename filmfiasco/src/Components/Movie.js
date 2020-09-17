import React, { Component } from "react";
import axios from "axios";
import MovieHome from "./MovieHome";
//withRouter: connects component to ReactRouter, passes updated RouterProps to Movie component
import { withRouter } from "react-router";

const apiKey = "1209dd5b492a1668ef9d6c969ed8e6aa";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    //allow access for id object to get passed in
    const moviesID = this.props.match.params.id;

    const url = `http://api.themoviedb.org/3/movie/${moviesID}?api_key=${apiKey}&append_to_response=videos`;
    axios
      .get(url)
      .then((response) => {
        const movie = response.data;
        this.setState({ data: movie });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <MovieHome movie={data} />
      </div>
    );
  }
}

export default withRouter(Movie);
