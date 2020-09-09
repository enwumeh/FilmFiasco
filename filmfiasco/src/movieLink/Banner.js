import React from 'react'
import { Link } from 'react-router-dom'

const Banner = (props) => {
  const { heading } = props
  
  return (
    <div className="container">
      <li classname="banner-item">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </li>
      <li className="banner-item">
        {heading} //name of movie
      </li>
    </div>
  )
}

export default Banner