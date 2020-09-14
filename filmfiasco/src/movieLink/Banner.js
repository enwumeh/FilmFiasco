import React from 'react'
import { Link } from 'react-router-dom'

const Banner = (props) => {
  const { heading } = props
  
  return (
    <div className="container">
      <ol className="banner">
        
      <li className="banner banner-item">
        <Link to="/">Movies</Link>
      </li>
      <li className="banner banner-item">
          {heading}
      </li>
       
        </ol>
    </div>
  )
}

export default Banner