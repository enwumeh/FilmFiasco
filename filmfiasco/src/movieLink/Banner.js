import React from 'react'
import { Link } from 'react-router-dom'

const Banner = (props) => {
  const { heading } = props
  
  return (
    <div className="container">
      <ol className = "banner">
      <li className="banner-item">
          <Link to="/">Home</Link>
        </li>
        <li className="banner-item">
        <Link to="/movies">Movies</Link>
      </li>
      <li className="banner-item">
        {heading} 
        </li>
        </ol>
    </div>
  )
}

export default Banner