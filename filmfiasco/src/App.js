import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import MovieBoard from "./Components/MovieBoard";
//import MovieHome from './Components/MovieHome'
import "./App.css";

//functionality, components, styling

const apiKey = "1209dd5b492a1668ef9d6c969ed8e6aa";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: [],
      reviews: [],
      title: " ",
      review: " ",
      rating: " ",
    };

    //make sure to give credit to any sources!
    // this.Url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`
    this.fetchData = this.fetchData.bind(this);
    this.findMovies = this.findMovies.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //getting data from API
  fetchData(dataSender) {
    axios
      .get(dataSender)
      .then((response) => {
        const theData = response.data.results;
        console.log(theData);
        this.setState({ data: theData, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.fetchData(
      `https://api.themoviedb.org/3/movie/popular?api_key=1209dd5b492a1668ef9d6c969ed8e6aa&language=en-US`
    );
    this.getData();
  }

  getData = async () => {
    const airtableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mymoviedata`;
    const response = await axios.get(airtableUrl, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    this.setState({ reviews: response.data.records });
  };

  postData = async (title, review, rating) => {
    const airtableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mymoviedata`;
    const posted = await axios.post(
      airtableUrl,
      {
        fields: {
          title,
          review,
          rating,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    this.setState({ title: posted.data.records });

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
    const movieData = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${userMovie}`;
    console.log(movieData);
    this.setState({ loading: true, data: [] });
    this.fetchData(movieData);
  }

  render() {
    console.log(this.state.reviews);
    const { data } = this.state;
    const { loading } = this.state;
    const { reviews } = this.state;
    const { review } = this.state;
    const { title } = this.state;
    const { rating } = this.state;
    // const {movie } = this.state

    return (
      <div>
   
        <div className="app-title">
          Film Fiasco
          </div>
          <p className="banner-item">
          <Link to="/" style={{ textDecoration: "none",  }}>Movies</Link>
        </p>
        
        
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
          {this.state.reviews.map((review, index) => {
            return (
              <div>
                <div class="styling-board" key={index}>
                 
                  <Route path="/">
                    {Object.keys(data).map((film) => (
                      <MovieBoard id={film} specs={data[film]} />
                    ))}
                  </Route>
                </div>
                <span className="reviews">
                    <h6>
                      {" "}
                      = {review.fields.title}: {review.fields.review}{" "}
                      {review.fields.rating}
                    </h6>
                </span>

               <h2>Post your Own Movie!</h2>
                <div className="userMovie">
                <label htmlFor="title">Movie Title</label>
                <input
                  type="text"
                  id="title"
                  onSubmit={(e) => this.state.title(e.target.value)}
                  />
                </div>
                
                <div className="userMovie">

                <label htmlFor="title">How would You Rate this movie?</label>
                <input
                  type="text"
                  id="rating"
                  onSubmit={(e) => this.state.rating(e.target.value)}
                  />
                </div>
                
                <div className="userMovie">
                <label htmlFor="text">Review this Movie</label>
                <input
                  type="text"
                  id="review"
                  onSubmit={(e) => this.state.review(e.target.value)}
                  />
                  </div>
                <button onClick={() => this.postData(title, rating, review)}>
                  Post
                </button>
              </div>

              
            );
          })}
        
        
      </div>
    );
  }
}

export default App;
