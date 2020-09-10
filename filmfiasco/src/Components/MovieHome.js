import React, {Component} from 'react'
import Genre from '../movieLink/Genre'
import Video from '../movieLink/Video'
import Banner from '../movieLink/Banner'
import { render } from 'react-dom'


class MovieHome extends Component  {
  constructor(props) {
    super()
  }
  

  render() {
    const { movie } = this.props;
  const picPath = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  const style = {
    backgroundImage: `url${picPath}`
  }
    
    //list of possible movie genres
    const movieGenre = this.movie.genres 
    console.log(movieGenre)
  const genreOptions = Object.keys(movieGenre).map(genre => <Genre key={genre} genre={movieGenre[genre]} />)
  const movieVids = movie.videos;
  const vidOptions = Object.keys(movieVids).map(vid => <Video key={vid} trailer={movieVids[vid]} />)

  return (
    <div>
      <div className="container">
        <Banner heading ={movie.original_title} />
      </div>
      <div className="container">
        <div className="board" style={style} />
        <h4 className="filmtitle">
          {movie.original_title}
        </h4>
        <p className="overview">
          {movie.overview}
        </p>
        {/* <span className="inline">
          {genreOptions}
        </span> */}
        <br /><br />
        <h5 className="filmtitle">Trailers:</h5>
        <div className="center-text">
          {movieVids}
        </div>
      </div>
    </div>
  )
}

}



    

export default MovieHome