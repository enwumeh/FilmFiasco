import React from 'react'
import { Link } from 'react-router-dom'

const MovieBoard = (props) => {
  const { specs } = props
  const picPath = `https://image.tmdb.org/t/p/w500/${specs.poster_path}`

  const linkToMovie = `/movie/${specs.id}`
  const style = {
    backgroundImage: `url(${picPath})`
  }


  return(
  <div className="container">
    <Link to={linkToMovie}>
        <div className="board" style={style}/>
    </Link>
  </div>
  )
}

export default MovieBoard