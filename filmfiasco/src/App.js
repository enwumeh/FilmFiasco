import React,{Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import MovieBoard from './Components/MovieBoard'
import MovieHome from './Components/MovieHome'
import './App.css';

//functionality, components, styling

const apiKey = '1209dd5b492a1668ef9d6c969ed8e6aa'


class App extends Component {
  constructor() {
    super();
    this.state = {
     
      loading: true,
      data: [],
      movie: {
        name: " ",
        title: " ",
        yearReleased: " "
      }
    }
      ;
    this.Url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`
    this.fetchData = this.fetchData.bind(this)
    this.findMovies = this.findMovies.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  
    //getting data from API
  fetchData(dataSender){
     axios.get(dataSender)
       .then((response) => {
        const theData = response.data.results
        this.setState({data: theData, loading: false})
    })
       .catch((error) => {
        console.log(error)
      this.setState({loading: false})
    })
  }
  

  componentDidMount() {
    this.fetchData(this.Url)
  }
  
  
  //search form onSubmit
  onSubmit(event) {
    event.preventDefault()
    const userInput = this.userTyped.value
    if (userInput === '') {
      this.fetchData(this.Url)
    }
    else {
      this.findMovies(userInput)
    }
  }

  //getting movies using a search query
   findMovies(userMovie) {
    const movieData = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${userMovie}`
    this.setState({  loading: true, data: []})
    this.fetchData(movieData)

  }

  render() {
    const returnQ = <div/>
    const { data } = this.state
    const { loading } = this.state
  
    if (data.length >= 1 && !loading === false) {
      returnQ = Object.keys(data).map(movie => <MovieBoard key ={movie} specs={data[movie]}/> )
    }

    else if (!data.length && !loading) {
      returnQ = (
      <button className="button-button">No Movies On Display</button>
    )
    }

  return (
    <div>
    <div className='app-title'>Film Fiasco
      <li className="banner-item">
      <Link to="/">Home</Link>
      </li>
      <li className="banner-item">Movies
      </li>
        <MovieHome movie={this.state.movie} />
      <form onSubmit={this.onSubmit}>
        <input type ="text" ref ={(input) => {this.userTyped = input}}  className="search-input" placeholder="Search up Movies"/>
      </form>
      </div>
      </div>
  );
  }
}

export default App
