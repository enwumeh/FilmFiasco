import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import MovieBoard from "./Components/MovieBoard";
import Movie from "./Components/Movie";
import Review from "./Components/Review";
import "./App.css";

//saving variables in state
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      //my personal reviews that come from airtable
      reviews: [],
      fields: {
        //for form that takes user's input and does POST in airtable
        title: "",
        review: "",
      },
    };

    //setting instances for class
    this.fetchData = this.fetchData.bind(this);
    this.findMovies = this.findMovies.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //gets secondary api url
  fetchData = async (url) => {
    let response = await axios.get(url);
    const theData = response.data.results;
    this.setState({ data: theData });
  };

  //set state for user inputs on form. used for Review component
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      //setting key and value dynamically, expanding into fields object
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

  //airtable GET request
  getData = async () => {
    const airtableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mymoviedata`;
    const response = await axios.get(airtableUrl, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    this.setState({ reviews: response.data.records });
  };

  //airtable POST request
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

  //search form to get queried movies by submit
  onSubmit(event) {
    event.preventDefault();
    const userInput = this.userTyped.value;
    if (userInput === "") {
      this.fetchData(this.Url);
    } else {
      this.findMovies(userInput);
    }
  }

  //getting movies using a search query. fetchData is the api call
  findMovies(userMovie) {
    const movieData = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&query=${userMovie}`;
    this.fetchData(movieData);
  }

  render() {
    const { data } = this.state;
    const { reviews } = this.state;
    const { review } = this.state.fields;
    const { title } = this.state.fields;

    return (
      <div>
        <h1 className="title">Film Fiasco</h1>

        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="link-to-home">Movies</h2>
        </Link>

        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            // allowing input to be set dynamically
            ref={(input) => {
              this.userTyped = input;
            }}
            placeholder="Search"
          />
        </form>

        <div>
          <div className="styling-board">
            {title}
            <Route exact path="/">
              {/* mapping through data array and rendering MovieBoard along with its props. React.Fragment is to return many elements without a container div/wrapper*/}
              to
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
