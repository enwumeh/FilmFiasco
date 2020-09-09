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
  const movieGenre = movie.genres
  const genreOptions = Object.keys(movieGenre).map(genre => <Genre key={genre} genre={movieGenre[genre]} />)
  const movieVids = movie.videos.results;
  const vidOptions = Object.keys(movieVids).map(vid => <Video key={vid} trailer={movieVids[vid]} />)
  //something here to do dif banners depending if movie is released or not

  return (
    <div>
      <div className="container-element">
        <Banner />
      </div>
    </div>
  )
}

}


  


    

export default MovieHome