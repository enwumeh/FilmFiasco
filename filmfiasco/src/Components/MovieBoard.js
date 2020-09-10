import React from 'react'
import { Link } from 'react-router-dom'

const MovieBoard = (props) => {
  const { specs, id } = props;
  console.log(specs)
  console.log(id)
  const picPath = `https://image.tmdb.org/t/p/w200/${specs.poster_path}`;

  const linkToMovie = `/${specs.id}`
  const style = {
    backgroundImage: `url(${picPath})`,
    width: "200px",
    height: "150px"
  }


  return (
  
  <div className="container">
    <Link to={linkToMovie}>
        <div className="board" style={style}>
        </div>
        
    </Link>
    </div>
  )
}

export default MovieBoard