import React from 'react'
import { Link } from 'react-router-dom'

const Banner = (props) => {
  const { heading } = props
  
  return (
    <div className="container">
      <ol className="banner-item">
        
      <li className="banner-item">
        <Link to="/">Movies</Link>
      </li>
      <li className="banner-item">movie title should be here
        {heading} 
          {console.log(heading)}
      </li>
       
        </ol>
    </div>
  )
}

export default Banner