import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import MovieBoard from "./Components/MovieBoard";
import Movie from "./Components/Movie";
import "./App.css";
import Review from "./Components/Review";

//functionality, components, styling
class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: [],
      reviews: [],
      fields: {
        title: "",
        review: "",
      },
    };

    this.fetchData = this.fetchData.bind(this);
    this.findMovies = this.findMovies.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  fetchData = async (url) => {
    let response = await axios.get(url);
    const theData = response.data.results;
    this.setState({ data: theData, loading: false });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
    });
  };

  componentDidMount = () => {
    this.fetchData(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    );
    this.getData();
  };

  getData = async () => {
    const airtableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mymoviedata`;
    const response = await axios.get(airtableUrl, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    this.setState({ reviews: response.data.records });
  };

  postData = async (e) => {
    e.preventDefault();
    const airtableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mymoviedata`;
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        "Content-Type": "application/json",
      },
    };
    await axios.post(airtableUrl, { fields: this.state.fields }, config);
  };

  //search form onSubmit
  onSubmit(event) {
    event.preventDefault();
    const userInput = this.userTyped.value;
    if (userInput === "") {
      this.fetchData(this.Url);
    } else {
      this.findMovies(userInput);
    }
  }

  //getting movies using a search query
  findMovies(userMovie) {
    const movieData = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&query=${userMovie}`;
    console.log(movieData);
    this.setState({ loading: true, data: [] });
    this.fetchData(movieData);
  }

  render() {
    const { data } = this.state;
    const { reviews } = this.state;
    const { review } = this.state.fields;
    const { title } = this.state.fields;

    return (
      <div>
        <h1 className="app-title">Film Fiasco</h1>

        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="link-to-home">Movies</h2>
        </Link>

        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            ref={(input) => {
              this.userTyped = input;
            }}
            className="search-input"
            placeholder="Search up Movies"
          />
        </form>

        <div>
          <div className="styling-board">
            {title}
            <Route exact path="/">
              {Object.keys(data).map((film, id) => (
                <React.Fragment key={id}>
                  <MovieBoard keyID={id} id={film} specs={data[film]} />
                </React.Fragment>
              ))}
              <Review
                fields={this.state.fields}
                reviews={reviews}
                review={review}
                title={title}
                postData={this.postData}
                handleChange={this.handleChange}
              />
            </Route>
            <Route path="/:id">
              <Movie />
            </Route>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
